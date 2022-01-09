<template>
	<div  v-if="launchesAreLoading === 'loaded'">
		<div class="background" :style="bgImage"></div>
		<h1>THIS IS NEXTLAUNCH PAGE!</h1>
		<p v-if="launchesAreLoading === 'loaded'">
			<span>{{ getNextLaunch }}</span>
		</p>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	state() {
		return {
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
			return {backgroundImage: `url(${this.getNextLaunch.image})`}
		}
	},
};
</script>

<style>
.background{
	position: fixed;
	z-index: -1;
	background-color: red;
	width: 100%;
	height: 100%;
	/* aspect-ratio: 16 / 9; */
}
</style>