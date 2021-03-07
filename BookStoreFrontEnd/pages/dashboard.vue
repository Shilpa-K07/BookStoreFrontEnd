<template>
  <v-app>
    <v-content>
      <Snackbar ref="snack" />
      <v-card class="mx-auto main-card" outlined>
        <v-row>
          <v-col>
            <AppBar ref="appBar" @onSearch="filterBooks" />
          </v-col>
        </v-row>
        <v-row class="book-main-title mb-8">Books</v-row>
        <v-row>
          <Book ref="books" />
        </v-row>
        <v-row>
          <ProgressBar ref="progressBar" />
        </v-row>
      </v-card>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import Book from "../components/Book.vue";
import AppBar from "../components/AppBar.vue";
import ProgressBar from "../components/ProgressBar.vue";
import user from "../services/user";
@Component({
  components: {
    Book,
    AppBar,
    ProgressBar
  }
})
export default class Dashboard extends Vue {
  private title: string = "BookStore";
  private changeStyle: boolean = false;
  private loadingImage: any = require("../assets/loading-buffering.gif");
  //@Prop() private loading: boolean = true;
  private loading: boolean = true;
  private timeout: number = 2000;
  //private childBook: any = this.$refs.books;
  private items: any;
  private cartItems: any;
  private wishlist: any;
  private orderList: any;
  private books: any;

  beforeMount() {
    this.items = this.$route.query.books;
    this.wishlist = this.$route.query.wishlistBooks;
    this.orderList = this.$route.query.orderedBooks;
    this.getBooks();
  }

  mounted() {
    this.setBooks();
    const progressBar: any = this.$refs.progressBar;
    progressBar.hideImage();
  }
  getBooks = () => {
    const childSnackBar: any = this.$refs.snack;
    user
      .getBooks()
      .then((data: any) => {
        const childBook: any = this.$refs.books;
        childBook.setBook(data);
        this.books = data.data.data;
      })
      .catch((error: any) => {
        const snackbarData = {
          text: "Some error occurred",
          timeout: this.timeout
        };
      });
  };

  private setBooks() {
    const childBook: any = this.$refs.books;
    childBook.setCartItems(this.items);
    const appBar: any = this.$refs.appBar;
    appBar.setBook(this.items);

    childBook.setWishlistItems(this.wishlist);
    appBar.setWishlistItems(this.wishlist);
    appBar.setOrderedBooks(this.orderList);
    childBook.setOrderedBooks(this.orderList);
  }

  filterBooks = (searchData: any) => {
    const filteredBook: any[] = [];
    const childBook: any = this.$refs.books;
    if (searchData != undefined ) {
      searchData= searchData[0].toUpperCase() +  
            searchData.slice(1); 
      this.books.forEach(function(value: any) {
        if (value.books.title.includes(searchData)) {
          filteredBook.push(value);
        }
      });
      childBook.setBookData(filteredBook);
    } else {
      childBook.setBookData(this.books);
    }
  };
}
</script>

<style lang="scss">
@import url("../assets/dashboard.scss");
</style>
            
   