<template>
  <v-flex>
    <v-row>
      <v-layout row wrap>
        <v-flex v-for="item in paginated_Data" :key="item.books.title" md3 class="mb-10">
          <nuxt-link
            :to="{ path: 'addToBag', query: {book: item, books:cartItems, wishlistBooks:wishlist, orderedBooks:orderList}}"
          >
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
    </v-row>
    <v-row align="center" justify="center">
      <a @click="nextPage" class="mr-5"> Next Page >></a>
      <a @click="prevPage"> >> Previous Page</a>
    </v-row>
  </v-flex>
</template>

<script lang="ts">
//import Vue from "vue";
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class Book extends Vue {
  @Prop() private items!: any[];
  @Prop() private cartItems!: any[];
  @Prop() private wishlist!: any[];
  @Prop() private orderList!: any[];
  @Prop() private size: number = 10;
  private pageNumber: number = 0;
  private page_Count: number = 0;
  private lists: Array<object> = [];
  @Prop() private paginated_Data!: any[];

  nextPage = () => {
    this.pageNumber++;
    this.paginatedData();
  };

  prevPage = () => {
    this.pageNumber--;
    this.paginatedData();
  };

  pageCount = () => {
    let length = this.items.length,
      size = this.size;
    this.page_Count = Math.ceil(length / size);
    this.paginatedData();
  };

  paginatedData = () => {
    const start = this.pageNumber * this.size,
      end = start + this.size;
    this.paginated_Data = this.items.slice(start, end);
  };

  public setBook = (books: any) => {
    this.items = books.data.data;
    this.paginatedData();
  };

  public setCartItems = (books: any) => {
    this.cartItems = books;
  };

  public setWishlistItems = (books: any) => {
    this.wishlist = books;
  };

  public setOrderedBooks = (books: any) => {
    this.orderList = books;
  };
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>