<template>
    <div class="navigation">
      <!-- This version will make changing path of a view easier -->
      <router-link :to="{ name: 'evaluation' }">Evaluation</router-link>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.navigation {
  a {
    background-color: #fff; // inactive route-link is white.
    text-decoration: none;
    padding: 5px 10px;
    color: #a9c7ee;
    font-weight: bold;
    
    &.router-link-exact-active {
      // active route-link is yellow.
      background-color: #8968cd;
    }
  }
}
</style>