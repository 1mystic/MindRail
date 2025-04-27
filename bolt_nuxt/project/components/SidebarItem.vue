<template>
  <li>
    <NuxtLink 
      :to="route" 
      class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition"
      :class="{ 'bg-gray-100': isActive }"
    >
      <div v-if="icon" class="w-6 h-6 text-gray-500">
        <component :is="iconComponent" />
      </div>
      <span class="ml-3">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.$route.path.startsWith(this.route)
    },
    iconComponent() {
      // You would implement your icon component logic here
      // This is a simplified placeholder
      return 'div'
    }
  }
}
</script>