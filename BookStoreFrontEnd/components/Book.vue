<template>
  <v-flex>
    <v-layout row wrap>
      <v-flex v-for="item in lists" :key="item._id" md3 class="mb-10">
          <v-card class="mx-auto b-card" outlined>
            <v-row class="book-image">
            <v-img :src="item.image"></v-img>
            </v-row>
            <v-row class="book-content">
            <v-list-item class="book-title">{{ item.title }}</v-list-item>
            <v-list-item class="book-author">{{ item.author }}</v-list-item>
            <v-list-item class="book-price">{{ item.price }}</v-list-item>
            </v-row>
          </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Book extends Vue {
  private lists: Array<object> = [
    {
      author: "Chetan Bhagat",
      title: "The Girl in Room 105",
      image: "http://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5",
      price: "Rs. 1490"
    },
    {
     author: "Rujuta Divekar",
      title: "Indian Superfoods",
      image: "http://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5",
      price: "Rs. 1500"
    }
  ];
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>