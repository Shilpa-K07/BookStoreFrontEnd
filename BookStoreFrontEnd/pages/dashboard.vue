<template>
  <v-app>
    <v-content>
      <Snackbar ref="snack" />
      <v-card class="mx-auto main-card" outlined>
        <v-row>
          <v-col>
           <!--  <v-app-bar fixed elevate-on-scroll class="app-bar">
              <v-icon class="ml-9 mr-2">mdi-book-open-variant</v-icon>
              <v-toolbar-title class>{{title}}</v-toolbar-title>
              <v-text-field
                v-click-outside="changeStyle=false"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                :class="changeStyle ? 'search-text-style' : 'search-text-style-before'"
                solo
                filled
                dense
                @click="changeStyle=true"
              />
              <v-spacer />
              <v-col class="d-flex justify-space-around">
                <v-icon class="ml-5">mdi-account-outline</v-icon>
                <v-icon class="mr-8">mdi-cart-outline</v-icon>
              </v-col>
            </v-app-bar> -->
            <AppBar />
          </v-col>
        </v-row>
        <v-row class="book-main-title mb-8">Books</v-row>
        <v-row>
          <Book ref="books" />
        </v-row>
      </v-card>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Book from "../components/Book.vue";
import AppBar from "../components/AppBar.vue";
import user from "../services/user";
@Component({
  components: {
    Book,
    AppBar
  }
})
export default class Dashboard extends Vue {
  private title: string = "BookStore";
  private changeStyle: boolean = false;
  private timeout: number = 2000;
  private childBook: any = this.$refs.books;

  beforeMount() {
    this.getBooks();
  }

  getBooks = () => {
    const childSnackBar: any = this.$refs.snack;
    user
      .getBooks()
      .then((data: any) => {
        const childBook: any = this.$refs.books;
        childBook.setBook(data);
      })
      .catch((error: any) => {
        const snackbarData = {
          text: "Some error occurred",
          timeout: this.timeout
        };
        //childSnackBar.setSnackbar(snackbarData);
      });
  };
}
</script>

<style lang="scss">
@import url("../assets/dashboard.scss");
</style>
            
   