<template>
  <div id="peer-evaluation-report" class="container">
    <h2>Peer Evaluation Report</h2>
    <div v-for="(entry, index) in reportEntries" :key="index" class="entry">
      <h3>{{ entry.studentName }}</h3>
      <p>Quality of Work: {{ entry.qualityOfWork }}</p>
      <p>Public Comments: <span class="comments">{{ entry.publicComments.join(' ') }}</span></p>
      <p>Overall Grade: {{ entry.grade }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportEntries: [
        {
          studentName: 'John Doe',
          qualityOfWork: 8.5,
          publicComments: ['Good work.', 'Need to work harder.'],
          grade: '54/60'
        },
        // Additional entries can be added here
      ]
    };
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
h3 {
  margin-top: 0;
}
.entry {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.comments {
  font-style: italic;
}
</style>
