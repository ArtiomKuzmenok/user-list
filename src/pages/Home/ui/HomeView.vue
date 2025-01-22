<template>
	<div>
		<FiltersBar />
		<UserTable />
	</div>
</template>

<script setup lang="ts">
import { UserTable } from '@/features/userManagement';
import { FiltersBar } from '@/features/filters';
</script>

<style scoped></style>
