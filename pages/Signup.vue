<template>
    <div>
        Name: <input type="text" v-model="username"/> <br>
        Password: <input type="password" v-model="password"/> <br>
        <button @click="signup">Signup</button>
    </div>
</template>

<script>
export default {
    name: 'Signup', // Component name should be in PascalCase
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        signup() {
            // Handle signup logic here
            console.log('Signing up with:', this.username, this.password);
        }
    }
}
</script>
