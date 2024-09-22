<script setup lang="ts">
import ProfileCard from "./components/ProfileCard.vue";
import { useProfileStore } from "./stores/profileStore";
import { onMounted } from "vue";

const data = useProfileStore();

onMounted(() => {
  data.fill();
});
</script>

<template>
  <ProfileCard />
</template>
