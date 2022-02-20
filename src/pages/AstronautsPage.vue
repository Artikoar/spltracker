<template>
  <div class="wrapper">
    <!-- <div v-if="astronautsAreLoading === 'loaded'"> -->
    <div>
      <div class="astronauts-list">
        <div
          class="astronaut"
          v-for="astronaut in currentPageAstronauts"
          :key="astronaut.id"
        >
          <astronaut-card :astronaut="astronaut"></astronaut-card>
        </div>
      </div>
      <div class="page-switcher">
        <div class="page-switcher-item">
          <img
            src="@/assets/arrow_back_ios_white_24dp.svg"
            class="page-control-image"
            @click="previousPage"
          />
        </div>
        <div class="page-switcher-item">
          <input
            type="text"
            class="pageInput"
            ref="pageInput"
            @keypress="validateInput"
            @blur="resetInput"
          />
        </div>
        <div class="page-switcher-item">
          <img
            src="@/assets/arrow_forward_ios_white_24dp.svg"
            class="page-control-image"
            @click="nextPage"
          />
        </div>
      </div>
    </div>
    <div v-if="astronautsAreLoading === 'error'">
      <h2>
        Oops, an error occurred. Contact us on
        <router-link to="/bug">bug report page</router-link>.
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AstronautCard from '@/components/infoCards/AstronautCard.vue';

export default {
  components: { AstronautCard },
  props: ['query'],
  data() {
    return {
      offset: null,
      currentPageAstronauts: [],
    };
  },
  methods: {
    ...mapActions('astronauts', ['fetchAstronauts']),
    validateInput($event) {
      if (!isFinite($event.key)) {
        $event.preventDefault();
      } else if (
        +(this.$refs.pageInput.value + $event.key) >
        Math.floor(this.totalCount / 10)
      ) {
        $event.preventDefault();
        this.$refs.pageInput.value = Math.floor(this.totalCount / 10);
      }
      if ($event.key === 'Enter' && this.$refs.pageInput.value.length > 0) {
        this.$router.push(
          `/wiki/astronauts?page=${this.$refs.pageInput.value}`
        );
      }
    },
    resetInput() {
      this.$refs.pageInput.value = this.query;
    },
    nextPage() {
      this.$router.push(`/wiki/astronauts?page=${+this.query + 1}`);
    },
    previousPage() {
      if (+this.query - 1 < 0) {
        this.$router.push(
          `/wiki/astronauts?page=${Math.floor(this.totalCount / 10)}`
        );
        return;
      }
      this.$router.push(`/wiki/astronauts?page=${+this.query - 1}`);
    },
    async init() {
      if (
        !this.query ||
        this.query === '' ||
        !isFinite(this.query) ||
        +this.query < 0
      ) {
        this.offset = 0;
        this.$router.push(`/wiki/astronauts?page=0`);
      } else {
        this.offset = this.query * 10;
      }
      await this.fetchAstronauts({ offset: this.offset });
      if (this.query > Math.floor(this.totalCount / 10)) {
        this.$router.push(`/wiki/astronauts?page=0`);
      }
      this.currentPageAstronauts = this.$store.getters[
        'astronauts/getAstronautsPage'
      ](this.offset).results;
      this.resetInput();
    },
  },
  computed: {
    ...mapGetters('astronauts', ['astronautsAreLoading', 'totalCount']),
  },
  watch: {
    async query() {
      this.init();
    },
  },
  async created() {
    this.init();
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
.page-switcher {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background: #333333;
  height: 3rem;
  width: 100%;
}
.pageInput {
  height: 2rem;
  font-size: 1.7rem;
  width: 5rem;
  background: #333333;
  outline: none;
  color: aliceblue;
  border-radius: 2rem;
  text-align: center;
  border: 1px solid aliceblue;
}
.page-control-image {
  width: 2.5rem;
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
    padding: 3rem 0rem 5rem 0rem;
  }
  .page-switcher {
    top: 0;
  }
}
@media screen and (min-width: 600px) {
  .wrapper {
    padding: 0 0rem 4rem 5rem;
  }
}
</style>
