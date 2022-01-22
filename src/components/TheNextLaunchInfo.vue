<template>
  <div class="information" v-if="launch">
    <div class="info-item" v-if="launch.rocket">
      <rocket-info
        :spacecraft="launch.rocket"
        :key="launch.rocket.id"
      ></rocket-info>
    </div>
    <div class="info-item" v-if="launch.pad">
      <pad-info :pad="launch.pad" :key="launch.pad.id"></pad-info>
    </div>
    <div class="info-item" v-if="launch.mission">
      <mission-info
        :mission="launch.mission"
        :key="launch.mission.id"
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
  props: ['launch'],
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
.information {
  display: flex;
}
@media screen and (max-width: 600px) {
  .information {
    flex-direction: column;
  }
}
@media screen and (min-width: 600px) {
  .information {
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: stretch; */
  }
  .info-item {
    flex: 50%;
    max-width: 50%;
  }
}
</style>
