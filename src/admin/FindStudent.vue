<template>
  <div id="find-students" class="container">
    <h2 class="text-2xl font-semibold mb-4">Find Students</h2>
    <form @submit.prevent="searchStudents" class="space-y-4">
      <div>
        <label for="first-name" class="block text-sm font-medium text-gray-700">First Name:</label>
        <input type="text" id="first-name" v-model="searchCriteria.firstName"
          class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter first name...">
      </div>
      <div>
        <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name:</label>
        <input type="text" id="last-name" v-model="searchCriteria.lastName"
          class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter last name...">
      </div>
      <div>
        <label for="section-name" class="block text-sm font-medium text-gray-700">Section Name:</label>
        <input type="text" id="section-name" v-model="searchCriteria.sectionName"
          class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter section name...">
      </div>
      <div>
        <label for="academic-year" class="block text-sm font-medium text-gray-700">Academic Year:</label>
        <input type="text" id="academic-year" v-model="searchCriteria.academicYear"
          class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter academic year...">
      </div>
      <div>
        <label for="team-name" class="block text-sm font-medium text-gray-700">Team Name:</label>
        <input type="text" id="team-name" v-model="searchCriteria.teamName"
          class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter team name...">
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
        Search
      </button>
    </form>
    <div class="mt-6">
      <h3 class="text-lg font-semibold">Search Results</h3>
      <ul v-if="searchResults.length > 0" class="list-disc pl-5">
        <li v-for="student in sortedSearchResults" :key="student.id">
          {{ student.firstName }} {{ student.lastName }} - {{ student.academicYear }} - {{ student.teamName }}
        </li>
      </ul>
      <div v-else>No matching students found.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCriteria: {
        firstName: '',
        lastName: '',
        sectionName: '',
        academicYear: '',
        teamName: ''
      },
      searchResults: []
    };
  },
  computed: {
    sortedSearchResults() {
      return this.searchResults.sort((a, b) => {
        // Sorting by academic year (descending) and then by last name (ascending)
        const yearComparison = b.academicYear.localeCompare(a.academicYear);
        if (yearComparison !== 0) return yearComparison;
        return a.lastName.localeCompare(b.lastName);
      });
    }
  },
  methods: {
    searchStudents() {
      fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.searchCriteria)
      })
        .then(response => response.json())
        .then(data => {
          this.searchResults = data; // Assuming the response data is an array of students //
        })
        .catch(error => {
          console.error('Error:', error);
          this.searchResults = [];
        });
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
