<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold">Welcome back, {{ userName }}</h1>
      <p class="text-gray-600 mt-1">Here's an overview of your progress</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="(stat, index) in stats" :key="index" class="card flex items-center p-6">
        <div class="h-12 w-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
          <!-- Icon placeholder -->
          <div class="h-6 w-6">{{ stat.icon }}</div>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">{{ stat.label }}</h3>
          <p class="text-2xl font-semibold">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Your Progress</h2>
        <div class="h-64 flex items-center justify-center bg-gray-100 rounded-md">
          <!-- Chart placeholder -->
          <p class="text-gray-500">Progress Chart</p>
        </div>
      </div>

      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in recentActivity" :key="index" class="flex items-start border-b border-gray-100 pb-4 last:border-0">
            <div class="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div class="ml-3">
              <p class="text-sm font-medium">{{ item.title }}</p>
              <p class="text-xs text-gray-500">{{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Continue Learning</h2>
        <NuxtLink to="/modules" class="text-sm font-medium text-primary-600 hover:text-primary-500">
          View all modules
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(module, index) in modules" :key="index" class="card hover:shadow-md">
          <div class="h-40 bg-gray-200 rounded-t-lg mb-4"></div>
          <h3 class="text-lg font-medium mb-2">{{ module.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ module.description }}</p>
          <div class="flex justify-between items-center">
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-primary-600 h-2.5 rounded-full" :style="{ width: `${module.progress}%` }"></div>
            </div>
            <span class="ml-2 text-sm text-gray-500">{{ module.progress }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Upcoming Sessions</h2>
        <NuxtLink to="/calendar" class="text-sm font-medium text-primary-600 hover:text-primary-500">
          View calendar
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(session, index) in sessions" :key="index" class="card flex justify-between">
          <div>
            <span class="text-sm text-gray-500">{{ session.date }}</span>
            <h3 class="text-lg font-medium mb-1">{{ session.title }}</h3>
            <p class="text-gray-600 text-sm">{{ session.time }}</p>
          </div>
          <button class="btn btn-outline self-center">Join</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  layout: 'dashboard',
  data() {
    return {
      userName: 'John',
      stats: [
        { label: 'Completed Modules', value: '5', icon: '📚' },
        { label: 'Streak', value: '7 days', icon: '🔥' },
        { label: 'Practice Minutes', value: '240', icon: '⏱' }
      ],
      recentActivity: [
        { title: 'Completed "Introduction to Mindfulness" module', time: '2 hours ago' },
        { title: 'Practiced meditation for 15 minutes', time: 'Yesterday' },
        { title: 'Added a new journal entry', time: '2 days ago' },
        { title: 'Completed weekly assessment', time: '3 days ago' }
      ],
      modules: [
        {
          title: 'Understanding Anxiety',
          description: 'Learn about the sources and triggers of anxiety and strategies to manage it.',
          progress: 75
        },
        {
          title: 'Mindful Breathing',
          description: 'Master breathing techniques to ground yourself in the present moment.',
          progress: 40
        },
        {
          title: 'Building Resilience',
          description: 'Develop skills to bounce back from difficulties and challenges.',
          progress: 10
        }
      ],
      sessions: [
        {
          title: 'Group Meditation',
          date: 'Today',
          time: '5:00 PM - 6:00 PM'
        },
        {
          title: 'Stress Management Workshop',
          date: 'Tomorrow',
          time: '3:00 PM - 4:30 PM'
        }
      ]
    }
  }
}
</script>