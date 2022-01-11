<template>
	<div v-if="launchesAreLoading === 'loaded'">
		<div class="background" :style="bgImage"></div>
		<div class="background-dim"></div>
		<div class="wrapper">
			<div class="countdown">
				<div class="rocket-name">{{ getNextLaunch.name }}</div>
				<div class="full-date"></div>
				<div class="timer">
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
			<div class="information">
				<base-card>
					<template v-slot:title>Lorem</template>
					<template v-slot:subtitle>Lorem</template>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rem
						illo dolores quibusdam ipsa, corrupti maiores id esse, consequatur
						nostrum dolorem porro libero quae dicta doloribus nobis voluptas
						facere distinctio.
					</p>
				</base-card>
				<base-card>
					<template v-slot:title>Lorem</template>
					<template v-slot:subtitle>Lorem</template>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						ratione magni nobis quia exercitationem incidunt provident culpa,
						illo assumenda accusantium inventore delectus, quasi voluptate
						laudantium expedita voluptatum distinctio est necessitatibus.
					</p>
				</base-card>
			</div>
		</div>
	</div>
	<div v-if="errorOccurred">
		<h2>
			Oops, an error occurred. Contact us on
			<router-link to="/bug">bug report page</router-link>.
		</h2>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import getRemainingTime from '../utils/timerCalc';
import getZero from '../utils/getZero';

export default {
	data() {
		return {
			countdownInterval: null,
			countdown: {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			},
			errorOccurred: false,
		};
	},
	async created() {
		await this.fetchUpcomingLaunches();
	},
	methods: {
		...mapActions('launches', ['fetchUpcomingLaunches']),
		updateCountdown() {
			const countdown = getRemainingTime(this.getNextLaunch.window_start);
			this.countdown.days = getZero(countdown.days);
			this.countdown.hours = getZero(countdown.hours);
			this.countdown.minutes = getZero(countdown.minutes);
			this.countdown.seconds = getZero(countdown.seconds);
		},
	},
	computed: {
		...mapGetters('launches', ['getNextLaunch', 'launchesAreLoading']),
		bgImage() {
			return { backgroundImage: `url(${this.getNextLaunch.image})` };
		},
	},
	watch: {
		launchesAreLoading() {
			if (this.launchesAreLoading === 'error') {
				this.errorOccurred = true;
			}
			if (this.launchesAreLoading === 'loaded') {
				if (this.getNextLaunch.window_start) {
					this.countdownInterval = setInterval(this.updateCountdown, 1000);
					this.updateCountdown();
				}
			}
		},
	},
};
</script>

<style scoped>
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
.countdown {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60%;
}
.information {
	display: flex;
}
.timer {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
.rocket-name {
	font-size: 2rem;
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

@media screen and (max-width: 600px) {
	.countdown {
		min-height: 75vh;
	}
	.background,
	.background-dim,
	.wrapper {
		padding: 0 0rem 5rem 0rem;
	}
	.information {
		flex-direction: column;
	}
	.rocket-name {
		font-size: 0.9rem;
	}
}
@media screen and (min-width: 600px) {
	.background,
	.background-dim,
	.wrapper {
		padding: 0 0rem 0rem 5rem;
	}
	.information {
		flex-direction: row;
	}
	.rocket-name {
		font-size: 2rem;
	}
}
</style>