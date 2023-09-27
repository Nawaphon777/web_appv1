<template>
  <!-- ... Your existing template code ... -->
  <div class="sensor2">
    <div class="text-center">
      <v-progress-circular
        :rotate="-90"
        :size="200"
        :width="30"
        :model-value="value"
        color="primary"
      >
        ความชื้น {{ value }}%
      </v-progress-circular>
      &nbsp; &nbsp;
      <v-progress-circular
        :rotate="90"
        :size="200"
        :width="30"
        :model-value="value2"
        color="red"
      >
        อุณหภูมิ {{ value2 }} C
      </v-progress-circular>
      &nbsp; &nbsp;
      <v-progress-circular
        :rotate="90"
        :size="200"
        :width="30"
        :model-value="value3"
        color="DarkGreen"
      >
        วัดระยะ {{ value3 }} CM
      </v-progress-circular>
    </div>
    <div class="sensor-name">
      <!-- Place the text "c9j]tvyo" outside the circular progress bars -->
      c9j]tvyo
    </div>
    <div>
      <!-- ... Your existing content ... -->
    </div>
  </div>
  <!-- ... Your existing template code ... -->
</template>

<style scoped>
/* Your existing styles... */

.sensor-name {
  /* Your CSS styles for the text element */
  font-size: 18px;
  color: #333; /* Change the text color to your preference */
  margin-top: 10px; /* Adjust the top margin as needed */
  text-align: center; /* Center-align the text */
}

</style>
