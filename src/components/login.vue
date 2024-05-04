<template>
    <div class="container">
        <h2 class="text-2xl font-semibold mb-4">Account Login</h2>
        <form @submit.prevent="loginUser" class="space-y-4">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="email" v-model="email"
                    class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required>
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" id="password" v-model="password"
                    class="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required>
            </div>
            <!-- Error message for invalid credentials -->
            <div v-if="invalidCredentials" class="text-red-500">
                Invalid email or password. Please try again.
            </div>
            <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
                Log In
            </button>
            <div>
                <button type="button" @click="loginAsAdmin"
                    class="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow">
                    Login as Admin
                </button>
            </div>
        </form>
        <p class="mt-4 text-center">
            Don't have an account? <a href="/register" class="text-blue-600 hover:underline">Sign Up</a>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            invalidCredentials: false
        };
    },
    methods: {
        loginUser() {
            const validEmail = 'user@example.com';
            const validPassword = 'password';
            if (this.email === validEmail && this.password === validPassword) {
                localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
                this.$router.push('/home'); // Redirect to home page
            } else {
                this.invalidCredentials = true;
                alert('Invalid credentials. Please try again.');
            }
        },
        loginAsAdmin() {
            const adminEmail = 'admin@example.com';
            const adminPassword = 'password';

            if (this.email === adminEmail && this.password === adminPassword) {
                localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag for admin as well
                alert('Admin login successful. Redirecting to admin navigation...');
                this.$router.push('/admin-navigation');
            } else {
                this.invalidCredentials = true;
                alert('Invalid admin credentials.');
            }
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
