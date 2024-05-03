<template>
  <div class="navigation" v-if="isAuthenticated">
    <!-- This version will make changing path of a view easier -->
    <router-link :to="{ name: 'evaluation' }">Evaluation</router-link>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'student-account' }">Student Page</router-link>
    <router-link :to="{ name: 'my-team' }">My Team</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-around; // Example style to evenly space links

  a {
    background-color: #fff; // inactive route-link is white
    text-decoration: none;
    padding: 5px 10px;
    color: #a9c7ee;
    font-weight: bold;

    &.router-link-exact-active {
      // active route-link is yellow
      background-color: #8968cd;
    }
  }
}
</style>
