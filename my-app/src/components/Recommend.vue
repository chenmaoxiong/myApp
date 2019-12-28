<template>
  <div>
    <carousels></carousels> 
    <menubar></menubar> 
    <socialcircle></socialcircle>
 
  </div>
</template>
<script>
import Carousels from "./Carousels.vue";
import Menubar from "./Menubar.vue";
import Socialcircle from "./Socialcircle.vue";

export default {
  components: {
    carousels: Carousels,
    menubar: Menubar,
    socialcircle: Socialcircle
  }
};
</script>

