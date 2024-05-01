<template>
    <div id="find-sections" class="container">
      <h2 class="text-2xl font-semibold mb-4">Find Sections</h2>
      <form @submit.prevent="searchSections" class="space-y-4">
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
        <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Search
        </button>
      </form>
      <div class="mt-6">
        <h3 class="text-lg font-semibold">Search Results</h3>
        <ul v-if="searchResults.length > 0" class="list-disc pl-5">
          <li v-for="section in sortedSearchResults" :key="section.id">
            {{ section.firstName }} {{ section.lastName }} - {{ section.academicYear }} - {{ section.teamName }}
          </li>
        </ul>
        <div v-else>No matching sections found.</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchCriteria: {
          sectionName: '',
          academicYear: '',
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
      searchSections() {
        fetch('/api/sections', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.searchCriteria)
        })
          .then(response => response.json())
          .then(data => {
            this.searchResults = data; // Assuming the response data is an array of sections
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
  