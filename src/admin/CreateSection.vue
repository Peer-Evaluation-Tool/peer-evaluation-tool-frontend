<template>
    <div id="create-sections" class="container">
      <h2 class="text-2xl font-semibold mb-4">Create Section</h2>
      <form @submit.prevent="addSections" class="space-y-4">
        <div>
          <label for="section-name" class="block text-sm font-medium text-gray-700">Section Name:</label>
          <input type="text" id="section-name" v-model="addCriteria.id"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter section name...">
        </div>
        <div>
          <label for="academic-year" class="block text-sm font-medium text-gray-700">Academic Year:</label>
          <input type="text" id="academic-year" v-model="addCriteria.year"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter academic year...">
        </div>
        <div>
          <label for="start-date" class="block text-sm font-medium text-gray-700">Starting Date:</label>
          <input type="text" id="start-date" v-model="addCriteria.firstDate"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter starting date...">
        </div>
        <div>
          <label for="end-date" class="block text-sm font-medium text-gray-700">Ending Date:</label>
          <input type="text" id="academic-year" v-model="addCriteria.lastDate"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter ending date...">
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Add
        </button>
      </form>
      <div class="mt-6">
        <h3 class="text-lg font-semibold">Add Result</h3>
        <div v-if="addResults.code == 200" class="list-disc pl-5">
            Add Successful
        </div>
        <div v-else>Section not added.</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        addCriteria: {
          id: '',
          year: '',
          firstDate: '',
          lastDate: '',
          overseer: null,
        },
        addResults: [],
        addUrl: 'http://localhost:8080/api/v1/sections'
        // addUrl: 'https://peer-evaluation-tool.onrender.com/api/v1/sections'
      };
    },
    methods: {
      addSections() {
        this.addResults = []
        fetch(this.addUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.addCriteria)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.addResults = data; // Assuming the response data is an array of sections
                console.log(this.addResults);
            })
            .catch(error => {
                console.error('Error:', error);
                this.addResults = [];
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
  