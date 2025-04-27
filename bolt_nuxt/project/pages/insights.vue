<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold">Insights</h1>
      <p class="text-gray-600 mt-1">Track your progress and view personalized insights</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="(metric, index) in keyMetrics" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-medium">{{ metric.label }}</h3>
          <div 
            class="text-xs px-2 py-1 rounded-full"
            :class="metric.trend === 'up' ? 'bg-green-100 text-green-800' : metric.trend === 'down' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'"
          >
            <span v-if="metric.trend === 'up'">↑ {{ metric.change }}</span>
            <span v-else-if="metric.trend === 'down'">↓ {{ metric.change }}</span>
            <span v-else>― No change</span>
          </div>
        </div>
        <p class="text-3xl font-semibold mb-1">{{ metric.value }}</p>
        <p class="text-sm text-gray-500">{{ metric.description }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Mindfulness Score Trend</h2>
        <div class="h-64 bg-gray-50 rounded-md flex items-center justify-center">
          <p class="text-gray-500">Chart showing mindfulness score trend over time</p>
        </div>
        <div class="mt-4 space-y-2">
          <div v-for="(item, index) in mindfulnessInsights" :key="index" class="flex items-start space-x-2">
            <div :class="`text-${item.color}-600`">•</div>
            <p class="text-sm text-gray-700">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Mood Tracking</h2>
        <div class="h-64 bg-gray-50 rounded-md flex items-center justify-center">
          <p class="text-gray-500">Chart showing mood variations over time</p>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm font-medium text-gray-700">Most common mood</p>
            <p class="text-lg">Calm (42%)</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700">Mood variability</p>
            <p class="text-lg">Medium</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700">Positive days</p>
            <p class="text-lg">68%</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700">Stress triggers</p>
            <p class="text-lg">Work (35%)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
        <h2 class="text-xl font-semibold mb-4">Your Progress</h2>
        <div class="space-y-4">
          <div v-for="(goal, index) in goals" :key="index" class="mb-4">
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium">{{ goal.title }}</span>
              <span class="text-sm text-gray-500">{{ goal.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="h-2.5 rounded-full" 
                :class="`bg-${goal.color}-600`"
                :style="{ width: `${goal.progress}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Practice Stats</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Total sessions</span>
            <span class="font-medium">42</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Current streak</span>
            <span class="font-medium">7 days</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Longest streak</span>
            <span class="font-medium">14 days</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Average duration</span>
            <span class="font-medium">12 minutes</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-600">Total practice time</span>
            <span class="font-medium">8.5 hours</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Recommendations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(recommendation, index) in recommendations" :key="index" class="border border-gray-100 rounded-lg p-4">
          <h3 class="text-lg font-medium mb-2">{{ recommendation.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ recommendation.description }}</p>
          <div class="flex space-x-2">
            <NuxtLink :to="recommendation.link" class="text-primary-600 text-sm font-medium hover:text-primary-700">
              {{ recommendation.linkText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsightsPage',
  layout: 'dashboard',
  data() {
    return {
      keyMetrics: [
        {
          label: 'Mindfulness Score',
          value: '72/100',
          description: 'Based on your latest assessment',
          trend: 'up',
          change: '8%'
        },
        {
          label: 'Average Stress Level',
          value: '4.2/10',
          description: 'From your journal entries',
          trend: 'down',
          change: '12%'
        },
        {
          label: 'Consistent Practice',
          value: '68%',
          description: 'Days with meditation practice',
          trend: 'same',
          change: '0%'
        }
      ],
      mindfulnessInsights: [
        {
          text: 'Your mindfulness score has improved by 8% in the last month.',
          color: 'green'
        },
        {
          text: 'You show strength in present moment awareness.',
          color: 'blue'
        },
        {
          text: 'Consider focusing more on non-judgmental awareness.',
          color: 'amber'
        }
      ],
      goals: [
        {
          title: 'Daily Meditation Practice',
          progress: 75,
          color: 'primary'
        },
        {
          title: 'Stress Reduction',
          progress: 62,
          color: 'secondary'
        },
        {
          title: 'Emotional Awareness',
          progress: 48,
          color: 'accent'
        },
        {
          title: 'Work-Life Balance',
          progress: 35,
          color: 'blue'
        }
      ],
      recommendations: [
        {
          title: 'Try a Body Scan Meditation',
          description: 'Based on your profile, a regular body scan practice could help improve your awareness of physical sensations.',
          link: '/modules/5',
          linkText: 'View Recommended Module'
        },
        {
          title: 'Journal More Consistently',
          description: 'Regular journaling can help you identify patterns in your thoughts and emotions.',
          link: '/journal',
          linkText: 'Go to Journal'
        },
        {
          title: 'Join a Community Discussion',
          description: 'Connecting with others on similar journeys can provide support and fresh perspectives.',
          link: '/community',
          linkText: 'Browse Community Topics'
        },
        {
          title: 'Retake Your Assessment',
          description: 'It\'s been 30 days since your last mindfulness assessment. Consider retaking it to track your progress.',
          link: '/assessments/1',
          linkText: 'Take Assessment'
        }
      ]
    }
  }
}
</script>