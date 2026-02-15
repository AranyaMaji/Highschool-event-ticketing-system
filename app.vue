<template>
	<div>
		<nav class="tab-nav">
			<NuxtLink :to="tab.path" v-for="tab in tabs" :key="tab.index" class="link"
				><h2>{{ tab.name }}</h2></NuxtLink
			>
		</nav>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
	const tabs = ref([
		{
			index: 0,
			name: 'Scanner',
			path: '/',
		},
		{
			index: 1,
			name: 'Checklist',
			path: '/checklist',
		},
	]);
</script>

<style>
	*,
	html,
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.tab-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 5vh;
	}

	.link {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: black;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: lighter;
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	}

	.router-link-active {
		border-bottom: 4px solid #3472f0;
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
