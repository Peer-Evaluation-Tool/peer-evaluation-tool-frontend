<template>
  <div id="manage-tasks" class="container">
    <h2>Manage Tasks in Weekly Activity Report</h2>
    <div class="field">
      <label for="weekSelector" class="label">Select Week:</label>
      <select id="weekSelector" v-model="selectedWeek" class="select">
        <option disabled value="">Please select one</option>
        <option v-for="week in weeks" :value="week">{{ week }}</option>
      </select>
    </div>

    <div v-if="selectedWeek">
      <div v-for="(task, index) in tasks" :key="task.id" class="task">
        <h3>Task #{{ index + 1 }}</h3>
        <p><strong>Category:</strong> {{ task.category }}</p>
        <p><strong>Description:</strong> {{ task.description }}</p>
        <p><strong>Status:</strong> {{ task.status }}</p>
        <div class="actions">
          <button @click="editTask(task)" class="button edit-button">Edit</button>
          <button @click="deleteTask(task.id)" class="button delete-button">Delete</button>
        </div>
      </div>
      <button @click="addTask" class="button add-button">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedWeek: '',
      weeks: ['Week 1', 'Week 2', 'Week 3'],
      tasks: [
        { id: 1, category: 'Development', description: 'Implement login feature', status: 'In progress' }
        // Additional tasks can be added here
      ]
    };
  },
  methods: {
    addTask() {
      // Handle adding a new task (perhaps show a modal or another form)
    },
    editTask(task) {
      // Handle editing a task
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.label {
  display: block;
  margin-bottom: 5px;
}
.select, .textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.button {
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
.edit-button {
  background-color: #007BFF;
}
.edit-button:hover {
  background-color: #0056b3;
}
.delete-button {
  background-color: #FF4136;
}
.delete-button:hover {
  background-color: #C70039;
}
.add-button {
  background-color: #2ECC40;
}
.add-button:hover {
  background-color: #28B62C;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.task {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
