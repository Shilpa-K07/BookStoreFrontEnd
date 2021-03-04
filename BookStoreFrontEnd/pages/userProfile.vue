<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar" />
      </v-row>
      <v-row class="mt-12">
        <v-layout>
          <v-flex xs24 md12>
            <v-row class="mt-10">
              <v-col cols="12" md="2"></v-col>
              <v-col class="mt-5" cols="12" md="10">
                <nuxt-link
                  :to="{ path: 'dashboard', query: {books: items, wishlistBooks:this.wishlist, orderedBooks: this.orderList}}"
                >Home</nuxt-link> |
                <nuxt-link :to="{ path: 'myCart', query: {book: item}}">Book</nuxt-link>
              </v-col>
            </v-row>
            <v-row class="mt-2">
              <v-col cols="12" md="2"></v-col>
              <v-col cols="12" md="10">
                <v-form>
                  <h3 class="mb-4">Personal Details</h3>
                  <v-text-field dense outlined label="Full Name" class="field-width"></v-text-field>
                  <v-text-field dense outlined label="Email Id" class="field-width"></v-text-field>
                  <v-text-field dense outlined label="Password" class="field-width"></v-text-field>
                  <v-text-field dense outlined label="Mobile Number" class="field-width"></v-text-field>
                  <!-- <v-row>
                    <v-btn class="mt-3 ml-4 new-address-btn" @click="addNewAddress">Add New Address</v-btn>
                  </v-row> -->
                </v-form>
                <v-form>
                  <h3 class="mb-4">Address Details</h3>
                  <h4>1.WORK</h4>
                  <v-row class="field-width ml-1 mt-5">
                    <v-text-field dense outlined label="Address" class="field-width"></v-text-field>
                  </v-row>
                    <v-row class="field-width ml-1">
                    <v-text-field
                      label="city/town"
                      dense
                      outlined
                      class="mr-2"
                    ></v-text-field>
                    <v-text-field
                      label="state"
                      dense
                      outlined
                    ></v-text-field>
                    </v-row>
                </v-form>
              </v-col>
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
export default class UserProfile extends Vue {
  private items: any;
  private wishlist: any;
  private orderList: any;
  beforeMount() {
    if (this.$route.query.books != undefined)
      this.items = this.$route.query.books;
    else this.items = [];

    if (this.$route.query.orderedBooks != undefined)
      this.orderList = this.$route.query.orderedBooks;
    else this.orderList = [];

    if (this.$route.query.wishlistBooks != undefined)
      this.wishlist = this.$route.query.wishlistBooks;
    else this.wishlist = [];
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
  addNewAddress = () => {
    const addressdetails: any = this.$refs.addressdetails;
    addressdetails.showDetails();
  };
}
</script>