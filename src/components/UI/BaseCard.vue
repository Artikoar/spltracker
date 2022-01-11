<template>
	<div class="card">
		<div class="title">
			<slot name="title"></slot>
		</div>
		<div class="subtitle">
			<slot name="subtitle"></slot>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.card {
	margin: 1rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: #252526;
}
.title {
	margin: 0 0 0.5rem 0;
	font-size: 1.4rem;
}
.subtitle {
	margin: 0 0 1rem 0;
	color: gray;
}
</style>