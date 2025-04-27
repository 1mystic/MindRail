<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <div class="h-12 w-12 rounded-md bg-primary-600 flex items-center justify-center">
          <span class="text-white font-bold">M</span>
        </div>
      </div>
      <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">Create your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500">
          sign in to existing account
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
            <div class="mt-1">
              <input 
                id="name" 
                v-model="name"
                type="text" 
                required 
                class="form-input" 
              />
            </div>
            <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input 
                id="email" 
                v-model="email"
                type="email" 
                required 
                class="form-input" 
              />
            </div>
            <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input 
                id="password" 
                v-model="password"
                type="password" 
                required 
                class="form-input" 
              />
            </div>
            <p v-if="errors.password" class="mt-2 text-sm text-red-600">{{ errors.password }}</p>
          </div>

          <div>
            <label for="passwordConfirm" class="block text-sm font-medium text-gray-700">Confirm password</label>
            <div class="mt-1">
              <input 
                id="passwordConfirm" 
                v-model="passwordConfirm"
                type="password" 
                required 
                class="form-input" 
              />
            </div>
            <p v-if="errors.passwordConfirm" class="mt-2 text-sm text-red-600">{{ errors.passwordConfirm }}</p>
          </div>

          <div class="flex items-center">
            <input 
              id="terms" 
              v-model="acceptTerms"
              type="checkbox" 
              required
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" 
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              I agree to the
              <a href="#" class="font-medium text-primary-600 hover:text-primary-500">Terms of Service</a>
              and
              <a href="#" class="font-medium text-primary-600 hover:text-primary-500">Privacy Policy</a>
            </label>
          </div>
          <p v-if="errors.terms" class="mt-2 text-sm text-red-600">{{ errors.terms }}</p>

          <div>
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full btn btn-primary py-2"
            >
              <span v-if="isLoading">Creating account...</span>
              <span v-else>Create account</span>
            </button>
          </div>
          
          <p v-if="errors.general" class="text-sm text-center text-red-600">{{ errors.general }}</p>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button 
              type="button" 
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span>Google</span>
            </button>
            <button 
              type="button" 
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  layout: 'default',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      acceptTerms: false,
      isLoading: false,
      errors: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terms: '',
        general: ''
      }
    }
  },
  methods: {
    validateForm() {
      let isValid = true
      this.errors = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terms: '',
        general: ''
      }

      if (!this.name) {
        this.errors.name = 'Name is required'
        isValid = false
      }

      if (!this.email) {
        this.errors.email = 'Email is required'
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = 'Email is invalid'
        isValid = false
      }

      if (!this.password) {
        this.errors.password = 'Password is required'
        isValid = false
      } else if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters'
        isValid = false
      }

      if (!this.passwordConfirm) {
        this.errors.passwordConfirm = 'Please confirm your password'
        isValid = false
      } else if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = 'Passwords do not match'
        isValid = false
      }

      if (!this.acceptTerms) {
        this.errors.terms = 'You must agree to the terms and conditions'
        isValid = false
      }

      return isValid
    },
    async register() {
      if (!this.validateForm()) return

      this.isLoading = true
      
      try {
        // Call the auth store register method
        const { $auth } = useNuxtApp()
        await $auth.register(this.name, this.email, this.password)
        
        // Redirect to dashboard on success
        this.$router.push('/dashboard')
      } catch (error) {
        this.errors.general = error.message || 'Failed to create account. Please try again.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>