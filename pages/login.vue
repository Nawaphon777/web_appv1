<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="formData.username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        username : "",
        password : ""
      }
    };
  },
// async created() {
// console.log("id=", this.$route.query.username);
// this.username = this.$route.query.username;
// const url = "http://localhost:7001/list";
// const res = await fetch(url);
// const data = await res.json();
// console.log("data=", data.datas.username);
// this.username = data.datas.username;
// this.password = data.datas.password;
// },

methods: {
   async login() {
    console.log("data =>",this.formData)
    const res = await axios.post("http://localhost:7001/login",this.formData);
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.login-form h2 {
  margin-bottom: 20px;
  color: #007bff;
}

.form-group {
  margin: 10px 0;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.message {
  color: red;
  font-size: 14px;
}

/* Add more styles as needed */
</style>

