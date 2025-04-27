<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold">Assessments</h1>
      <p class="text-gray-600 mt-1">Complete assessments to track your progress and receive personalized recommendations</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div 
        v-for="(assessment, index) in featuredAssessments" 
        :key="index"
        class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="h-40 bg-primary-100 flex items-center justify-center">
          <div class="text-4xl">{{ assessment.icon }}</div>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">{{ assessment.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ assessment.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ assessment.questions }} questions • {{ assessment.time }}</span>
            <NuxtLink :to="`/assessments/${assessment.id}`" class="btn btn-primary py-1">
              Start
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-4">Your Assessment History</h2>
        
        <div v-if="completedAssessments.length === 0" class="text-center py-8">
          <p class="text-gray-500">You haven't completed any assessments yet.</p>
          <p class="text-sm text-gray-500 mt-2">Complete an assessment to track your progress over time.</p>
        </div>
        
        <div v-else>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assessment
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Taken
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(assessment, index) in completedAssessments" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ assessment.title }}</div>
                    <div class="text-sm text-gray-500">{{ assessment.type }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ assessment.date }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ assessment.score }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <NuxtLink :to="`/assessments/${assessment.id}/results`" class="text-primary-600 hover:text-primary-900">
                      View Results
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold mb-4">All Assessments</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="(assessment, index) in allAssessments" 
          :key="index"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-medium">{{ assessment.title }}</h3>
              <p class="text-sm text-gray-500">{{ assessment.questions }} questions • {{ assessment.time }}</p>
            </div>
            <NuxtLink :to="`/assessments/${assessment.id}`" class="btn btn-outline py-1 text-sm">
              Take Assessment
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessmentsPage',
  layout: 'dashboard',
  data() {
    return {
      featuredAssessments: [
        {
          id: 1,
          title: 'Mindfulness Awareness Scale',
          description: 'Assess your current level of mindfulness and awareness in daily life.',
          questions: 15,
          time: '5-10 min',
          icon: '🧠'
        },
        {
          id: 2,
          title: 'Stress & Anxiety Check',
          description: 'Measure your current stress and anxiety levels to track changes over time.',
          questions: 20,
          time: '7-12 min',
          icon: '😌'
        },
        {
          id: 3,
          title: 'Sleep Quality Assessment',
          description: 'Evaluate your sleep patterns and identify areas for improvement.',
          questions: 12,
          time: '4-8 min',
          icon: '💤'
        }
      ],
      completedAssessments: [
        {
          id: 1,
          title: 'Mindfulness Awareness Scale',
          type: 'Self-assessment',
          date: 'Jan 15, 2025',
          score: '72/100'
        },
        {
          id: 2,
          title: 'Stress & Anxiety Check',
          type: 'Self-assessment',
          date: 'Jan 3, 2025',
          score: '65/100'
        }
      ],
      allAssessments: [
        {
          id: 1,
          title: 'Mindfulness Awareness Scale',
          questions: 15,
          time: '5-10 min'
        },
        {
          id: 2,
          title: 'Stress & Anxiety Check',
          questions: 20,
          time: '7-12 min'
        },
        {
          id: 3,
          title: 'Sleep Quality Assessment',
          questions: 12,
          time: '4-8 min'
        },
        {
          id: 4,
          title: 'Emotional Wellbeing Index',
          questions: 25,
          time: '10-15 min'
        },
        {
          id: 5,
          title: 'Work-Life Balance Evaluation',
          questions: 18,
          time: '6-10 min'
        },
        {
          id: 6,
          title: 'Relationship Satisfaction Scale',
          questions: 16,
          time: '5-8 min'
        }
      ]
    }
  }
}
</script>