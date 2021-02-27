<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar"/>
      </v-row>
      <v-row class="book-item-title mb-2">
        <a @click="goToHome">Home</a> |
        <nuxt-link :to="{ path: 'addToBag', query: {book: item}}">Book</nuxt-link>
        </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs12 md6>
            <v-row>
              <v-card class="mx-auto book-wishlist-card" outlined>
                <v-img class="mx-auto book-item-image mt-4" :src="item.books.image"></v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex">
              <v-btn class="notify-me-btn mt-5" @click="addToCart">Add to bag</v-btn>
              <v-btn class="wish-list-btn mt-5" @click="addToWishlist"><v-icon class="mr-2">mdi-heart</v-icon>wishlist</v-btn>
            </v-row>
          </v-flex>
          <v-flex xs12 md6 class="book-description">
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
          </v-flex>
          <MyCart ref="mycart" v-show="false"/>
        </v-layout>
      </v-row>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";
import MyCart from "./myCart.vue";
@Component({
  components: {
    AppBar,
    MyCart
  }
})
export default class AddToBag extends Vue {
  private item: any = {};
  private items: any;
  private wishlist: any;
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
  }

  mounted(){
    if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setWishlistItems(this.wishlist);
    }
  }
  addToCart(){
  this.items.push(this.item);
    const appBar: any = this.$refs.appBar;
    appBar.setBook(this.items);
  }

  addToWishlist(){
    this.wishlist.push(this.item);
    const appBar: any = this.$refs.appBar;
    appBar.setWishlistItems(this.wishlist);
  }

  goToHome(){
    this.$router.push({path:'/dashboard',query:{books:this.items, wishlistBooks:this.wishlist}});
  }
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>