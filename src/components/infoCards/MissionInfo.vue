<template>
  <base-card v-if="mission && mission.id">
    <template v-slot:title>Mission</template>
    <template v-slot:subtitle>{{ mission.name }}</template>
    <template v-slot:default>
      <div class="data-content">
        <div class="data-item">
          <span>{{ mission.description }}</span>
        </div>
        <table class="data-values">
          <tr v-if="mission.type">
            <td>Type</td>
            <td>{{ mission.type }}</td>
          </tr>
          <tr v-if="mission.type">
            <td>Orbit</td>
            <td>{{ mission.orbit.abbrev }} | {{ mission.orbit.name }}</td>
          </tr>
        </table>
      </div>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['mission'],
};
</script>

<style scoped>
.data-content {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}
.data-values {
  width: 100%;
  border-collapse: collapse;
}
.data-values tr {
  border-bottom: 2px solid #333333;
}
.data-values tr:hover {
  border-radius: 1rem;
  background: #222222;
  border-color: #222222;
}
.data-values td {
  padding-top: 0.2rem;
  padding-bottom: 0.3rem;
}
</style>
