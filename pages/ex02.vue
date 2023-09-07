<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="primary" @click="bntSensor1">OPEN</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn color="success" @click="bntSensor2">CLOSE</v-btn>
      </v-col>
    </v-row>
    <v-spacer> </v-spacer>
    <v-spacer></v-spacer>
    <v-btn
      size="225"
      variant="tonal"
      :color="lightColor"
      class="rounded-circle"
    >
      <v-icon size="60" :icon="isLight2On"></v-icon>
    </v-btn>
    <div class="text-center"> 
      
      <v-progress-circular 
        
        :rotate="-90"
        :size="150"
        :width="15"
        :model-value="value"
        color="primary"
      >Humidity
        {{ value }}
        %
      </v-progress-circular>
      &nbsp;
      &nbsp;
      <v-progress-circular
        
        :rotate="90"
        :size="150"
        :width="15"
        :model-value="value2"
        color="red"
      >Temperature
        {{ value2 }}
        C
      </v-progress-circular>
      <br />
      <br />
      <v-progress-circular
        :rotate="90"
        :size="150"
        :width="15"
        :model-value="value3"
        color="red"
      >distance
        {{ value3 }}
        CM
      </v-progress-circular>
    </div>
    <div>
      

      <br />

      <v-progress-linear v-model="value" color="blue-grey" height="25">
        
          <strong>{{ Math.ceil(value) }}cm</strong>
        
      </v-progress-linear>

      <br />

      <v-progress-linear v-model="value2" color="yellow" height="25">
        
        <strong>{{ value2 }}cm</strong>
      </v-progress-linear>

      <br />
      <v-progress-linear v-model="value2" color="yellow" height="25">
        
        <strong>{{ value3 }}cm</strong>
      </v-progress-linear>
      
      
      
    </div>
  </v-container>
</template>
<script>

//var mqtt = require("mqtt");
// import * as mqtt from "dist/mqtt/mqtt.min";
// Rest of your file goes h
//import * as mqtt from "mqtt";
export default {
  setup() {
    useHead({
      script: ["/dist/mqtt/mqtt.min.js"],
    });
  },
  data() {
    return {
      value: 29,
      value2: 30,
      value3: 0,
      isLight2On: "mdi-lightbulb-off-outline",
      lightColor: "grey-darken-4",
      sensor1Value: "0",
      sensor2Value: "0",
    };
  },
  beforeMount() {
    this.client = mqtt.connect("ws://broker.emqx.io:8083/mqtt");
    this.client.on("connect", () => {
      console.log("on client connect");
      this.client.subscribe("temp1");
      this.client.subscribe("temp2");
      this.client.subscribe("Nawaphon1");
      this.client.subscribe("Nawaphon2");
      this.client.subscribe("1On");
      this.client.subscribe("2Off");
      this.client.subscribe("cm");
      
    });
    this.client.on("message", (topic, message) => {
      if (topic === "temp1") {
        //console.log("connect_message/temp1=>");
        // message is Buffer
        //  console.log("GOT:", message.toString());
        this.value = message.toString();
        // console.log("data=", this.value);
        // client.end()
      }
      if (topic === "temp2") {
        // console.log("connect_message/temp1=>");
        // message is Buffer
        // console.log("GOT:", message.toString());
        this.value2 = message.toString();
        //   console.log("data=", this.value);
        // client.end()
      }
      if (topic === "1On") {
        this.sensor1Value = message.toString();
        console.log("sensor1Data=", this.sensor1Value);
        this.isLight2On = "mdi-lightbulb-on-outline";
        this.lightColor = "amber-darken-4";
        // client.end()
      }
      if (topic === "2Off") {
        this.sensor2Value = message.toString();
        console.log("sensor2Data=", this.sensor2Value);
        this.isLight2On = "mdi-lightbulb-off-outline";
        this.lightColor = "grey-darken-4";
        // client.end()
      }
      if (topic === "cm") {
        //  console.log("connect_message/cm=>");
        // message is Buffer
        // console.log("GOT:", message.toString());
        this.value3 = message.toString();
        //console.log("data=", this.value);
        // client.end()
      }
      
    });
  },
  
  
  methods: {
    bntSensor1() {
      this.client.publish("Nawaphon1", "1");
      console.log("sensor1");
    },
    bntSensor2() {
      this.client.publish("Nawaphon2", "0");
      console.log("sensor2");
    },
  },
};
</script>