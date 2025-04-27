<template>
  <nav class="bg-white border-b border-gray-200 px-4 py-2.5 flex justify-between items-center shadow-sm">
    <div class="flex items-center">
      <button 
        class="md:hidden text-gray-600 hover:text-gray-900 p-2"
        @click="toggleSidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div class="text-xl font-semibold ml-2">{{ pageTitle }}</div>
    </div>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <button 
          class="p-2 rounded-full hover:bg-gray-100"
          @click="toggleDropdown"
        >
          <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
            {{ userInitials }}
          </div>
        </button>
        
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
          <div class="px-4 py-2 border-b border-gray-100">
            <p class="text-sm font-medium">{{ userName }}</p>
            <p class="text-xs text-gray-500">{{ userEmail }}</p>
          </div>
          <NuxtLink to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </NuxtLink>
          <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    userName() {
      return 'John Doe'
    },
    userEmail() {
      return 'john.doe@example.com'
    },
    userInitials() {
      const name = this.userName
      return name.split(' ').map(n => n[0]).join('')
    },
    pageTitle() {
      const path = this.$route.path
      const segments = path.split('/').filter(Boolean)
      if (segments.length === 0) return 'Dashboard'
      
      const section = segments[0]
      return section.charAt(0).toUpperCase() + section.slice(1)
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    toggleSidebar() {
      // Emit event to parent to toggle sidebar
      this.$emit('toggle-sidebar')
    },
    logout() {
      // Get the auth store and logout
      const { $auth } = useNuxtApp()
      $auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>