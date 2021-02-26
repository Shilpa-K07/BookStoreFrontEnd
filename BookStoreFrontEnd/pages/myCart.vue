<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar />
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row>
                <v-col md2>
                </v-col>
                <v-col md10 class="mt-5 ml-9 cart-title">
              <nuxt-link :to="{ path: 'dashboard', query: {book: item}}">Home</nuxt-link>
              <nuxt-link :to="{ path: 'myCart', query: {book: item}}">Book</nuxt-link>
                </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto cart-card" outlined>
                <v-card-title>My cart</v-card-title>
                <v-flex v-for="item in items" :key="item.books.title">
                  <v-layout class="mb-5">
                    <v-flex md2>
                      <v-img class="cart-image ml-5" :src="item.books.image"></v-img>
                    </v-flex>
                    <v-flex md10>
                      <v-row class="ml-5">
                        <v-list-item>{{item.books.title}}</v-list-item>
                        <v-list-item>{{item.books.author}}</v-list-item>
                        <v-list-item>{{'Rs.'+item.books.price}}</v-list-item>
                      </v-row>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-card>
            </v-row>
          </v-flex>
        </v-layout>
      </v-row>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";

@Component({
  components: {
    AppBar
  }
})
export default class MyCart extends Vue {
  /* private lists: Array<object> = [
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
      price: "1500"
    }
  ]; */

  private items: any;
  beforeMount() {
    this.items = this.$route.query.books;
  }
}
</script>

<style lang="scss">
@import url("../assets/myCart.scss");
</style>