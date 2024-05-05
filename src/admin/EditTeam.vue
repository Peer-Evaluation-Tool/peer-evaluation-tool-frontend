<template>
    <div id="create-teams" class="container">
      <h2 class="text-2xl font-semibold mb-4">Edit Team</h2>

      <!--Form Submission for Adding Team-->
      <form @submit.prevent="addTeams" class="space-y-4">

        <!--Team Name-->
        <div>
          <label for="team-name" class="block text-sm font-medium text-gray-700">Team Name:</label>
          <input type="text" id="team-name" v-model="addCriteria.id"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter team name...">
        </div>

        <!--Academic Year-->
        <div>
          <label for="academic-year" class="block text-sm font-medium text-gray-700">Academic Year:</label>
          <input type="text" id="academic-year" v-model="addCriteria.academicYear"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter academic year...">
        </div>

        <!--Form Submission Button-->
        <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Edit
        </button>
      </form>

      <!--Success/Error Message-->
      <div class="mt-6">
        <h3 class="text-lg font-semibold">Edit Result</h3>
        <div v-if="addResults.code == 200" class="list-disc pl-5">
            Edit Successful
        </div>
        <div v-else>Team not found.</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        addCriteria: {
          id: '',
          academicYear: '',
        },
        addResults: [],
        //addUrl: 'http://localhost:80/api/v1/teams'
        addUrl: 'https://peer-eval-tool-backend.azurewebsites.net/api/v1/teams'
      };
    },
    methods: {
      addTeams() {
        this.addResults = []
        fetch(this.addUrl, {
            method: 'PUT',
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
                this.addResults = data; // Assuming the response data is an array of teams
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
  