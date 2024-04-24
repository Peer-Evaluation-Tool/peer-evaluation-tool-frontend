<template>
  <div class="container">
    <h2 class="text-2xl font-semibold mb-4">Student Account Registration</h2>
    <form @submit.prevent="registerUser" class="space-y-4">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">First Name:</label>
        <input type="text" id="firstName" v-model="firstName"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div>
        <label for="middleInitial" class="block text-sm font-medium text-gray-700">Middle Initial:</label>
        <input type="text" id="middleInitial" v-model="middleInitial"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               maxlength="1">
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input type="password" id="password" v-model="password"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Reenter Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword"
               class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               required>
      </div>
      <!-- Error message for password mismatch -->
      <div v-if="password !== confirmPassword" class="text-red-500">
        Passwords do not match.
      </div>
      <button type="submit"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
        Register
      </button>
      <button type="button" @click="cancelRegistration"
              class="ml-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded shadow">
        Cancel
      </button>
    </form>
    <p class="mt-4 text-center">
      Already have an account? <a href="/login" class="text-blue-600 hover:underline">Sign In</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      middleInitial: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      // Assume an AJAX request to register the user goes here
      // Upon successful registration, redirect to login page
      alert('User registered successfully. Redirecting to login page...');
      window.location.href = '/login'; // Redirect to login page
    },
    cancelRegistration() {
      this.firstName = '';
      this.middleInitial = '';
      this.lastName = '';
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
