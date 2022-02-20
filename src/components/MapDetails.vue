<template>
  <div class="container">
    <div class="icon-container" @click="toogleDetails">
      <div class="icon-bg">
        <img
          src="@/assets/expand_circle_down_black_24dp.svg"
          alt="open"
          class="open-icon"
          :class="{ 'icon-opened': isOpened }"
        />
      </div>
    </div>
    <div class="details-container">
      <div class="details" :class="{ opened: isOpened }">
        <div class="details-title">
          <h2>Launch List</h2>
        </div>
        <div class="details-list">
          <launch-list-item
            v-for="launch in getUpcomingLaunches"
            :key="launch.id"
            :launch="launch"
          ></launch-list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaunchListItem from './LaunchListItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    LaunchListItem,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toogleDetails() {
      this.isOpened = !this.isOpened;
    },
  },
  computed: {
    ...mapGetters('launches', ['getUpcomingLaunches']),
  },
};
</script>

<style scoped>
.details-title {
  display: flex;
  justify-content: center;
  white-space: nowrap;
}
.container {
  display: flex;
}
.icon-container {
  display: flex;
  align-items: center;
  user-select: none;
}
.details-container {
  display: flex;
  align-items: center;
  height: 100vh;
}
.icon-bg-content {
  display: flex;
  overflow: none;
  align-items: center;
}
.details-title {
  overflow: none;
}
.open-icon {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
  width: 3rem;
}
.details-list {
  height: calc(100% - 3rem);
  overflow-y: scroll;
  margin: 1rem 0;
  padding-bottom: 1rem;
}
.details-list::-webkit-scrollbar {
  width: 0.5rem;
}
.details-list::-webkit-scrollbar-track {
  background: rgb(48, 48, 48);
}
.details-list::-webkit-scrollbar-thumb {
  background: #666666;
}
.icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem 0 0 5rem;
  width: 4rem;
  padding-left: 0.3rem;
  height: 5rem;
  background: #333333;
  overflow: hidden;
}
.icon-opened {
  transform: rotate(-90deg);
}
.details {
  background: #333333;
  width: 0;
  height: 95vh;
  overflow: hidden;
  transition: width 0.2s ease;
  padding: 0;
  border-radius: 3rem 0 0 3rem;
}
.opened {
  padding: 1.5rem;
  width: 30vw;
}
</style>
