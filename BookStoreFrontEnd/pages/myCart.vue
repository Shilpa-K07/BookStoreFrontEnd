<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar" />
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row class="mt-10 cart-title">
              <v-col class="mt-5">
                <nuxt-link
                  :to="{ path: 'dashboard', query: {books: items, wishlistBooks:this.wishlist, orderedBooks: this.orderList}}"
                >Home</nuxt-link>|
                <nuxt-link :to="{ path: 'myCart', query: {book: item}}">Book</nuxt-link>
              </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto cart-card" outlined>
                <v-card-title>{{'My cart ('+items.length+')'}}</v-card-title>
                <v-flex v-for="item in items" :key="item.books.title" class="mt-2">
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
                      <v-row class="counter">
                        <v-icon
                          class="counter-minus"
                          @click="decrementCounter(item)"
                        >mdi-minus-circle-outline</v-icon>
                        <v-text-field dense outlined v-model="item.counter" class="counter-field"></v-text-field>
                        <v-icon
                          class="counter-plus"
                          @click="incrementCounter(item)"
                        >mdi-plus-circle-outline</v-icon>
                      </v-row>
                      <v-row class="d-flex place-order">
                        <v-btn class="place-order-btn mr-5" @click="placeOrder(item)">Place order</v-btn>
                      </v-row>
                    </v-flex>
                  </v-layout>
                  <v-divider class="mt-5" />
                </v-flex>
              </v-card>
            </v-row>
            <v-row>
              <v-form ref="addressForm" class="address-form">
                <AddressDetails ref="addressdetails" />
              </v-form>
            </v-row>
            <v-row>
              <OrderSummary ref="orderSummary" @onCheckOut="checkOut" />
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
import AddressDetails from "../components/AddressDetails.vue";
import OrderSummary from "../components/OrderSummary.vue";
@Component({
  components: {
    AppBar,
    AddressDetails
  }
})
export default class MyCart extends Vue {
  private items: any;
  private wishlist: any;
  private isOrderPlaced: boolean = false;
  @Prop() private counter_value!: number;
  private orderList: any;
  beforeMount() {
    if (this.$route.query.books != undefined){
       this.items = this.$route.query.books;
       this.items.forEach(function(value: any) {
        value.counter = 1;
      });
    }
    else 
      this.items = [];

    if (this.$route.query.orderedBooks != undefined)
      this.orderList = this.$route.query.orderedBooks;
    else this.orderList = [];

    if (this.$route.query.wishlistBooks != undefined)
      this.wishlist = this.$route.query.wishlistBooks;
    else this.wishlist = [];
    this.counter_value = 1;
  }

  mounted() {
    if (this.wishlist != undefined) {
      const appBar: any = this.$refs.appBar;
      if (this.$refs.appBar != undefined)
        appBar.setWishlistItems(this.wishlist);
    }

    if (this.items != undefined) {
      const appBar: any = this.$refs.appBar;
      appBar.setBook(this.items);
    }

    if (this.orderList != undefined) {
      const appBar: any = this.$refs.appBar;
      if (this.$refs.appBar != undefined)
        appBar.setOrderedBooks(this.orderList);
    }
  }

  incrementCounter = (item: any) => {
      item.counter = item.counter + 1;
  };
  decrementCounter = (item: any) => {
      item.counter = item.counter - 1;
      if (item.counter <= 0) 
        item.counter = 1;
  };
  placeOrder = (item: any) => {
    this.isOrderPlaced = true;
    const orderSummary: any = this.$refs.orderSummary;
    item.books.bookCount = this.counter_value;
    orderSummary.setBook(item);
    const addressdetails: any = this.$refs.addressdetails;
    addressdetails.showDetails();
  };
  checkOut(book: any) {
    if (
      (this.$refs.addressForm as Vue & { validate: () => boolean }).validate()
    ) {
      this.orderList.push(book);
      const filteredItems = this.items.filter((item: any) => item !== book);
      this.$router.push({
        path: "/confirmOrder",
        query: {
          books: filteredItems,
          wishlistBooks: this.wishlist,
          orderedBooks: this.orderList
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import url("../assets/scss/myCart.scss");
</style>