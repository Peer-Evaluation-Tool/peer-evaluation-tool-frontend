<template>
  <div id="submit-peer-evaluation" class="container">
    <h2>Submit Peer Evaluation</h2>
    <form @submit.prevent="submitPeerEvaluation">
      <div v-for="(teamMember, index) in teamMembers" :key="index" class="team-member">
        <div class="field">
          <label :for="'qualityOfWork_' + index" class="label">Quality of Work - {{ teamMember.name }}</label>
          <input :id="'qualityOfWork_' + index" type="number" v-model="teamMember.qualityOfWork"
                 class="input" min="1" max="10" required>
        </div>
        <div class="field">
          <label :for="'publicComments_' + index" class="label">Public Comments</label>
          <textarea :id="'publicComments_' + index" v-model="teamMember.publicComments" rows="3"
                    class="textarea"></textarea>
        </div>
        <div class="field">
          <label :for="'privateComments_' + index" class="label">Private Comments (for instructor only)</label>
          <textarea :id="'privateComments_' + index" v-model="teamMember.privateComments" rows="3"
                    class="textarea"></textarea>
        </div>
      </div>
      <div class="actions">
        <button type="submit" class="button submit-button">Submit Evaluation</button>
        <button type="button" @click="cancelSubmission" class="button cancel-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: 'John Doe', qualityOfWork: '', publicComments: '', privateComments: '' },
        { name: 'Lily Fisher', qualityOfWork: '', publicComments: '', privateComments: '' },
        { name: 'Tim Smith', qualityOfWork: '', publicComments: '', privateComments: '' }
      ]
    };
  },
  methods: {
    submitPeerEvaluation() {
      // Assume validation of inputs here
      // Assuming validation passes, submit data to backend
      // Upon successful submission, inform user
      alert('Peer evaluation submitted successfully.');
    },
    cancelSubmission() {
      this.teamMembers.forEach(member => {
        member.qualityOfWork = '';
        member.publicComments = '';
        member.privateComments = '';
      });
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
.input, .textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
.button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.submit-button {
  background-color: #007BFF;
  color: white;
}
.submit-button:hover {
  background-color: #0056b3;
}
.cancel-button {
  background-color: #cccccc;
  color: #333333;
}
.cancel-button:hover {
  background-color: #aaaaaa;
}
.actions {
  display: flex;
  justify-content: space-between;
}
</style>
