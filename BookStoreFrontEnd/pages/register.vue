<template>
  <v-form ref="form">
    <v-app>
      <v-content>
        <v-card
          class="card-height-width mx-auto mt-9 pl-5 pr-5"
        >
        <v-tabs>
          <v-tab>
           <v-card-title class="mb-5">Login</v-card-title>
          </v-tab>
           <v-tab>
           <v-card-title class="mb-5">Sign up</v-card-title>
          </v-tab>
        </v-tabs>
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
              <v-row>
                <v-text-field
                      v-model="mobileNumber"
                      outlined
                      dense
                      label="Mobile Number"
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
//import { Vue } from "vue-property-decorator";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  validations: {
     emailId: {
      required,
      email
    }
  }
})

export default class Register extends Vue {
  private fullName: string = "shilpa k";
  private emailId: string = "";
  private password: string = "";
  private mobileNumber: string = "";
  get fullNameErrors(): string[] {
      var errors: string[] = [];
      if (!this.$v.firstName.$dirty)
       return errors;
      !this.$v.firstName.required && errors.push("Enter first name")
      !this.$v.firstName.minLength &&
        errors.push("Name must contain 2 characters")
      return errors
  }
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
<style lang="scss">
@import url("../assets/registration.scss");
</style>