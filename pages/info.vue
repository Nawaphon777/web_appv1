<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dahboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.prevent="showlist" class="register-button primary">
        Show List
      </v-btn>
      <v-btn @click.prevent="logout" class="register-button secondary">
        Logout
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="showlist">
          <v-list-item-icon>
            <v-icon>mdi-view-list</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Show List</v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Logout</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main style="background-color: #F3FDE8; background-size: cover;">
      <router-view>
        <!-- Your content goes here -->
        <v-layout>
          <!-- Sensor Control -->
          <v-container>
            <div style="height: 300px; width: 300px; background-color: #EEEDED; display: flex; flex-direction: column; justify-content: center; text-align: center; margin: 10px 50px; border-radius: 50px;">
              <!-- Sensor Icon -->
              <v-row align="center" justify="center">
                <v-btn size="200" display="flex" variant="tonal" :color="lightColor" class="rounded-circle">
                  <v-icon size="40" :icon="isLight2On"></v-icon>
                </v-btn>
              </v-row>
              <!-- Sensor Buttons -->
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <v-btn color="primary" @click="bntSensor1">OPEN</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="success" @click="bntSensor2">CLOSE</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-container>

          <!-- Sensor Data Display -->
          <v-container style="display: flex;">
            <div style="height: 500px; align-items: center; width: 1400px; margin: 0px 0px 0px 0px; padding: 30px; background-color:#EEEDED ; border-radius: 20px;">
              <div class="text-center">
                <!-- Sensor Circular Progress -->
                <v-progress-circular :rotate="-90" :size="200" :width="30" :model-value="value" color="primary">
                  ความชื้น {{ value }}%
                </v-progress-circular>
                &nbsp; &nbsp;
                <v-progress-circular :rotate="90" :size="200" :width="30" :model-value="value2" color="red">
                  อุณหภูมิ {{ value2 }} C
                </v-progress-circular>
                &nbsp; &nbsp;
                <v-progress-circular :rotate="90" :size="200" :width="30" :model-value="value3" color="DarkGreen">
                  วัดระยะ {{ value3 }} CM
                </v-progress-circular>
              </div>
              <!-- Sensor Data -->
              <div>
                <br />
                <li>Humidity</li>
                <v-progress-linear v-model="value" color="blue-grey" height="25">
                  <strong>{{ Math.ceil(value) }}cm</strong>
                </v-progress-linear>
                <br />
                <li>Temperature</li>
                <v-progress-linear v-model="value2" color="yellow" height="25">
                  <strong>{{ value2 }}c</strong>
                </v-progress-linear>
                <br />
                <li>Distance</li>
                <v-progress-linear v-model="value2" color="red" height="25">
                  <strong>{{ value3 }}cm</strong>
                </v-progress-linear>
              </div>
            </div>
          </v-container>
        </v-layout>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      interval: {},
      logoutMessage: false,
      value: 0,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    async showlist() {
      this.toggleDrawer();
      this.$router.push('/showdata');
    },
    async logout() {
      this.toggleDrawer();
      localStorage.removeItem('token');
      this.logoutMessage = true;
      this.$router.push({ name: 'login' });
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style scoped>
  /* Your existing styles */
</style>
