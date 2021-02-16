<!-- comment
Here we creating snackbar component which 
would be used in parent component 
for displaying snackbar
-->
<template>
  <v-snackbar v-model="showSnackbar" :timeout="timeout">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="showSnackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
/* import Vue from "vue";
import Component from "vue-class-component"; */
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Snackbar extends Vue {
  @Prop() text!: string;
  @Prop() showSnackbar!: boolean;
  @Prop() timeout!: string;

  public setSnackbar = (snackbarData: any) => {
    this.text = snackbarData.text;
    this.showSnackbar = true;
    this.timeout = snackbarData.timeout;
  };
}
</script>
