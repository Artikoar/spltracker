<template>
  <div class="information">
    <div class="info-item" v-if="getNextLaunch.rocket">
      <rocket-info
        :spacecraft="getNextLaunch.rocket"
        :key="getNextLaunch.rocket.id"
      ></rocket-info>
    </div>
    <div class="info-item" :class="{tall: getNextLaunch.mission && getNextLaunch.rocket}" v-if="getNextLaunch.pad">
      <pad-info :pad="getNextLaunch.pad" :key="getNextLaunch.pad.id"></pad-info>
    </div>
    <div class="info-item" v-if="getNextLaunch.mission">
      <mission-info
        :mission="getNextLaunch.mission"
        :key="getNextLaunch.mission.id"
      ></mission-info>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RocketInfo from '@/components/infoCards/RocketInfo.vue';
import MissionInfo from '@/components/infoCards/MissionInfo.vue';
import PadInfo from '@/components/infoCards/PadInfo.vue';

export default {
  components: {
    RocketInfo,
    MissionInfo,
    PadInfo,
  },
  computed: {
    ...mapGetters('launches', ['getNextLaunch', 'launchesAreLoading']),
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .information {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 600px) {
  .information {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info-item {
    /* width: 100%; */
  }
  .tall {
    grid-row: 1 / 3;
    grid-column: 2;
  }
}
</style>
