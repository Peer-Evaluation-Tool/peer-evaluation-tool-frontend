<template>
    <div class="team-page">
      <h1>Our Team</h1>
      <div class="team-members">
        <div v-for="member in teamMembers" :key="member.id" class="team-member">
          <img :src="member.avatar" :alt="member.name" class="avatar">
          <div class="member-details">
            <h2>{{ member.name }}</h2>
            <p>{{ member.role }}</p>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            name: 'John Doe',
            role: 'Team Leader',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna eu eros finibus accumsan.',
            avatar: 'https://via.placeholder.com/150'
          },
          {
            id: 2,
            name: 'Tim Smith',
            role: 'Developer',
            bio: 'Phasellus ut ante vel risus luctus congue. Morbi ac nisi in dui blandit ultricies.',
            avatar: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            name: 'Lily Fisher',
            role: 'Designer',
            bio: 'Integer sit amet dui libero. Vivamus nec sapien at erat mollis hendrerit.',
            avatar: 'https://via.placeholder.com/150'
          }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .team-page {
    text-align: center;
  }
  
  .team-members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .team-member {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }
  
  .avatar {
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .member-details h2 {
    margin-top: 0;
  }
  
  .member-details p {
    margin: 5px 0;
  }
  </style>
  