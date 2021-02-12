<template>
  <v-form ref="form">
    <v-app>
      <v-content>
        <v-card
          class="card-height-width mx-auto mt-9 pl-9 pt-9"
          outlined
        >
           <v-card-title>Sign up</v-card-title>
            <v-card-text>
              <v-row>
                <v-text-field
                      v-model="fullName"
                      outlined
                      dense
                      label="Full name"
                      required
                    />
              </v-row>
              <v-row>
                <v-text-field
                      v-model="emailId"
                      outlined
                      dense
                      label="Email address"
                      required
                    />
              </v-row>
              <v-row>
                <v-text-field
                      v-model="password"
                      outlined
                      dense
                      label="Password"
                      required
                    />
              </v-row>
              </v-card-text>
        </v-card>
      </v-content>
    </v-app>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Register extends Vue {
  private fullName: string = "shilpa k";
  private emailId: string = "";
  private password: string = "";
  public handleRegister(): void {
    
  }
}
/* export default {
   data: () => ({
    fullName: "",
    emailId: "",
    password: "",
  }),
  methods: {
    handleRegister(){

    }
  }
  } */
</script>
<style scoped>
@import url("../assets/registration.scss");
</style>