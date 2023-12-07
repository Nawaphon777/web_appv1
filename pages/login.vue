<template>
  <v-img
    class="mx-auto my-6"
    max-width="228"
    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
  ></v-img>

  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-sheet class="pa-6 elevation-4">
          <v-form @submit.prevent="login">
            <v-text-field v-model="username" label="Username" :rules="usernameRules"></v-text-field>

            <v-text-field v-model="password" label="Password" :rules="passwordRules" type="password"></v-text-field>

            <v-row justify="center">
              <v-btn type="submit" class="mt-4" color="primary" dark>Login</v-btn>
            </v-row>
          </v-form>

          <v-divider class="my-4"></v-divider>

          <v-form @submit.prevent="register">
            <v-btn type="submit" class="mt-2" block color="success" dark>Register</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    username: "",
    password: "",
    // Add validation rules for username and password
    usernameRules: [
      v => !!v || 'Username is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  methods: {
    async login() {
      try {
        if (!this.username || !this.password) {
          // Display an error message or prevent the login if the fields are empty
          console.error('Username and password are required');
          return;
        }

        const credentials = {
          username: this.username,
          password: this.password,
        };

        // Use axios directly (no need for this.$axios)
        const response = await axios.post('http://localhost:9000/api/signin', credentials);
        console.log('data =>', response.data);

        // Assuming you want to redirect on successful login
        localStorage.setItem('token', response.data.token);
        this.$router.replace('/info');
      } catch (error) {
        // Handle errors here
        console.error('Error during login:', error);
      }
    },

    async register() {
      this.$router.push('/testadd');
    }
  },
};
</script>

<style scoped>
.mx-auto {
  /* Center the component on the page */
  margin: auto;
}

.text-center {
  text-align: center;
}

/* Add more styles as needed */
.mt-4 {
  width: 95%; /* Set the width to 100% for both buttons */
}

.mt-2 {
  width: 100%; /* Set the width to 100% for both buttons */
}
</style>
