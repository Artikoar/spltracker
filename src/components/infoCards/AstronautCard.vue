<template>
  <base-card>
    <template v-slot:title>{{ astronaut.name }}</template>
    <template v-slot:subtitle v-if="astronaut.status.name">{{
      astronaut.status.name
    }}</template>
    <template v-slot:default>
      <div class="main-data">
        <div class="photo" v-if="astronaut.profile_image">
          <img :src="astronaut.profile_image_thumbnail" class="profile-image" />
        </div>
        <div class="main-desc">
          <div class="data-item">
            <span>{{ astronaut.bio }}</span>
          </div>
          <table class="data-values">
            <tr v-if="astronaut.nationality">
              <td>Nationality</td>
              <td>{{ astronaut.nationality }}</td>
            </tr>
            <tr v-if="astronaut.date_of_birth">
              <td>Date of birth</td>
              <td>{{ astronaut.date_of_birth }}</td>
            </tr>
            <tr v-if="astronaut.date_of_death">
              <td>Date of death</td>
              <td>{{ astronaut.date_of_death }}</td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['astronaut'],
};
</script>

<style scoped>
.main-desc {
  display: flex;
  flex-direction: column;
}
.main-data {
  display: flex;
  width: 100%;
}
.main-desc {
  padding-left: 1rem;
  width: 100%;
}
.photo {
  width: 12rem;
}
.profile-image {
  width: 12rem;
}
.data-content {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}
.data-values {
  width: 100%;
  margin-top: 1rem;
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
@media screen and (max-width: 600px) {
  .main-data {
    flex-direction: column;
    align-items: center;
  }
  .main-desc {
    padding-left: 0;
    padding-top: 1rem;
  }
}
@media screen and (min-width: 600px) {
}
</style>
