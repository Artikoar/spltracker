<template>
  <base-card v-if="pad && pad.id">
    <template v-slot:title>Launchpad</template>
    <template v-slot:subtitle>{{
      pad.location.name ? pad.location.name : pad.name
    }}</template>
    <template v-slot:default>
      <div class="data-content">
        <table class="data-values">
          <tr>
            <td>Country code</td>
            <td>{{ pad.location.country_code }}</td>
          </tr>
          <tr>
            <td>Pad name</td>
            <td>{{ pad.name }}</td>
          </tr>
          <tr>
            <td>Total launches</td>
            <td>{{ pad.total_launch_count }}</td>
          </tr>
        </table>
      </div>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['pad'],
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
