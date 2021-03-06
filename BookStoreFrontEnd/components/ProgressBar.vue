<template>
     <v-row align="center" justify="center" v-show="isShow" class="">
          <v-progress-circular
      indeterminate
      class="progress-bar"
    ></v-progress-circular>
         </v-row>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({
})
export default class ProgressBar extends Vue {
     @Prop() private isShow: boolean=true;
    public showImage = () => {
        this.isShow = true;
    }
     public hideImage = () => {
        this.isShow = false;
    }
}
</script>