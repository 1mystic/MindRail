<template>
  <div>
    <div class="flex items-center mb-6">
      <NuxtLink to="/modules" class="text-gray-500 hover:text-gray-700 mr-2">
        <span>← Back to Modules</span>
      </NuxtLink>
    </div>

    <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
      <div class="h-64 bg-gray-200">
        <img 
          :src="module.imageUrl" 
          :alt="module.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h1 class="text-3xl font-bold">{{ module.title }}</h1>
            <div class="flex items-center mt-2">
              <span class="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full">{{ module.level }}</span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">{{ module.lessons }} lessons</span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">{{ module.duration }}</span>
            </div>
          </div>
          <button class="btn btn-primary">Start Module</button>
        </div>
        
        <p class="text-gray-700 mb-6">{{ module.description }}</p>
        
        <div class="border-t border-gray-100 pt-6">
          <h2 class="text-xl font-semibold mb-4">What You'll Learn</h2>
          <ul class="space-y-2">
            <li v-for="(item, index) in module.learningPoints" :key="index" class="flex items-start">
              <div class="text-primary-500 mr-2">•</div>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Module Content</h2>
      
      <div class="space-y-4">
        <div 
          v-for="(lesson, index) in module.lessons" 
          :key="index"
          class="border border-gray-100 rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="h-8 w-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                <span class="font-medium">{{ index + 1 }}</span>
              </div>
              <div>
                <h3 class="font-medium">{{ lesson.title }}</h3>
                <p class="text-sm text-gray-500">{{ lesson.duration }}</p>
              </div>
            </div>
            <div class="flex items-center">
              <span v-if="lesson.completed" class="text-green-500 mr-3 text-sm">Completed</span>
              <button class="btn btn-outline text-sm py-1">
                {{ lesson.completed ? 'Review' : 'Start' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold mb-4">Resources</h2>
      
      <div class="space-y-4">
        <div 
          v-for="(resource, index) in module.resources" 
          :key="index"
          class="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
        >
          <div class="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
            <span class="text-gray-500">{{ resource.type }}</span>
          </div>
          <div class="flex-grow">
            <h3 class="font-medium">{{ resource.title }}</h3>
            <p class="text-sm text-gray-500">{{ resource.description }}</p>
          </div>
          <button class="btn btn-outline text-sm py-1">Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDetailPage',
  layout: 'dashboard',
  data() {
    return {
      module: {
        id: 1,
        title: 'Introduction to Mindfulness',
        description: 'This comprehensive introduction to mindfulness will guide you through the core concepts and practices of mindfulness meditation. You'll learn how to integrate mindfulness into your daily life, recognize and work with difficult emotions, and develop a sustainable practice that supports your wellbeing.',
        level: 'Beginner',
        lessons: 5,
        duration: '2 weeks',
        imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg',
        learningPoints: [
          'Understand the core principles of mindfulness practice',
          'Develop a daily meditation routine',
          'Learn to recognize and manage stress responses',
          'Apply mindfulness techniques to everyday activities',
          'Create personalized strategies for maintaining your practice'
        ],
        lessons: [
          {
            title: 'What is Mindfulness?',
            duration: '15 min',
            completed: true
          },
          {
            title: 'The Science Behind Mindfulness',
            duration: '20 min',
            completed: true
          },
          {
            title: 'Basic Meditation Techniques',
            duration: '25 min',
            completed: false
          },
          {
            title: 'Mindfulness in Daily Life',
            duration: '15 min',
            completed: false
          },
          {
            title: 'Building a Sustainable Practice',
            duration: '20 min',
            completed: false
          }
        ],
        resources: [
          {
            title: 'Guided Meditation Audio',
            description: '10-minute beginner meditation',
            type: '🔊',
          },
          {
            title: 'Mindfulness Journal Template',
            description: 'PDF worksheet for daily reflection',
            type: '📄',
          },
          {
            title: 'Further Reading List',
            description: 'Recommended books and articles',
            type: '📚',
          }
        ]
      }
    }
  },
  methods: {
    // Fetch module data based on route ID
    async fetchModule() {
      // In a real app, you would fetch data from an API
      // const { id } = this.$route.params
      // this.module = await fetchModuleById(id)
    }
  },
  mounted() {
    this.fetchModule()
  }
}
</script>