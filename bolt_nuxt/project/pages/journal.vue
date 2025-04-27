<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-3xl font-bold">Journal</h1>
        <p class="text-gray-600 mt-1">Reflect on your thoughts and feelings</p>
      </div>
      <button @click="newEntry" class="btn btn-primary">
        New Entry
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div v-if="currentEntry">
          <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">{{ currentEntry.title || 'New Entry' }}</h2>
              <div class="flex space-x-2">
                <button @click="saveEntry" class="btn btn-primary">Save</button>
                <button @click="cancelEditing" class="btn btn-outline">Cancel</button>
              </div>
            </div>
            
            <div class="mb-4">
              <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                v-model="currentEntry.title"
                type="text"
                placeholder="Entry Title"
                class="form-input"
              />
            </div>
            
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                id="content"
                v-model="currentEntry.content"
                rows="12"
                placeholder="Write your thoughts here..."
                class="form-input resize-none"
              ></textarea>
            </div>

            <div class="mt-4">
              <label for="mood" class="block text-sm font-medium text-gray-700 mb-1">Mood</label>
              <select id="mood" v-model="currentEntry.mood" class="form-input">
                <option v-for="(mood, index) in moods" :key="index" :value="mood">{{ mood }}</option>
              </select>
            </div>
          </div>

          <div v-if="prompts.length > 0" class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-medium mb-3">Journal Prompts</h3>
            <div class="space-y-3">
              <div v-for="(prompt, index) in prompts" :key="index" class="p-3 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100" @click="usePrompt(prompt)">
                <p>{{ prompt }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="bg-white rounded-lg shadow-sm p-6 text-center">
          <img src="https://images.pexels.com/photos/6008498/pexels-photo-6008498.jpeg" alt="Journal" class="mx-auto h-48 object-cover rounded-lg mb-6" />
          <h2 class="text-xl font-semibold mb-2">Your Journal</h2>
          <p class="text-gray-600 mb-6">Select an entry from the list or create a new one to get started.</p>
          <button @click="newEntry" class="btn btn-primary">
            Create Your First Entry
          </button>
        </div>
      </div>

      <div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold mb-4">Past Entries</h2>
          
          <div v-if="entries.length === 0" class="text-center py-6">
            <p class="text-gray-500">No entries yet</p>
          </div>
          
          <div v-else class="space-y-4">
            <div 
              v-for="(entry, index) in entries" 
              :key="index"
              class="p-4 border border-gray-100 rounded-md hover:bg-gray-50 cursor-pointer"
              @click="editEntry(entry)"
            >
              <div class="flex justify-between">
                <h3 class="font-medium">{{ entry.title }}</h3>
                <span class="text-xs text-gray-500">{{ entry.date }}</span>
              </div>
              <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ entry.content }}</p>
              <div class="mt-2 flex justify-between">
                <span class="text-xs px-2 py-1 bg-gray-100 rounded-full">{{ entry.mood }}</span>
                <button @click.stop="deleteEntry(entry)" class="text-xs text-red-600 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 class="text-lg font-semibold mb-3">Mood Trends</h2>
          <div class="h-48 bg-gray-100 rounded-md flex items-center justify-center">
            <p class="text-gray-500">Mood Chart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalPage',
  layout: 'dashboard',
  data() {
    return {
      entries: [
        {
          id: 1,
          title: 'First day of mindfulness practice',
          content: 'Today I started my mindfulness journey. I found it challenging to focus at first, but by the end of the session I felt more centered.',
          date: 'Jan 15, 2025',
          mood: 'Calm'
        },
        {
          id: 2,
          title: 'Overcoming anxiety',
          content: 'I had a stressful meeting today, but I was able to use the breathing techniques I learned to manage my anxiety. It really helped!',
          date: 'Jan 10, 2025',
          mood: 'Optimistic'
        }
      ],
      currentEntry: null,
      moods: ['Happy', 'Calm', 'Anxious', 'Sad', 'Excited', 'Frustrated', 'Optimistic', 'Reflective'],
      prompts: [
        'What are three things you feel grateful for today?',
        'Describe a challenging situation and how you handled it.',
        'What self-care activity would benefit you most right now?',
        'What is one thing you'd like to improve about yourself?'
      ]
    }
  },
  methods: {
    newEntry() {
      this.currentEntry = {
        id: Date.now(),
        title: '',
        content: '',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        mood: 'Calm'
      }
    },
    editEntry(entry) {
      this.currentEntry = { ...entry }
    },
    saveEntry() {
      if (!this.currentEntry.title || !this.currentEntry.content) {
        alert('Please add a title and content to your entry')
        return
      }

      const existingIndex = this.entries.findIndex(e => e.id === this.currentEntry.id)
      if (existingIndex !== -1) {
        this.entries.splice(existingIndex, 1, { ...this.currentEntry })
      } else {
        this.entries.unshift({ ...this.currentEntry })
      }

      this.currentEntry = null
    },
    cancelEditing() {
      this.currentEntry = null
    },
    deleteEntry(entry) {
      if (confirm('Are you sure you want to delete this entry?')) {
        this.entries = this.entries.filter(e => e.id !== entry.id)
        
        if (this.currentEntry && this.currentEntry.id === entry.id) {
          this.currentEntry = null
        }
      }
    },
    usePrompt(prompt) {
      if (!this.currentEntry) {
        this.newEntry()
      }
      
      this.currentEntry.content += this.currentEntry.content 
        ? `\n\n${prompt}\n\n` 
        : `${prompt}\n\n`
    }
  }
}
</script>