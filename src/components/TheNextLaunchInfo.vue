<template>
  <div class="information">
    <div class="info-item">
      <rocket-info :spacecraft="getNextLaunch.rocket"></rocket-info>
    </div>
    <div class="info-item">
      <mission-info :mission="getNextLaunch.mission"></mission-info>
    </div>
    <div class="info-item">
      <pad-info :pad="getNextLaunch.pad"></pad-info>
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
