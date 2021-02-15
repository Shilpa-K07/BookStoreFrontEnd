<template>
  <v-form ref="form">
    <v-app>
      <v-content>
        <v-card class="card-height-width mx-auto mt-9 pl-5 pr-5">
          <v-tabs>
            <v-tab>Login</v-tab>
            <v-tab-item>
              <Login />
            </v-tab-item>
            <v-tab>Sign up</v-tab>
            <v-tab-item>
              <SignUp />
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
import Login from "../components/login.vue";
import SignUp from "../components/signUp.vue";
//import { Vue, Component } from "vue-property-decorator";
//import {Validations} from 'vue-property-decorators';
//import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
//import Vue from 'vue'
//import Component from 'vue-class-component';

@Component({
    components: {
      SignUp,
      Login
    }
})
export default class Register extends Vue {
  private user: any = {
    fullName: "",
    emailId: "",
    password: "",
    mobileNumber: ""
  };
  private showPassword: boolean = false;
  private showPasswordRegister: boolean = false;
  items: string[] = ["Login", "Sign up"];
  textValidation = {
    required: (v: string) => !!v || "this is required",
    limit_length: (v: string) =>
      v.length <= 10 || "Name should contain atleast 2 characters",
    text_length_mobile: (v: string) =>
      v.length <= 13 ||
      "Phone number must contain 10 digits followed by country code"
  };
  handleRegister = () => {
    alert((this.$refs.form as Vue & { validate: () => boolean }).validate());
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      alert("success");
    } else {
      alert("failed");
    }
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
  };

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