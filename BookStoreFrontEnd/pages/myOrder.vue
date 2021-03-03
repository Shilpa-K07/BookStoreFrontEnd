<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar"/>
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row class="mt-10 cart-title">
                <v-col  class="mt-8">
              <nuxt-link :to="{ path: 'dashboard', query: {books:items, wishlistBooks:wishlist, orderedBooks:orderList}}">Home</nuxt-link> |
              <nuxt-link :to="{ path: 'myWishlist', query: {book: item}}">Book</nuxt-link>
                </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto cart-card" outlined>
                <v-card-title>My Order</v-card-title>
                <v-flex v-for="item in orderList" :key="item.books.title" class="mt-2">
                  <v-layout class="mb-5">
                    <v-flex md2>
                      <v-img class="cart-image ml-5 mt-2" :src="item.books.image"></v-img>
                    </v-flex>
                    <v-flex md10>
                      <v-row class="ml-5 mt-1">
                        <v-list-item>{{item.books.title}}</v-list-item>
                        <v-list-item>{{item.books.author}}</v-list-item>
                        <v-list-item>{{'Rs.'+item.books.price}}</v-list-item>
                      </v-row>
                    </v-flex>
                  </v-layout>
                   <v-divider class="mt-5"/>
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
export default class MyOrder extends Vue {
  private items: any;
  private wishlist: any;
  private orderList: any;
  beforeMount() {
    this.orderList = this.$route.query.orderedBooks;
    this.items = this.$route.query.books;
    this.wishlist = this.$route.query.wishlistBooks;
  }

  mounted() {
     if(this.orderList !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setOrderedBooks(this.orderList);
    }
     if(this.items !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setBook(this.items);
    }
     if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setWishlistItems(this.wishlist);
    }
  }
}
</script>

<style lang="scss">
@import url("../assets/myCart.scss");
</style>