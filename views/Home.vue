<template>
    <v-container>
      <!-- ... โค้ดอื่น ๆ ... -->
  
      <!-- ปุ่มควบคุมเซ็นเซอร์ -->
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn color="primary" @click="openSensor1">เปิดเซ็นเซอร์ 1</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success" @click="closeSensor2">ปิดเซ็นเซอร์ 2</v-btn>
        </v-col>
      </v-row>
  
      <!-- หลอดไฟ -->
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn
            size="200"
            class="rounded-circle"
            :color="lightColor"
            @click="toggleLight"
          >
            <v-icon size="40" :icon="isLight2On"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- โค้ดอื่น ๆ ... -->
    </v-container>
  </template>