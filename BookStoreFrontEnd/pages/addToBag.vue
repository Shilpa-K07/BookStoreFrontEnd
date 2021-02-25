<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar />
      </v-row>
      <v-row class="book-item-title">Book</v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex md6>
            <v-row>
              <v-card class="mx-auto book-wishlist-card" outlined>
                <v-img class="mx-auto book-item-image mt-4" :src="item.books.image"></v-img>
              </v-card>
            </v-row>
            <v-row class="d-flex">
              <v-btn class="notify-me-btn mt-5">Notify Me</v-btn>
              <v-btn class="wish-list-btn mt-5">mdi-cart-outline</v-btn>
            </v-row>
          </v-flex>
          <v-flex md6>
            <h2>{{item.books.title}}</h2>
            <h5>{{item.books.author}}</h5>
            <h1>{{item.books.price}}</h1>
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
export default class AddToBag extends Vue {
  private item: any = {};

  beforeMount() {
    this.item = this.$route.query.book;
  }
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>