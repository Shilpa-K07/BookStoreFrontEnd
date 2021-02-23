<template>
  <v-flex>
    <v-layout row wrap>
          <v-card class="mx-auto b-card" outlined>
            <v-row>
            <p>hello</p>
            <p>hello</p>
                <p>hello</p>
            </v-row>
          </v-card>
    </v-layout>
  </v-flex>
</template>

<script lang="ts">
import {Prop, Vue, Component} from "vue-property-decorator";

@Component
export default class AddToBag extends Vue {
 private item: any={};
 //this.$route.params.token

  beforeMount() {
    this.item = this.$route.query.book;
    console.log('item: '+this.item);
  }
}
</script>

<style lang="scss">
@import url("../assets/book.scss");
</style>