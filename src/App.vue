<script setup lang="ts">
import { ref } from 'vue';
import { color as vColor } from './directives/color.directive';

const myColor = ref(true);
</script>

<template>
   <button v-color:bg.opacity="'rgb(175, 65, 48)'" @click="myColor = !myColor">Tıkla</button>
   <div v-color="myColor ? 'red' : 'blue'">Vue Uygulamasına Hoşgeldiniz</div>
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
