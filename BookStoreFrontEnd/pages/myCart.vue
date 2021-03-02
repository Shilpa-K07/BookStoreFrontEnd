<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar />
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row class="mt-10 cart-title">
                <v-col  class="mt-5">
              <nuxt-link :to="{ path: 'dashboard', query: {books: items}}">Home</nuxt-link> |
              <nuxt-link :to="{ path: 'myCart', query: {book: item}}">Book</nuxt-link>
                </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto cart-card" outlined>
                <v-card-title>My cart</v-card-title>
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
                        <v-icon class="counter-minus" @click="decrementCounter">mdi-minus-circle-outline</v-icon>
                        <v-text-field dense outlined v-model="counter_value" class="counter-field"></v-text-field>
                        <v-icon class="counter-plus" @click="incrementCounter">mdi-plus-circle-outline</v-icon>
                        </v-row>
                      <v-row class="d-flex place-order">
                        <v-btn class="place-order-btn mr-5">Place order</v-btn>
                      </v-row>
                    </v-flex>
                  </v-layout>
                   <v-divider class="mt-5"/>
                </v-flex>
              </v-card>
            </v-row>
            <v-row>
              <AddressDetails />
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

@Component({
  components: {
    AppBar,
    AddressDetails
  }
})
export default class MyCart extends Vue {
  private items: any;
  private counter_value: number= 1;
  beforeMount() {
    this.items = this.$route.query.books;
  }
  incrementCounter = () => {
    this.counter_value = (this.counter_value+1);
    alert(this.counter_value)
    this.emitResult();
  }
  decrementCounter = () => {
    this.counter_value = (this.counter_value-1);
    this.emitResult();
  }
  emitResult = ()=> {
      this.$emit('input', this.counter_value)
    }
}
</script>

<style lang="scss">
@import url("../assets/myCart.scss");
</style>