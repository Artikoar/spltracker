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
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-family: 'Roboto Mono', monospace;
	color: aliceblue;
}
body {
	background-color: #1e1e1e;
	margin: 0;
}
</style>