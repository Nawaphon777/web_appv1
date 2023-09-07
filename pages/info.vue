
<template>
    <v-container>
      <v-row align="center" justify="center">
       <v-col cols="auto">
          <v-btn color="red">Sensor1</v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn > Sensor12</v-btn>
        </v-col>
      </v-row>
      
    </v-container>

    <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :model-value="value"
      color="teal"
    >
      {{ value }}
      C
    </v-progress-circular>
        
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :model-value="value2"
      color="primary"
    >
      {{ value2 }}
      C
    </v-progress-circular>

    
  </div>
  </template>
  <script>
  
  var mqtt = require('mqtt')
  


  export default {
    
    
    data() {
      return {
        value: 29,
        value2: 30,
      };
    },
    created() {
      this.client = mqtt.connect("ws://broker.emqx.io:8083/mqtt");
      this.client.on("connect", () => {
        console.log("on client connect");
        this.client.subscribe("temp1");
        this.client.subscribe("temp2");
      });
      this.client.on("message", (topic, message) => {
        if (topic === "temp1") {
          console.log("connect_message/temp1");
          // message is Buffer
          console.log("GOT:", message.toString());
          this.msg_t = message.toString();
          console.log("data=", this.msg_t);
  
          // client.end()
        }
      });
    },
  };
  </script>