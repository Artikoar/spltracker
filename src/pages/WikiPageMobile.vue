<template>
  <div class="nav">
    <router-link to="/wiki/astronauts">Astronauts</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding-bottom: 5rem;
  /* background: red; */
}
a {
  min-height: 5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: aliceblue;
  border-bottom: 2px solid #333333;
}
</style>
