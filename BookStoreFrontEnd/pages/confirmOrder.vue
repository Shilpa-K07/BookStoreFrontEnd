<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar" />
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
export default class ConfirmOrder extends Vue {
    private orderList: any;
     private wishlist: any;
      private items: any;
    beforeMount(){
        if(this.$route.query.books != undefined)
            this.items = this.$route.query.books;
        else
            this.items = [];

        if(this.$route.query.orderedBooks != undefined)
            this.orderList = this.$route.query.orderedBooks
        else
            this.orderList = [];

        if(this.$route.query.wishlistBooks != undefined)
            this.wishlist = this.$route.query.wishlistBooks
        else
            this.wishlist = [];
    }

    mounted(){
      if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setWishlistItems(this.wishlist);
    }

    if(this.items !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setBook(this.items);
    }

    if(this.orderList !=undefined){
      const appBar: any = this.$refs.appBar;
      appBar.setOrderedBooks(this.orderList);
    }
  }
}
</script>