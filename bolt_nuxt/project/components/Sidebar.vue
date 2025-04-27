<template>
  <aside 
    class="bg-white border-r border-gray-200 w-64 flex-shrink-0 flex flex-col transition-all duration-300"
    :class="{ '-ml-64 md:ml-0': !isOpen }"
  >
    <div class="p-4 border-b border-gray-200">
      <NuxtLink to="/dashboard" class="flex items-center">
        <div class="h-8 w-8 rounded-md bg-primary-600 flex items-center justify-center">
          <span class="text-white font-bold">M</span>
        </div>
        <h1 class="ml-3 text-xl font-bold text-gray-900">MindPath</h1>
      </NuxtLink>
    </div>
    
    <nav class="flex-1 overflow-y-auto py-4 px-3">
      <ul class="space-y-2">
        <SidebarItem 
          v-for="(item, index) in navItems" 
          :key="index"
          :route="item.route"
          :icon="item.icon"
          :label="item.label"
        />
      </ul>
    </nav>
    
    <div class="p-4 border-t border-gray-200">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <div class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span class="text-gray-600 font-bold">{{ userInitials }}</span>
          </div>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ userName }}</p>
          <button 
            @click="logout" 
            class="text-xs text-gray-500 hover:text-primary-600 transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      navItems: [
        {
          label: 'Dashboard',
          route: '/dashboard',
          icon: 'home'
        },
        {
          label: 'Journal',
          route: '/journal',
          icon: 'book'
        },
        {
          label: 'Modules',
          route: '/modules',
          icon: 'academic-cap'
        },
        {
          label: 'Assessments',
          route: '/assessments',
          icon: 'clipboard-check'
        },
        {
          label: 'Insights',
          route: '/insights',
          icon: 'chart-bar'
        },
        {
          label: 'Community',
          route: '/community',
          icon: 'users'
        },
        {
          label: 'Resources',
          route: '/resources',
          icon: 'folder'
        },
        {
          label: 'Settings',
          route: '/settings',
          icon: 'cog'
        }
      ]
    }
  },
  computed: {
    userName() {
      return 'John Doe'
    },
    userInitials() {
      const name = this.userName
      return name.split(' ').map(n => n[0]).join('')
    }
  },
  methods: {
    logout() {
      // Get the auth store and logout
      const { $auth } = useNuxtApp()
      $auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>