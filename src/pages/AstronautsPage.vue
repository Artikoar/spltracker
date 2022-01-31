<template>
  <div class="wrapper">
    <div v-if="astronautsAreLoading === 'loaded'">
        
    </div>
    <div v-if="errorOccurred">
      <h2>
        Oops, an error occurred. Contact us on
        <router-link to="/bug">bug report page</router-link>.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['query'],
  mounted() {
    console.log(this.query);
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.wrapper::-webkit-scrollbar {
  width: 0.5rem;
}
.wrapper::-webkit-scrollbar-track {
  background: rgb(48, 48, 48);
}
.wrapper::-webkit-scrollbar-thumb {
  background: #666666;
}
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 0 0rem 5rem 0rem;
  }
}
@media screen and (min-width: 600px) {
  .wrapper {
    padding: 0 0rem 0rem 5rem;
  }
}
</style>
