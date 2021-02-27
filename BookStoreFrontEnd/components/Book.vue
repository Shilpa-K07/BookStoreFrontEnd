<template>
  <v-flex>
    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.books.title" md3 class="mb-10">
        <nuxt-link :to="{ path: 'addToBag', query: {book: item, books:cartItems, wishlistBooks:wishlist}}">
          <v-card class="mx-auto b-card" outlined>
            <v-row class="book-image">
            <v-img class="mx-auto mt-2 mb-2" :src="item.books.image"></v-img>
            </v-row>
            <v-row class="book-content mt-5">
            <v-list-item class="book-title">{{ item.books.title }}</v-list-item>
            <v-list-item class="book-author">{{ item.books.author }}</v-list-item>
            <v-list-item class="book-price mb-5">{{ 'Rs.'+item.books.price }}</v-list-item>
            </v-row>
          </v-card>
          </nuxt-link>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
//import Vue from "vue";
import {Prop, Vue, Component} from "vue-property-decorator";

@Component
export default class Book extends Vue {
  @Prop() private items!: any[];
  @Prop() private cartItems!: any[];
  @Prop() private wishlist!: any[];

  private lists: Array<object> = [];
  public setBook = (books: any) => {
    this.items = books.data.data;
  }

  public setCartItems = (books: any) => {
    this.cartItems = books;
  }

  public setWishlistItems = (books: any) => {
    this.wishlist = books;
  }
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>