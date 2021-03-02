<template>
      <v-card class="mx-auto cart-card mt-5" outlined>
          <v-card-title> Address Details </v-card-title>
          <v-card-text>
        <v-row class="mt-5">
            <v-text-field label="Full Name" dense outlined class="mr-5 ml-5"></v-text-field>
            <v-text-field label="Mobile Number" dense outlined class="mr-5"></v-text-field>
        </v-row>
        <v-row class="ml-2">1.WORK</v-row>
        <v-row class="mt-5">
            <v-text-field label="Address" dense outlined class="mr-5 ml-5"></v-text-field>
            
        </v-row>
        <v-row class="mt-5">
            <v-text-field label="city/town" dense outlined class="mr-5 ml-5"></v-text-field>
            <v-text-field label="state" dense outlined class="mr-5"></v-text-field>
        </v-row>
          </v-card-text>
     </v-card>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
@Component({})
export default class AddressDetails extends Vue{
   
}
</script>