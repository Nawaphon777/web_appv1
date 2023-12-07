<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="username"
      :counter="10"
      label="UserName"
      required
    ></v-text-field>

    <v-text-field v-model="password" label="Password" required></v-text-field>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    <v-btn color="warning" @click="doSave"> Save </v-btn>
  </v-form>

  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          สถานะการบันทึก
        </v-card-title>

        <v-card-text> บันทึกข้อมูลสำเร็จ </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> ตกลง </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <div class="text-center">
    <v-dialog v-model="dialog_error" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          สถานะการบันทึก
        </v-card-title>

        <v-card-text> บันทึกข้อมูลไม่สำเร็จ </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog_error = false">
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    valid: true,
    username: "",
    password: "",
    dep: null,
    dialog: false,
    dialog_error: false,
  }),

  methods: {
    async doSave() {
      const formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      formData.append("dep", this.dep);

      try {
        const res = await axios.post('http://localhost:7001/add', formData);
        console.log(res.data.ok);
        this.username = "";
        this.password = "";
        this.dep = "";

        // Handle the response as needed
        if (res.data.ok === 1) {
          this.dialog = true;
        } else {
          this.dialog_error = true;
        }
      } catch (error) {
        console.error('Save failed', error);
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.text-center {
  margin-top: 20px;
  text-align: center;
}

/* Add more styles as needed */
</style>
