export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp()
  
  // Check if user is logged in
  if (!$auth.isAuthenticated.value && to.name !== 'login' && to.name !== 'signup') {
    return navigateTo('/login')
  }
  
  // Redirect authenticated users away from login/signup
  if ($auth.isAuthenticated.value && (to.name === 'login' || to.name === 'signup')) {
    return navigateTo('/dashboard')
  }
})