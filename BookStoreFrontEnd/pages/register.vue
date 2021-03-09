<template>
    <v-app>
      <v-content>
        <v-flex>
        <v-card class="card-height-width mx-auto mt-9 pl-5 pr-5">
          <v-tabs>
            <v-tab>Login</v-tab>
            <v-tab-item key="login">
              <Login />
            </v-tab-item>
            <v-tab>Sign up</v-tab>
            <v-tab-item key="signUp">
              <SignUp />
            </v-tab-item>
          </v-tabs>
        </v-card>
        </v-flex>
      </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import User from "../services/user";
import SignUp from "./signUp.vue";
import Login from "./login.vue";
@Component({
    components: {
      SignUp,
      Login
    }
})
export default class Register extends Vue {
}
</script>

<style lang="scss">
@import url("../assets/scss/registration.scss");
</style>