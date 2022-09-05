<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import RodapeComp from "@/components/template/RodapeComp.vue";
</script>

<template>
  <HeaderComp />
  <main> 
  <RouterView />
  </main>
  <RodapeComp />
</template>

<style>

@import "@/assets/base.css";
@import "@/assets/style.css";

body{
  background-color: white;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;

  font-weight: normal;
}


header,
footer {
  background-color:  #1e40af;
  height: 13%;
  color: bisque;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border: 3px double black;
  border-radius: 15px;
}

main {
  height: 70%;
}

a {
  color: white;
  text-decoration: none;
}
</style>
