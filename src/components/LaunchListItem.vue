<template>
  <div class="container">
    <div class="launch-title">
      <router-link :to="`/launch/${launch.id}`">{{ launch.name }}</router-link>
    </div>
    <button @click="flyToLocation" class="fly-to-btn">
      Zoom to launch location
    </button>
  </div>
</template>

<script>
export default {
  inject: ['providedFunctions'],
  props: ['launch'],
  methods: {
    flyToLocation() {
      this.providedFunctions.map.flyTo({
        center: [this.launch.pad.longitude, this.launch.pad.latitude],
        zoom: 9,
        bearing: 0,
        speed: 0.8,
        curve: 1,
        essential: true,
      });
    },
  },
};
</script>

<style scoped>
a {
  color: aliceblue;
  text-decoration: none;
}
.fly-to-btn {
  margin-top: 1rem;
  font-family: inherit;
  font-size: 1rem;
  color: aliceblue;
  background-color: #333333;
  border-radius: 1rem;
  min-width: 49%;
  padding: 0.3rem;
  border: none;
}
.fly-to-btn:hover {
  cursor: pointer;
}
.fly-to-btn:active {
  background: #222222;
  padding: calc(0.3rem - 2px);
  border: 2px solid aliceblue;
}
.container {
  padding: 1rem;
  border-radius: 1rem;
  background: #252526;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}
.launch-title {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
