<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center">
            <span class="text-white font-bold">M</span>
          </div>
          <h1 class="ml-3 text-2xl font-bold text-gray-900">MindPath</h1>
        </div>
        <div class="flex space-x-4">
          <NuxtLink to="/login" class="btn btn-outline">Log in</NuxtLink>
          <NuxtLink to="/signup" class="btn btn-primary">Sign up</NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <section class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div class="animate-fade-in">
              <h2 class="text-4xl font-bold text-gray-900 mb-6">Begin Your Journey to Mindfulness</h2>
              <p class="text-lg text-gray-700 mb-8">Navigate your path towards better mental health with personalized guidance, insightful assessments, and a supportive community.</p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <NuxtLink to="/signup" class="btn btn-primary px-8 py-3 text-base">Get Started</NuxtLink>
                <NuxtLink to="/about" class="btn btn-outline px-8 py-3 text-base">Learn More</NuxtLink>
              </div>
            </div>
            <div class="mt-12 lg:mt-0 animate-slide-up flex justify-center">
              <img src="https://images.pexels.com/photos/3758048/pexels-photo-3758048.jpeg" alt="Mindfulness" class="rounded-lg shadow-xl max-h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
              <div class="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span class="text-xl font-bold">1</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Assessment</h3>
              <p class="text-gray-600">Complete our comprehensive assessment to understand your current mental health state.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style="animation-delay: 0.2s">
              <div class="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span class="text-xl font-bold">2</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Personalization</h3>
              <p class="text-gray-600">Receive a customized path with modules and practices tailored to your needs.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style="animation-delay: 0.4s">
              <div class="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <span class="text-xl font-bold">3</span>
              </div>
              <h3 class="text-xl font-bold mb-2">Growth</h3>
              <p class="text-gray-600">Track your progress, journal your thoughts, and grow with our supportive community.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 p-6 rounded-lg">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-gray-300"></div>
                <div class="ml-3">
                  <h4 class="font-medium text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
                </div>
              </div>
              <p class="text-gray-600">{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      testimonials: [
        {
          name: 'Sarah Johnson',
          title: 'Teacher',
          quote: 'Mind Path Navigator helped me develop mindfulness practices that I now use daily to manage classroom stress. Highly recommended!'
        },
        {
          name: 'David Chen',
          title: 'Software Engineer',
          quote: 'The personalized modules are excellent. I've seen a significant improvement in my anxiety levels since starting this journey.'
        },
        {
          name: 'Michelle Patel',
          title: 'Healthcare Worker',
          quote: 'The community support has been invaluable. It's comforting to know others are on similar paths and willing to share their experiences.'
        }
      ]
    }
  }
}
</script>