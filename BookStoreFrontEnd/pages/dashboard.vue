<template>
  <v-app>
    <v-content>
      <v-card class="mx-auto main-card" outlined>
        <v-row>
          <v-col>
            <v-app-bar fixed elevate-on-scroll class="app-bar">
                <v-icon class="ml-9 mr-2">mdi-book-open-variant</v-icon>
              <v-toolbar-title class="">{{title}}</v-toolbar-title>
              <v-text-field
                v-click-outside="changeStyle=false"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                :class="changeStyle ? 'search-text-style' : 'search-text-style-before'"
                solo
                filled
                dense
                @click="changeStyle=true"
              />
              <v-spacer />
              <v-col class="d-flex justify-space-around">
              <v-icon class="ml-5">mdi-account-outline</v-icon>
              <v-icon class="mr-8">mdi-cart-outline</v-icon>
              </v-col>
            </v-app-bar>
          </v-col>
        </v-row>
        <v-row class="book-main-title">Books</v-row>
        <v-row class="book-card">
        <Book />
        </v-row>
      </v-card>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Book from '../components/Book.vue';
@Component({
  components: {
    Book
  }
})
export default class Dashboard extends Vue{
    private title: string = 'BookStore';
    private changeStyle: boolean = false;
}

</script>

<style lang="scss">
@import url("../assets/dashboard.scss");
</style>
            
   