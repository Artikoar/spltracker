<template>
	<base-card v-if="mission && mission.id">
		<template v-slot:title>Mission</template>
		<template v-slot:subtitle>{{ mission.name }}</template>
		<template v-slot:default>
			<div class="mission-data">
				<div class="data-item">
					<span>{{ mission.name }}</span>
				</div>
				<div class="data-item">
					<span>{{ mission.description }}</span>
				</div>
				<div class="data-item">
					<span>{{ mission.type }}</span>
				</div>
			</div>
		</template>
	</base-card>
</template>

<script>
export default {
	props: ['mission'],
};
</script>

<style scoped>
</style>