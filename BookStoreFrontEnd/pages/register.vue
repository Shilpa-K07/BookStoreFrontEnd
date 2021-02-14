<template>
  <v-form ref="form">
    <v-app>
      <v-content>
        <v-card class="card-height-width mx-auto mt-9 pl-5 pr-5">
          <v-tabs>
            <v-tab>Login</v-tab>
            <v-tab-item>
              <v-card-text>
                <v-row>
                  <v-text-field
                    v-model="user.fullName"
                    outlined
                    dense
                    label="Email id"
                    :rules="[textValidation.required]"
                    required
                  />
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="user.fullName"
                    outlined
                    dense
                    label="Password"
                    :rules="[textValidation.required]"
                    required
                  />
                </v-row>
              </v-card-text>
              <v-btn class="register-login-btn ml-8 pb-5" @click="handleLogin">Login</v-btn>
            </v-tab-item>
            <v-tab>Sign up</v-tab>
            <v-tab-item>
              <v-card-text>
                <v-row>
                  <v-text-field
                    v-model="user.fullName"
                    outlined
                    dense
                    label="Full name"
                    :rules="[textValidation.required,textValidation.limit_length]"
                    required
                  />
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="user.emailId"
                    outlined
                    dense
                    label="Email address"
                    :rules="[textValidation.required]"
                    required
                  />
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="user.password"
                    outlined
                    dense
                    label="Password"
                    :rules="[textValidation.required]"
                    required
                  />
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="user.mobileNumber"
                    outlined
                    dense
                    label="Mobile Number"
                    :rules="[textValidation.required,textValidation.text_length_mobile]"
                    required
                  />
                </v-row>
              </v-card-text>
              <v-btn class="register-login-btn ml-8 pb-5" @click="handleRegister">Register</v-btn>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-content>
    </v-app>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from "../services/user";
//import { Vue, Component } from "vue-property-decorator";
//import {Validations} from 'vue-property-decorators';
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
//import Vue from 'vue'
//import Component from 'vue-class-component';

/* @Component({
  validations: {
     emailId: {
      required,
      email
    }
  }
}) */

export default class Register extends Vue {
  private user: any = {
    fullName: "",
    emailId: "",
    password: "",
    mobileNumber: ""
  };
  items: string[] = ["Login", "Sign up"];
  /* private fullName: string = "shilpa k";
  private emailId: string = "";
  private password: string = "";
  private mobileNumber: string = ""; */
  /*   get fullNameErrors(): string[] {
      var errors: string[] = [];
      if (!this.$v.firstName.$dirty)
       return errors;
      !this.$v.firstName.required && errors.push("Enter first name")
      !this.$v.firstName.minLength &&
        errors.push("Name must contain 2 characters")
      return errors
  } */
  textValidation = {
    required: (v: string) => !!v || "this is required",
    limit_length: (v: string) =>
      v.length <= 10 || "Name should contain atleast 2 characters",
    text_length_mobile: (v: string) =>
      v.length <= 10 ||
      "Phone number must contain 10 digits followed by country code"
  };
  handleRegister() {
    console.log("this: " + this);
    var data = {
      fullName: this.user.fullName,
      emailId: this.user.emailId,
      password: this.user.password,
      mobileNumber: this.user.mobileNumber
    };

    User.register(data)
      .then((response: any) => {
        alert("1");
        if (!response) {
          console.log(JSON.stringify(response));
        }
      })
      .catch((error: any) => {
        console.error("error: " + error);
      });
    /*  if((this.form as Vue & { validate: () => boolean }).validate()){
       alert("success")
    }else{
         alert("failed")
    } */
  }

  /*  @Validations()
    validations = {
        fifullNamerstName: {required},
        emailId: {required}
    } */
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