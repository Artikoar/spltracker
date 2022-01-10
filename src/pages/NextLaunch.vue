<template>
	<div v-if="launchesAreLoading === 'loaded'">
		<div class="background" :style="bgImage"></div>
		<div class="background-dim"></div>
		<div class="wrapper">
			<div class="countdown">
				<p>04:22:56:14</p>
			</div>
			<div class="information">
				<p>TEST</p>
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

export default {
	state() {
		return {
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
	watch: {
		launchesAreLoading() {
			if (this.launchesAreLoading === 'error') {
				this.errorOccurred = true;
			}
		},
	},
};
</script>

<style scoped>
.background {
	position: fixed;
	z-index: -1;
	width: 100%;
	height: 100%;
	/* aspect-ratio: 16 / 9; */
}
.background-dim {
	position: fixed;
	z-index: -1;
	background-color: black;
	width: 100%;
	height: 100%;
	opacity: 0.7;
	transition: all 0.6s ease;
	/* aspect-ratio: 16 / 9; */
}
.wrapper {
	display: flex;
	flex-direction: column;
	padding: 10px;
	height: 100vh;
}
.countdown {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60%;
}
.information {
	margin-top: auto;
}
</style>