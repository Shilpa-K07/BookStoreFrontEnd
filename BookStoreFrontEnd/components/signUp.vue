<template>
  <v-form ref="signUp">
    <v-card-text>
      <v-row>
        <v-text-field v-model="user.fullName" outlined dense label="Full name" required />
      </v-row>
      <v-row>
        <v-text-field
          v-model="user.emailId"
          outlined
          dense
          label="Email address"
          :rules="[emailRules.required, emailRules.email]"
          required
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="user.password"
          outlined
          dense
          label="Password"
          :rules="[passwordRules.required, passwordRules.length, passwordRules.upperCase, passwordRules.digit, passwordRules.specialChar]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          required
        />
      </v-row>
      <v-row>
        <v-text-field v-model="user.mobileNumber" outlined dense label="Mobile Number" required />
      </v-row>
    </v-card-text>
    <v-btn class="register-login-btn mb-5" @click="handleRegister">Register</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from "../services/user";
//import { Vue, Component } from "vue-property-decorator";
//import {Validations} from 'vue-property-decorators';
//import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
//import Vue from 'vue'
//import Component from 'vue-class-component';

export default class SignUp extends Vue {
  private user: any = {
    fullName: "",
    emailId: "",
    password: "",
    mobileNumber: ""
  };
  private showPassword: boolean = false;
  private nameRules: any = {
    required: (v: string) => !!v || "Name is required",
    limit_length: (v: string) =>
      v.length <= 10 || "Name should contain atleast 2 characters"
  };
  private mobileNoRules: any = {
    required: (v: string) => !!v || "Mobile number is required",
    length: (v: string) =>
      /^\d{2}[\s]\d{10}$/.test(v) ||
      "Phone number must contain 10 digits followed by country code"
  };
  private emailRules: any = {
    required: (v: string) => !!v || "Email is required",
    email: (v: string) => /.+@.+/.test(v) || "E-mail must be valid"
  };
  private passwordRules: any = {
    required: (v: string) => !!v || "Password is required",
    length: (v: string) =>
      (v && v.length >= 8) || "Password must have 8+ characters",
    upperCase: (v: string) =>
      /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
    digit: (v: string) => /(?=.*\d)/.test(v) || "Must have one number",
    specialChar: (v: string) =>
      /([!@$%])/.test(v) || "Must have one special character [!@#$%]"
  };

  handleRegister = () => {
    if ((this.$refs.signUp as Vue & { validate: () => boolean }).validate()) {
      var data = {
        fullName: this.user.fullName,
        emailId: this.user.emailId,
        password: this.user.password,
        mobileNumber: this.user.mobileNumber
      };
      User.register(data)
        .then((response: any) => {
          if (response) {
            console.log(JSON.stringify(response));
          }
        })
        .catch((error: any) => {
          console.error("error: " + JSON.stringify(error));
        });
    } else {
      alert("failed");
    }
  };
}
</script>
<style lang="scss">
@import url("../assets/registration.scss");
</style>