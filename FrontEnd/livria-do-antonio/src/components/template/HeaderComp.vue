<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> <RouterLink to="/"> Home </RouterLink> </span>
      <span> | </span>
      <span> <RouterLink to="/livros"> Livros </RouterLink> </span>
      <span> | </span>
      <span> <RouterLink to="/autores"> Autores </RouterLink></span>
      <span> | </span>
      <span> <RouterLink to="/categorias"> Categorias </RouterLink></span>
      <span> | </span>
      <span> <RouterLink to="/editoras"> Editoras </RouterLink></span>
    </div>

  </header>
</template>
<style>
header span {
  padding: 0 45px;
}

</style>
