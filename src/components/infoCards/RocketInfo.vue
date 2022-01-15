<template>
	<base-card v-if="spacecraft.configuration.id && spacecraft.configuration.url">
		<template v-slot:title>Rocket</template>
		<template v-slot:title-right><div v-if="config && config.wiki_url"><a target="_blank" :href="config.wiki_url">WIKI Page</a></div></template>
		<template v-slot:subtitle>{{
			spacecraft.configuration.full_name
		}}</template>
		<template v-slot:default>
			<div class="config-data" v-if="config && config.id && config.name">
				<div class="data-table">
						<div class="data-item" v-if="config.description">
							<span>{{ config.description }}</span>
						</div>
						<div class="data-item">
							<span>Launch Cost</span>
							<span>{{ config.launch_cost }}</span>
						</div>
						<div class="data-item">
							<span>Length</span>
							<span>{{ config.length }}m</span>
						</div>
						<div class="data-item">
							<span>Diameter</span>
							<span>{{ config.diameter }}m</span>
						</div>
				</div>
			</div>
		</template>
	</base-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: ['spacecraft'],
	data() {
		return {
			config: null,
		};
	},
	methods: {
		...mapActions('rockets', ['fetchRocketConfig']),
	},
	computed: {},

	async created() {
		await this.fetchRocketConfig({
			id: this.spacecraft.configuration.id,
			name: this.spacecraft.configuration.name,
			url: this.spacecraft.configuration.url,
		});
		this.config = this.$store.getters['rockets/getRocketConfig'](
			this.spacecraft.configuration.id
		);
	},
};
</script>

<style scoped>
.data-table {
	display: flex;
}
</style>