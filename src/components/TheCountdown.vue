<template>
  <div class="countdown">
    <div class="rocket-name">{{ name }}</div>
    <div class="full-date" v-if="nextLaunchDate">
      {{ getZero(nextLaunchDate.getDate()) }}
      {{ months[nextLaunchDate.getMonth()] }}
      {{ getZero(nextLaunchDate.getHours()) }}:{{
        getZero(nextLaunchDate.getMinutes())
      }}
      UTC+{{ Math.abs(nextLaunchDate.getTimezoneOffset()) / 60 }}
    </div>
    <div class="timer" v-if="nextLaunchDate">
      <div class="time-part">
        <span>{{ countdown.days }}</span>
        <span class="time-part-title">Days</span>
      </div>
      <div class="time-part">
        <span>{{ countdown.hours }}</span>
        <span class="time-part-title">Hours</span>
      </div>
      <div class="time-part">
        <span>{{ countdown.minutes }}</span>
        <span class="time-part-title">Minutes</span>
      </div>
      <div class="time-part">
        <span>{{ countdown.seconds }}</span>
        <span class="time-part-title">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
import getRemainingTime from '../utils/timerCalc';
import getZero from '../utils/getZero';
import months from '../utils/months';

export default {
  props: {
    start: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      months,
      countdownInterval: null,
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      nextLaunchDate: null,
    };
  },
  created() {
    clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
    this.updateCountdown();
    this.setNextLaunchDate();
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    updateCountdown() {
      const countdown = getRemainingTime(this.start);
      console.log('timer');
      if (countdown.total <= 0) {
        clearInterval(this.countdownInterval);
        this.countdown.days = '00';
        this.countdown.hours = '00';
        this.countdown.minutes = '00';
        this.countdown.seconds = '00';
      } else {
        this.countdown.days = getZero(countdown.days);
        this.countdown.hours = getZero(countdown.hours);
        this.countdown.minutes = getZero(countdown.minutes);
        this.countdown.seconds = getZero(countdown.seconds);
      }
    },
    setNextLaunchDate() {
      this.nextLaunchDate = new Date(this.start);
    },
    getZero,
  },
};
</script>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rocket-name {
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}
.timer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.time-part {
  font-size: 6rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 4;
}
.time-part-title {
  font-size: 1.15rem;
}
.full-date {
  font-size: 1.5rem;
}

@media screen and (max-width: 600px) {
  .countdown {
    min-height: 75vh;
  }
  .rocket-name {
    font-size: 0.9rem;
  }
  .time-part {
    flex-basis: 50%;
    font-size: 4rem;
  }
  .full-date {
    font-size: 1rem;
  }
}
@media screen and (min-width: 600px) {
  .countdown {
    min-height: 60vh;
  }
  .time-part {
    flex-basis: auto;
    font-size: 6rem;
  }
  .rocket-name {
    font-size: 2rem;
  }
  .full-date {
    font-size: 1.5rem;
  }
}
</style>
