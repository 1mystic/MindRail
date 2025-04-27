<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold">Learning Modules</h1>
      <p class="text-gray-600 mt-1">Explore our curated modules to guide your mindfulness journey</p>
    </div>

    <div class="flex flex-col md:flex-row md:space-x-4 mb-8 overflow-x-auto pb-4 -mx-2 px-2">
      <button 
        v-for="(category, index) in categories" 
        :key="index"
        @click="activeCategory = category.id"
        class="px-4 py-2 rounded-full mb-2 md:mb-0 whitespace-nowrap flex-shrink-0"
        :class="activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <div 
        v-for="(module, index) in filteredModules" 
        :key="index"
        class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="h-48 bg-gray-200">
          <img 
            :src="module.imageUrl" 
            :alt="module.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold">{{ module.title }}</h3>
            <span class="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-full">{{ module.level }}</span>
          </div>
          <p class="text-gray-600 text-sm mb-4">{{ module.description }}</p>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-sm text-gray-500 mr-2">{{ module.lessons }} lessons</span>
              <span class="text-sm text-gray-500">•</span>
              <span class="text-sm text-gray-500 ml-2">{{ module.duration }}</span>
            </div>
            <NuxtLink :to="`/modules/${module.id}`" class="text-primary-600 font-medium text-sm hover:text-primary-700">
              View Module
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary-50 p-6 rounded-lg">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-2/3 mb-6 md:mb-0 md:pr-6">
          <h2 class="text-xl font-semibold mb-2">Personalized Learning Path</h2>
          <p class="text-gray-700 mb-4">Complete our assessment to get a customized learning journey tailored to your needs and goals.</p>
          <NuxtLink to="/assessments" class="btn btn-primary">Take Assessment</NuxtLink>
        </div>
        <div class="md:w-1/3 flex justify-center">
          <img src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg" alt="Personalized Learning" class="h-32 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModulesPage',
  layout: 'dashboard',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All Modules' },
        { id: 'beginner', name: 'For Beginners' },
        { id: 'stress', name: 'Stress Management' },
        { id: 'anxiety', name: 'Anxiety Relief' },
        { id: 'sleep', name: 'Better Sleep' },
        { id: 'relationships', name: 'Relationships' }
      ],
      modules: [
        {
          id: 1,
          title: 'Introduction to Mindfulness',
          description: 'Learn the fundamentals of mindfulness practice and how it can benefit your daily life.',
          level: 'Beginner',
          category: 'beginner',
          lessons: 5,
          duration: '2 weeks',
          imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg'
        },
        {
          id: 2,
          title: 'Managing Anxiety',
          description: 'Discover practical techniques to recognize and manage anxiety in various situations.',
          level: 'Intermediate',
          category: 'anxiety',
          lessons: 8,
          duration: '3 weeks',
          imageUrl: 'https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg'
        },
        {
          id: 3,
          title: 'Sleep Improvement',
          description: 'Develop healthy sleep habits and practices to improve both the quality and duration of your sleep.',
          level: 'All Levels',
          category: 'sleep',
          lessons: 6,
          duration: '2 weeks',
          imageUrl: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg'
        },
        {
          id: 4,
          title: 'Stress Reduction',
          description: 'Learn effective strategies to reduce and manage stress in your personal and professional life.',
          level: 'Intermediate',
          category: 'stress',
          lessons: 7,
          duration: '3 weeks',
          imageUrl: 'https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg'
        },
        {
          id: 5,
          title: 'Building Healthy Relationships',
          description: 'Explore communication techniques and emotional awareness to foster healthier relationships.',
          level: 'Advanced',
          category: 'relationships',
          lessons: 9,
          duration: '4 weeks',
          imageUrl: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg'
        },
        {
          id: 6,
          title: 'Mindful Communication',
          description: 'Develop the skills to communicate with empathy, clarity, and presence in all interactions.',
          level: 'Intermediate',
          category: 'relationships',
          lessons: 7,
          duration: '3 weeks',
          imageUrl: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg'
        }
      ]
    }
  },
  computed: {
    filteredModules() {
      if (this.activeCategory === 'all') {
        return this.modules
      }
      return this.modules.filter(module => module.category === this.activeCategory)
    }
  }
}
</script>