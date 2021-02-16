<template>
  <v-form ref="login">
    <v-flex>
    <v-card-text>
      <v-flex class="d-flex flex-column flex-gap justify-space-around">
      <v-row>
        <v-text-field
          v-model="user.emailId"
          outlined
          dense
          label="Email id"
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
          :rules="[passwordRules.required, passwordRules.uppercase, passwordRules.length, passwordRules.digit, passwordRules.specialChar]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          required
        />
      </v-row>
      </v-flex>
    </v-card-text>
     </v-flex>
       <v-flex>
    <v-btn class="register-login-btn mb-5" @click="handleLogin">Login</v-btn>
     </v-flex>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from "../services/user";

@Component({})
export default class Login extends Vue {
  private user: any = {
    emailId: "",
    password: ""
  };
   private showPassword: boolean = false;
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
 
  private handleLogin = () => {
    if ((this.$refs.login as Vue & { validate: () => boolean }).validate()) {
      var data = {
        emailId: this.user.emailId,
        password: this.user.password,
      };
      User.login(data)
        .then((response: any) => {
          if (response) {alert("Success");
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

                  