<template>
  <div>
    <form @submit.prevent="submitForm" v-if="!formSubmitted" class="register-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" class="form-control" placeholder="Enter your username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter your password" required />
      </div>
      <button class="btn btn-primary submit" type="submit">
        เพิ่มข้อมูล
      </button>
    </form>

    <!-- Show success message when formSubmitted is true -->
    <div v-if="formSubmitted" class="submitted-message">
      Data added successfully!
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      formSubmitted: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint where you want to send the data
        await axios.post('http://localhost:9000/api/add', {
          username: this.username,
          password: this.password,
        });

        // Set formSubmitted to true after successfully submitting data
        this.formSubmitted = true;
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit {
  font-size: 18px;
  color: #fff;
  background-color: #3498db;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submitted-message {
  margin-top: 20px;
  text-align: center;
  color: #28a745;
}
</style>
