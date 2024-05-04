<template>
    <div id="find-teams" class="container">
      <h2 class="text-2xl font-semibold mb-4">Find Teams</h2>
      <!-- Form Submission for Searching Teams -->
      <form @submit.prevent="searchTeams" class="space-y-4">
        <!-- Enter Team Name -->
        <div>
          <label for="team-name" class="block text-sm font-medium text-gray-700">Team Name:</label>
          <input type="text" id="team-name" v-model="searchCriteria.teamName"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter team name...">
        </div>

        <!-- Enter Academic Year -->
        <div>
          <label for="academic-year" class="block text-sm font-medium text-gray-700">Academic Year:</label>
          <input type="text" id="academic-year" v-model="searchCriteria.academicYear"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter academic year...">
        </div>

        <!-- Enter Section Name -->
        <div>
          <label for="section-name" class="block text-sm font-medium text-gray-700">Section Name:</label>
          <input type="text" id="section-name" v-model="searchCriteria.sectionName"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter section name...">
        </div>

        <!-- Enter Instructor ID -->
        <div>
          <label for="instructor-id" class="block text-sm font-medium text-gray-700">Instructor ID:</label>
          <input type="text" id="instructor-id" v-model="searchCriteria.instructorId"
            class="w-full p-2 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter instructor id...">
        </div>

        <!-- Search Button -->
        <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Search
        </button>
      </form>

      <!-- Search Results Section for Finding Teams -->
      <div class="mt-6">
        <h3 class="text-lg font-semibold">Search Results</h3>

        <!-- If Team is Found -->
        <ul v-if="searchResults.length > 0" class="list-disc pl-5">
            <ul class="team-list">
                <li v-for="team in searchResults" :key="team.id" class="team-item">
                    <span class="team-name">Name: {{ team.id }}</span> <br>
                    <span class="team-year">Year: {{ team.academicYear }}</span> <br>
                    <span class="section-name">Section Name: {{ team.sectionDto ? team.sectionDto.id : 'No Assigned Section' }}</span> <br>
                    <span class="instructor-name">Instructor Name: {{ team.instructorDto ? team.instructorDto.name : 'No Assigned Instructor' }}</span>
                </li>
            </ul>
        </ul>

        <!-- Error if not Found -->
        <div v-else>No matching teams found.</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchCriteria: {
          teamName: '',
          academicYear: '',
          sectionName: '',
          instructorId: '',
        },
        searchResults: [],
        searchUrl: 'http://localhost:80/api/v1/teams'
      };
    },
    methods: {
      searchTeams() {
        //Stored Results from Fetch Query
        this.searchResults = []

        // Search by Team Name
        if(this.searchCriteria.teamName !== ''){
          fetch(this.searchUrl +"/"+ this.searchCriteria.teamName, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(data => {
              const jsonElements = Object.values(data).filter(value => typeof value === 'object' && value !== null); // Assuming the response data is an Object of teams
              this.searchResults = jsonElements;
              console.log(this.searchResults)
            })
            .catch(error => {
              console.error('Error:', error);
              this.searchResults = [];
            });
        }

        // Search by Academic Year
        else if(this.searchCriteria.academicYear !== ''){
          fetch(this.searchUrl + '/findByYear/' + this.searchCriteria.academicYear, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(data => {
              this.searchResults = data.data; // Assuming the response data is an array of teams
              console.log(this.searchResults)
            })
            .catch(error => {
              console.error('Error:', error);
              this.searchResults = [];
            });
        }

        // Search by Section Name
        else if(this.searchCriteria.sectionName !== ''){
          fetch(this.searchUrl + '/findBySection/' + this.searchCriteria.sectionName, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(data => {
              this.searchResults = data.data; // Assuming the response data is an array of teams
              console.log(this.searchResults)
            })
            .catch(error => {
              console.error('Error:', error);
              this.searchResults = [];
            });
        }

        // Search by Instructor ID
        else if(this.searchCriteria.instructorId !== ''){
          fetch(this.searchUrl + '/findByInstructor/' + this.searchCriteria.instructorId, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(data => {
              this.searchResults = data.data; // Assuming the response data is an array of teams
              console.log(this.searchResults)
            })
            .catch(error => {
              console.error('Error:', error);
              this.searchResults = [];
            });
        }

        else{
          this.searchCriteria.academicYear = ''
          this.searchCriteria.teamName = ''
          this.searchCriteria.sectionName=''
          this.searchCriteria.instructorId=''
        }
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

  .team-list {
  list-style-type: none;
  padding: 0;
}

.team-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.team-name {
  font-weight: bold;
}

.team-year {
  margin-left: 10px;
}

.section-name {
  display: inline-block;
  margin-left: 10px;
  color: #555;
}

  </style>
  