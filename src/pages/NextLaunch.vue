<template>
  <div v-if="launchesAreLoading === 'loaded'" class="page">
    <div class="background" :style="bgImage"></div>
    <div class="background-dim"></div>
    <div class="wrapper">
      <div class="countdown">
        <countdown
          :key="getNextLaunch.id"
          v-if="getNextLaunch"
          :name="getNextLaunch.name"
          :start="getNextLaunch.window_start"
        ></countdown>
      </div>
      <div class="information">
        <next-launch-info></next-launch-info>
      </div>
    </div>
  </div>
  <div v-if="launchesAreLoading === 'error'">
    <h2>
      Oops, an error occurred. Contact us on
      <router-link to="/bug">bug report page</router-link>.
    </h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import months from '../utils/months';
import Countdown from '@/components/TheCountdown.vue';
import NextLaunchInfo from '@/components/TheNextLaunchInfo.vue';

export default {
  components: {
    Countdown,
    NextLaunchInfo,
  },
  data() {
    return {
      months: months,
      errorOccurred: false,
    };
  },
  async created() {
    await this.fetchUpcomingLaunches();
  },
  methods: {
    ...mapActions('launches', ['fetchUpcomingLaunches']),
  },
  computed: {
    ...mapGetters('launches', ['getNextLaunch', 'launchesAreLoading']),
    bgImage() {
      return { backgroundImage: `url(${this.getNextLaunch.image})` };
    },
  },
  watch: {},
};
</script>

<style scoped>
/* .page {
	overflow-y: scroll;
} */
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.background-dim {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: all 0.6s ease;
  /* background-color: rgb(23, 17, 41); */
  background-color: black;
}
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
/* .countdown {
	min-height: 60%;
} */
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
  .background,
  .background-dim,
  .wrapper {
    padding: 0 0rem 5rem 0rem;
  }
}
@media screen and (min-width: 600px) {
  .background,
  .background-dim,
  .wrapper {
    padding: 0 0rem 0rem 5rem;
  }
  .info-item {
    flex: 50%;
    max-width: 50%;
  }
}
</style>
