<template>
  <v-app-bar fixed elevate-on-scroll class="app-bar">
    <v-col cols="12" md="8" class="d-flex justify-space-around">
    <v-icon class="mr-2 book-icon">mdi-book-open-variant</v-icon>
    <v-toolbar-title class="mt-8">{{title}}</v-toolbar-title>
    <v-text-field
      v-model="searchdata"
      v-click-outside="changeStyle=false"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      class= "search-text-style"
      solo
      filled
      dense
      @click="changeStyle=true"
      @mouseout="filterBooks"
    />
    </v-col>
    <v-spacer />
    <v-col class="d-flex justify-space-around appbar-icons">
      <nuxt-link
          :to="{ path: 'userProfile', query: {wishlistBooks: wishlist, books: items, orderedBooks: orderList }}"
        >
      <v-icon class="mr-8 account-icon">mdi-account-outline</v-icon>
       </nuxt-link>

      <v-badge color="#A03037" :content="wishListCount">
        <nuxt-link
          :to="{ path: 'myWishlist', query: {wishlistBooks: wishlist, books: items, orderedBooks: orderList }}"
        >
          <v-icon class="mr-8 header-icons">mdi-heart</v-icon>
        </nuxt-link>
      </v-badge>
       <v-badge color="#A03037" :content="itemsCount">
      <nuxt-link
        :to="{ path: 'myCart', query: {books: items, wishlistBooks: wishlist, orderedBooks: orderList }}"
      >
        <v-icon class="mr-8 header-icons">mdi-cart-outline</v-icon>
      </nuxt-link>
      </v-badge>
      <v-badge color="#A03037" :content="orderListCount">
      <nuxt-link
        :to="{ path: 'myOrder', query: {orderedBooks: orderList, wishlistBooks: wishlist, books: items}}"
      >
        <v-icon class="mr-8 header-icons">mdi-view-list</v-icon>
      </nuxt-link>
       </v-badge>
    </v-col>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
@Component({})
export default class AppBar extends Vue {
  private title: string = "BookStore";
  @Prop() private items!: any[];
  @Prop() private wishlist!: any[];
  @Prop() private orderList!: any[];
  @Prop() private wishListCount!: number;
  @Prop() private orderListCount!: number;
  @Prop() private itemsCount!: number;
  @Prop() private searchdata!: string;
  public setBook = (books: any) => { 
    this.items = books;
    if(this.items != undefined)
    this.itemsCount = this.items.length;
  };

  public setWishlistItems = (books: any) => {
    this.wishlist = books;
    if(this.wishlist != undefined)
    this.wishListCount = this.wishlist.length;
  };

  public setOrderedBooks = (books: any) => {
    this.orderList = books;
    if(this.orderList != undefined)
    this.orderListCount = this.orderList.length;
  };

  public filterBooks = () => {
     this.$emit("onSearch", this.searchdata);
  }
}
</script>

<style lang="scss">
@import url("../assets/scss/dashboard.scss");
</style>