<template>
     <v-app-bar fixed elevate-on-scroll class="app-bar">
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
                <nuxt-link :to="{ path: 'myWishlist', query: {wishlistBooks: wishlist, books: items, orderedBooks: orderList }}"><v-icon class="mr-8">mdi-heart</v-icon></nuxt-link>
                <nuxt-link :to="{ path: 'myCart', query: {books: items, wishlistBooks: wishlist, orderedBooks: orderList }}"><v-icon class="mr-8">mdi-cart-outline</v-icon></nuxt-link>
                <nuxt-link :to="{ path: 'myOrder', query: {orderedBooks: orderList, wishlistBooks: wishlist, books: items}}"><v-icon class="mr-8">mdi-view-list</v-icon></nuxt-link>
              </v-col>
            </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
@Component({
})
export default class AppBar extends Vue {
  private title: string = "BookStore";
    @Prop() private items!: any[];
    @Prop() private wishlist!: any[];
    @Prop() private orderList!: any[];

   public setBook = (books: any) => {
    this.items = books;
  }

  public setWishlistItems = (books: any) => {
    this.wishlist = books;
  }

  public setOrderedBooks = (books: any) => {
    this.orderList = books;
  }
}
</script>

<style lang="scss">
@import url("../assets/dashboard.scss");
</style>