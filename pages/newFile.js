export default (await import('vue')).defineComponent({
data() {
return {
formData: {
username: "",
password: ""
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
async signin() {
try {
let payload = {
username: this.username,
password: this.password,
};
let { data, headers } = await this.$axios.post('/api/signin', payload);
console.log('data=>', data.token);
if (!data.token) {
return;
}
// signin success
localStorage.setItem('token', data.token);
this.$emit('success');
// this.$router.replace('/home')
} catch (e) {
}
},
onUsernameKeyup(evt) {
// console.log('xxxx')
// if (evt.code === 'Enter') {
this.$refs.password.focus();
// }
},
},
});
