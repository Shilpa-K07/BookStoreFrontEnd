<template>
  <v-app>
    <v-content>
       <Snackbar ref="snack" />
      <v-row>
        <AppBar ref="appBar"/>
      </v-row>
      <v-col>
      <v-row class="book-item-title mb-2">
        <a @click="goToHome">Home</a> |
        <nuxt-link :to="{ path: 'addToBag', query: {book: item}}">Book</nuxt-link>
        </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs12 sm6 md6>
            <v-row>
              <v-card class="mx-auto book-wishlist-card" outlined>
                <v-img class="mx-auto book-item-image mt-4" :src="item.books.image"></v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex">
              <v-btn  class="notify-me-btn mt-5" @click="addToCart" :disabled="isAddedToCart">Add to bag</v-btn>
              <v-btn  class="wish-list-btn mt-5" @click="addToWishlist" :disabled="isWishlisted"><v-icon class="mr-2">mdi-heart</v-icon>wishlist</v-btn>
            </v-row>
          </v-flex>
          <v-flex xs12 sm6 md6 class="book-description">
            <v-row class="book-details">
            <v-list-item class="add-bag-book-title">{{item.books.title}}</v-list-item>
            <v-list-item class="add-bag-book-author">{{item.books.author}}</v-list-item>
            <v-list-item>{{'('+item.books.quantity+')'}}</v-list-item>
            </v-row>
            <v-row>
              <v-list-item class="add-bag-book-price">{{'Rs.'+item.books.price}}</v-list-item>
            </v-row>
            <v-divider class="mt-5"/>
            <v-row>
              <v-list-item class="add-bag-book-description mt-5">Book Detail</v-list-item>
              <v-list-item class="description">{{item.books.description}}</v-list-item>
            </v-row>
            <v-divider class="mt-5"/>
            <v-row class="cust-feedback mb-5">
              <v-list-item class="mt-5">Customer Feedback</v-list-item>
              <v-card class="mt-5 feedback-cart ml-3" outlined>
                <h5 class="ml-5 mt-2 mb-2">Overall rating</h5>
                <v-textarea
                  solo
                  rows="2"
                  label="Write something here"
                  class="ml-5 mr-5"
                ></v-textarea>
                <v-row>
                  <v-col cols="12" md="8"></v-col>
                  <v-col cols="12" md="4">
                  <v-btn class="cust-feedback-submit mb-5">Submit</v-btn>
                  </v-col>
                </v-row>
              </v-card>
              </v-row>
          </v-flex>
          <MyCart ref="mycart" v-show="false"/>
        </v-layout>
      </v-row>
      </v-col>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";
import MyCart from "./myCart.vue";
import Snackbar from "../components/Snackbar.vue";
@Component({
  components: {
    AppBar,
    MyCart,
    Snackbar
  }
})
export default class AddToBag extends Vue {
  private item: any = {};
  private items: any;
  private wishlist: any;
  private orderList: any;
  private timeout: number= 2000;
  private isAddedToCart: boolean=false;
  private isWishlisted: boolean=false;
  beforeMount() {
    this.item = this.$route.query.book;
    if(this.$route.query.books != undefined)
       this.items = this.$route.query.books;
    else
      this.items = [];

    if(this.$route.query.wishlistBooks != undefined)
      this.wishlist = this.$route.query.wishlistBooks;
    else  
      this.wishlist = [];
    
    if(this.$route.query.orderedBooks != undefined)
      this.orderList = this.$route.query.orderedBooks
    else
      this.orderList = [];
  }

  mounted(){
    if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setWishlistItems(this.wishlist);
    }

    if(this.items !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setBook(this.items);
    }

    if(this.orderList !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setOrderedBooks(this.orderList);
    }
  }
  updated () {
    if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setWishlistItems(this.wishlist);
    }

    if(this.items !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setBook(this.items);
    }

    if(this.orderList !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setOrderedBooks(this.orderList);
    }
  }
  addToCart(){
  this.items.push(this.item);
    const appBar: any = this.$refs.appBar;
    appBar.setBook(this.items);

    const child: any = this.$refs.snack;
    const snackbarData = {
      text: "added to cart",
      timeout: this.timeout
    };
    child.setSnackbar(snackbarData);
    setTimeout(()=>{
      this.isAddedToCart = true;
    }, 1000)
  }

  addToWishlist(){
    this.wishlist.push(this.item);
    const appBar: any = this.$refs.appBar;
    appBar.setWishlistItems(this.wishlist);

    const child: any = this.$refs.snack;
    const snackbarData = {
      text: "added to wishlist",
      timeout: this.timeout
    };
    child.setSnackbar(snackbarData);
     setTimeout(()=>{
      this.isWishlisted = true;
    }, 1000)
  }

  goToHome(){
    this.$router.push({path:'/dashboard',query:{books:this.items, wishlistBooks:this.wishlist, orderedBooks: this.orderList}});
  }
}
</script>

<style lang="scss">
@import url("../assets/scss/book.scss");
</style>