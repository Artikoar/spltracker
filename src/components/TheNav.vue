<template>
	<!-- Rights: 
<a target="_blank" href="https://icons8.com/icon/bY5t0noHcfXn/rocket">Rocket</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>-->
	<div class="sidenav">
		<!-- <div class="sidenav-content"> -->
			<div class="sidenav-header">
				<img src="../assets/logo.svg" alt="Logo (rocket)" />
				Name
			</div>
			<div class="sidenav-links">
				<ul>
					<li><h2>Home</h2></li>
					<li><h2>Calendar</h2></li>
					<li><h2>Wiki</h2></li>
				</ul>
			</div>
		<!-- </div> -->
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidenav {
	background-color: #333333;
	position: fixed;
	height: 100%;
	width: 20%;
	z-index: 1;
	top: 0;
	left: 0;
	color: aliceblue;
}
.sidenav-header {
	display: flex;
	background-color: #077bca;
	width: 100%;
	height: 10%;
}
.sidenav-links {
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
}
</style>