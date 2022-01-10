<template>
	<the-nav></the-nav>
	<main>
		<router-view></router-view>
	</main>
</template>

<script>
// import 'boxicons';

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
	font-size: 16px;
}
body {
	background-color: #1e1e1e;
	margin: 0;
	padding: 0;
}
body::-webkit-scrollbar {
	width: 0.5rem;
}
body::-webkit-scrollbar-track {
	background: rgb(48, 48, 48);
}
body::-webkit-scrollbar-thumb {
	background: #666666;
}
main {
	margin-left: 5rem;
}
@media screen and (max-width: 600px) {
	main {
		margin: 0;
		margin-bottom: 5rem;
	}
}
</style>