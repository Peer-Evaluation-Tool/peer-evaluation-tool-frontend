<template>
  <div class="container">
    <h2 class="text-2xl font-semibold mb-4">Edit Account</h2>
    <form @submit.prevent="editAccount" class="space-y-4">
      <div>
        <label for="firstName" class="block text-gray-700">First Name:</label>
        <input type="text" id="firstName" v-model="firstName"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div>
        <label for="lastName" class="block text-gray-700">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div>
        <label for="password" class="block text-gray-700">New Password:</label>
        <input type="password" id="password" v-model="password"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div v-if="password !== confirmPassword" class="text-red-500">
        Passwords do not match.
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          Save Changes
        </button>
        <button type="button" @click="cancelEdit"
                class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded shadow focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John', // Assuming current first name is 'John'
      lastName: 'Doe', // Assuming current last name is 'Doe'
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    editAccount() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Assume an AJAX request to update the account goes here
      // Upon successful update, inform user and possibly redirect
      alert('Account details updated successfully.');
    },
    cancelEdit() {
      // Reset form fields to their original values or fetch them again if needed
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.password = '';
      this.confirmPassword = '';
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
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
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
