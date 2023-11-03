<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      // Send an API request to your server for authentication
      const userData = {
        email: this.email,
        password: this.password,
      };
      
      try {
        // Use Axios or another HTTP library to send the request
        const response = await axios.post('/login', userData);
        
        // Handle the response here, e.g., check for authentication success
        if (response.data.authenticated) {
          // Redirect to a new page or perform other actions
          this.$router.push('/dashboard');
        } else {
          // Show an error message
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  },
};
</script>
  