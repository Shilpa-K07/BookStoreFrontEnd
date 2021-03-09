<template>
  <v-form ref="signUp">
    <Snackbar ref="snack" />
    <v-card-text>
      <v-row>
        <v-text-field
          v-model="user.fullName"
          outlined
          dense
          label="Full name"
          :rules="[nameRules.required, nameRules.length]"
          required
        />
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
        <v-text-field
          v-model="user.mobileNumber"
          outlined
          dense
          label="Mobile Number"
          :rules="[mobileNoRules.required, mobileNoRules.length]"
          required
        />
      </v-row>
    </v-card-text>
    <v-btn class="register-login-btn mb-5" @click="handleRegister">Register</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from "../services/user";
import Snackbar from "../components/Snackbar.vue";

@Component({
  components: {
    Snackbar
  }
})
export default class SignUp extends Vue {
  private user: any = {
    fullName: "",
    emailId: "",
    password: "",
    mobileNumber: ""
  };
  private showPassword: boolean = false;
   private timeout: number = 2000;
  private nameRules: any = {
    required: (v: string) => !!v || "Name is required",
    length: (v: string) =>
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

  private handleRegister = () => {
    if ((this.$refs.signUp as Vue & { validate: () => boolean }).validate()) {
      const child: any = this.$refs.snack;
      var data = {
        fullName: this.user.fullName,
        emailId: this.user.emailId,
        password: this.user.password,
        mobileNumber: this.user.mobileNumber
      };
      User.register(data)
        .then((response: any) => {
          if (response) {
            const snackbarData = {
              text: "Registration successfull",
              timeout: this.timeout
            };
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("emailId", response.data.data.emailId);
            sessionStorage.setItem("name", response.data.data.name);
            child.setSnackbar(snackbarData);
          }
        })
        .catch((error: any) => {
           if (error.response.status == 409) {
            const snackbarData = {
              text: "User exists with this email Id",
              timeout: this.timeout
            };
            child.setSnackbar(snackbarData);
          } 
          else{
            const snackbarData = {
              text: "Some error occurred",
              timeout: this.timeout
            };
            child.setSnackbar(snackbarData);
          }
        });
    } 
  };
}
</script>
<style lang="scss">
@import url("../assets/scss/registration.scss");
</style>