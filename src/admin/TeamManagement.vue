<template>
  <div id="team-management" class="container">
    <h2 class="text-2xl font-semibold mb-4">Team Management</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Add Student to Design Team -->
      <form @submit.prevent="addStudentToTeam" class="space-y-4">
        <h3 class="text-lg font-semibold">Add Student to Design Team</h3>
        <div>
          <label for="team-add-student-select" class="block text-sm font-medium text-gray-700">Select Team:</label>
          <select id="team-add-student-select" v-model="selectedTeamToAddStudent"
                  class="mt-1 block w-full p-2 border-gray-300 rounded-md">
            <option disabled value="">Please select one</option>
            <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
          </select>
        </div>
        <div>
          <label for="student-add-select" class="block text-sm font-medium text-gray-700">Select Student:</label>
          <select id="student-add-select" v-model="selectedStudentToAdd"
                  class="mt-1 block w-full p-2 border-gray-300 rounded-md">
            <option disabled value="">Please select one</option>
            <option v-for="student in students" :key="student.id" :value="student.id">{{ student.name }}</option>
          </select>
        </div>
        <button type="submit" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded shadow">
          Add Student to Team
        </button>
      </form>

      <!-- Remove Student from Design Team -->
      <form @submit.prevent="removeStudentFromTeam" class="space-y-4">
        <h3 class="text-lg font-semibold">Remove Student from Design Team</h3>
        <div>
          <label for="team-remove-student-select" class="block text-sm font-medium text-gray-700">Select Team:</label>
          <select id="team-remove-student-select" v-model="selectedTeamToRemoveStudent"
                  class="mt-1 block w-full p-2 border-gray-300 rounded-md">
            <option disabled value="">Please select one</option>
            <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
          </select>
        </div>
        <div>
          <label for="student-remove-select" class="block text-sm font-medium text-gray-700">Select Student:</label>
          <select id="student-remove-select" v-model="selectedStudentToRemove"
                  class="mt-1 block w-full p-2 border-gray-300 rounded-md">
            <option disabled value="">Please select one</option>
            <option v-for="student in students" :key="student.id" :value="student.id">{{ student.name }}</option>
          </select>
        </div>
        <button type="submit" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded shadow">
          Remove Student from Team
        </button>
      </form>

      <!-- Delete Senior Design Team -->
      <div class="mt-6 md:mt-0 md:col-span-2">
        <h3 class="text-lg font-semibold mb-2">Delete Senior Design Team</h3>
        <form @submit.prevent="deleteTeam" class="space-y-4">
          <div>
            <label for="team-delete-select" class="block text-sm font-medium text-gray-700">Select Team:</label>
            <select id="team-delete-select" v-model="selectedTeamToDelete"
                    class="mt-1 block w-full p-2 border-gray-300 rounded-md">
              <option disabled value="">Please select one</option>
              <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
            </select>
          </div>
          <button type="submit" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded shadow">
            Delete Team
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [],
      students: [],
      selectedTeamToAddStudent: '',
      selectedStudentToAdd: '',
      selectedTeamToRemoveStudent: '',
      selectedStudentToRemove: '',
      selectedTeamToDelete: '',
    };
  },
  mounted() {
    this.fetchTeamsAndStudents();
  },
  methods: {
    fetchTeamsAndStudents() {
      fetch('/api/teams')
        .then(response => response.json())
        .then(data => this.teams = data);
      fetch('/api/students')
        .then(response => response.json())
        .then(data => this.students = data);
    },
    addStudentToTeam() {
      // Code for adding student
    },
    removeStudentFromTeam() {
      // Code for removing student
    },
    deleteTeam() {
      // Code for deleting team
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
label {
  display: block;
  margin-bottom: 5px;
}
select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  padding: 10px 20px;
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
