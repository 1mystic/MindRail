<template>
  <footer class="bg-white text-gray-600 p-4 text-sm border-t border-gray-200 text-center md:text-left">
    <div>© {{ currentYear }} Mind Path Navigator. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>