<template>
	<div class="sidenav">
		<ul class="nav-links">
			<li class="logo">
				<router-link to="/">
					<span class="link-title">STracker</span>
					<img src="../assets/bx-rocket.svg" alt="logotype" />
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../assets/bx-timer.svg" alt="icon" />
					<div class="link-text">
						<span class="link-title">Next Launch</span>
						<span class="link-title">Countdown</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../assets/bxl-wikipedia.svg" alt="icon" />
					<span class="link-title">Wiki</span>
				</router-link>
			</li>
			<li class="nav-footer">
				<router-link to="bug">
					<div class="link-text">
						<span class="link-title">Found a bug?</span>
						<span class="link-title">Click here!</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;" */
.sidenav {
	position: fixed;
	/* top: 0;	
	left: 0; */
	background: #333333;
	transition: 0.2s ease;
}
.nav-links {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}
.nav-links li {
	width: 100%;
}
.nav-links a {
	display: flex;
	align-items: center;
	height: 5rem;
	color: aliceblue;
	text-decoration: none;
	transition: 0.2s;
	overflow: hidden;
}
.nav-links a:hover {
	background: #222222;
}
.link-text {
	display: flex;
	flex-direction: column;
}
.link-title {
	display: none;
	margin-left: 1rem;
	white-space: nowrap;
}
.nav-links a img {
	/* min-width: 2rem;
	max-width: 2rem; */
	width: 2rem;
	margin: 0 1.5rem;
}
.nav-footer {
	margin-top: auto;
}
.logo {
	font-weight: 600;
	margin-bottom: 1rem;
	text-align: center;
	font-size: 1.5rem;
	background: #222222;
	letter-spacing: 0.3ch;
	width: 100%;
}
.logo img {
	width: 2rem;
	transform: rotate(0);
	transition: transform 0.6s ease;
}
.sidenav:hover .logo img {
	transform: rotate(-180deg);
}

@media screen and (max-width: 600px) {
	.sidenav {
		bottom: 0;
		width: 100%;
		height: 5rem;
	}
	.logo {
		display: none;
	}
	.nav-links {
		flex-direction: row;
	}
	.nav-links li a {
		justify-content: center;
	}
}
@media screen and (min-width: 600px) {
	.sidenav {
		top: 0;
		width: 5rem;
		height: 100%;
	}
	.sidenav:hover {
		width: 15rem;
	}
	.sidenav:hover .link-title {
		display: block;
		color: aliceblue;
	}
}
</style>