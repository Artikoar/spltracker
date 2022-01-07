<template>
	<div class="sidenav">
		<div class="logo-details">
			<span class="logo-img">
				<img src="../assets/bx-rocket.svg" alt="Logotype - rocket" />
			</span>
			<span class="logo-name">SpaceTracker</span>
		</div>
		<ul class="nav-links">
			<li>
				<router-link to="/">
					<span class="link-icon">
						<img src="../assets/bx-timer.svg" />
					</span>
					<span class="link-name">Next Launch</span>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<span class="link-icon">
						<img src="../assets/bx-timer.svg" />
					</span>
					<span class="link-name">Wiki</span>
					<span class="link-category-expand">
						<img src="../assets/bx-chevron-down.svg" />
					</span>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<span class="link-icon">
						<img src="../assets/bx-timer.svg" />
					</span>
					<span class="link-name">Next Launch</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sidenav {
	background-color: #333333;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 240px;
	z-index: 1;
}
.sidenav .logo-details {
	margin-top: 1rem;
	height: 2rem;
	width: 100%;
	display: flex;
	align-items: center;
}
.sidenav .logo-img {
	display: flex;
	align-items: center;
	justify-content: center;
	/* background: red; */
	height: 100%;
	min-width: 70px;
	text-align: center;
}
.sidenav .logo-details img {
	width: 30px;
}
.sidenav .logo-details .logo-name {
	font-size: 1.3rem;
	font-weight: 600;
}
.sidenav .nav-links {
	background: red;
	height: 100%;
	padding-top: 30px;
}
.sidenav .nav-links li {
	list-style-type: none;
}
</style>