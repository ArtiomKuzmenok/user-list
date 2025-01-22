<template>
	<header class="header">
		<nav class="header__navigation">
			<RouterLink to="/" class="header__navigation-link"
				>User List</RouterLink
			>

			<RouterLink to="/add-new-user" class="header__navigation-link"
				>Add New User</RouterLink
			>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header {
	padding: 20px;
}

.header__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
}

.header__navigation-link {
	display: inline-block;
	padding: 15px;
	background-color: transparent;
	color: black;
	font-size: 20px;
	appearance: none;
	outline: none;
	text-decoration: underline;
	text-decoration-color: transparent;
	text-transform: uppercase;
	transition: color 0.3s ease-in-out, text-decoration-color 0.3s ease-in-out;
}

.header__navigation-link:hover,
.header__navigation-link:focus-visible {
	color: #004c8f;
	text-decoration-color: #004c8f;
}
</style>
