<template>
  <v-app>
    <v-content>
      <Snackbar ref="snack" />
      <v-card class="mx-auto main-card" outlined>
        <v-row>
          <v-col>
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
            
   