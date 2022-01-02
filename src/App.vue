<template>
	<div>
		<the-nav></the-nav>
		<main>
			<h1>Hi!</h1>
		</main>
	</div>
</template>

<script>
import TheNav from './components/TheNav.vue';
export default {
	components: {
		TheNav,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
html {
	font-family: 'Roboto Mono', monospace;
}
body {
	background-color: #1e1e1e;
	margin: 0;
}
main {
	margin-left: 20%;
}
</style>