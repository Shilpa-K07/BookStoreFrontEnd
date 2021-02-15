<template>
  <v-form ref="login">
    <v-card-text>
      <v-row>
        <v-text-field
          v-model="user.emailId"
          outlined
          dense
          label="Email id"
          :rules="emailRules"
          required
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="user.password"
          outlined
          dense
          label="Password"
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          required
        />
      </v-row>
    </v-card-text>
    <v-btn class="register-login-btn mb-5" @click="handleLogin">Login</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
export default class Login extends Vue {
  private user: any = {
    emailId: "",
    password: ""
  };
   emailRules= {
    required: (v: string) => !!v || 'Email is required',
    email: (v: string) => /.+@.+/.test(v) || 'E-mail must be valid'
   }
   passwordRules= {
    required: (v: string) => !!v || 'Password is required',
    length: (v: string) => (v && v.length >= 8) || 'Password must have 8+ characters',
    upperCase: (v: string) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
    digit: (v: string) => /(?=.*\d)/.test(v) || 'Must have one number',
    specialChar: (v: string) => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
   }
  private showPassword: boolean = false;
}
</script>
<style lang="scss">
@import url("../assets/registration.scss");
</style>

                  