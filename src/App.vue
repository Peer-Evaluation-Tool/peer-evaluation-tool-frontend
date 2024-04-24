<script>
import Navigation from '@/components/Navigation.vue';
export default {
  components: { Navigation },
};
</script>

<template>
  <div>
    <navigation class="navigation"></navigation>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.navigation {
  margin-bottom: 20px;
}

.router-view {
  background-color: #f3f3f3;
  padding: 20px;
}
.home {
  background-color: #a9c7ee;
  padding: 20px;
}
</style>
