<template>
	<div class="container">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped>
.container {
	padding: 20px;
	max-width: 650px;
	width: 100%;
	margin: 0 auto;
}
</style>
