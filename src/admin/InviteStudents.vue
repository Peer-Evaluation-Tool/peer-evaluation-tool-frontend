<template>
  <div id="send-invitations" class="container">
    <h2>Invite Students</h2>
    <form @submit.prevent="sendInvitations">
      <div>
        <label for="emails">Student Emails:</label>
        <textarea id="emails" v-model="emails" placeholder="Enter emails separated by semicolons..."></textarea>
      </div>
      <div>
        <label for="message">Custom Message (optional):</label>
        <textarea id="message" v-model="customMessage" placeholder="Custom invitation message..."></textarea>
      </div>
      <button type="submit">Send Invitations</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emails: '',
      customMessage: ''
    };
  },
  methods: {
    sendInvitations() {
      // Prepare the payload
      const payload = {
        studentEmails: this.emails.split(';').map(email => email.trim()),
        customMessage: this.customMessage
      };

      // Perform the API call
      fetch('/admin/inviteStudents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        alert('Invitations sent successfully.');
      })
      .catch(error => {
        console.error('Failed to send invitations:', error);
        alert('Failed to send invitations: ' + error.message);
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
label {
  display: block;
  margin-bottom: 5px;
}
textarea {
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
