<template>
  <div class="min-h-screen flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="flex-1 p-6 bg-gray-50">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  middleware: ['auth']
}
</script>