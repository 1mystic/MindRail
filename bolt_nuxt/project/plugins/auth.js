import { createClient } from '@supabase/supabase-js'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { ref } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Initialize Supabase client
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  )
  
  // Create reactive state
  const user = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(true)
  
  // Load user on plugin initialization
  const initAuth = async () => {
    loading.value = true
    
    try {
      // Get session from Supabase
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        user.value = session.user
        isAuthenticated.value = true
      }
    } catch (error) {
      console.error('Error loading user:', error)
    } finally {
      loading.value = false
    }
  }
  
  // Initialize auth
  initAuth()
  
  // Setup auth state change listener
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
      user.value = session.user
      isAuthenticated.value = true
    } else if (event === 'SIGNED_OUT') {
      user.value = null
      isAuthenticated.value = false
    }
  })
  
  // Auth methods
  const auth = {
    user,
    isAuthenticated,
    loading,
    
    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      return data
    },
    
    async register(name, email, password) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      })
      
      if (error) throw error
      
      return data
    },
    
    async logout() {
      const { error } = await supabase.auth.signOut()
      
      if (error) throw error
    }
  }
  
  // Provide auth to the application
  nuxtApp.provide('auth', auth)
  nuxtApp.provide('supabase', supabase)
})