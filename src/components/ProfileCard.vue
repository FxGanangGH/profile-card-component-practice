<template>
  <main
    class="relative flex size-full min-h-screen items-center justify-center overflow-hidden bg-profile-100"
  >
    <div
      class="absolute z-0 h-bg-profile w-bg-profile translate-x-profile-top-mobile translate-y-profile-top-mobile bg-profile-top bg-center bg-no-repeat lg:translate-x-profile-top-desktop lg:translate-y-profile-top-desktop"
    />
    <div
      class="absolute z-0 h-bg-profile w-bg-profile translate-x-profile-bot-mobile translate-y-profile-bot-mobile bg-profile-bot bg-center bg-no-repeat lg:translate-x-profile-bot-desktop lg:translate-y-profile-bot-desktop lg:scale-125"
    />
    <div class="z-10 w-10/12 max-w-md">
      <img class="size-full rounded-t-xl" src="/images/bg-pattern-card.svg" />
      <div
        class="relative flex size-full flex-col items-center justify-center rounded-b-xl bg-white"
      >
        <img
          class="absolute inset-x-0 top-0 mx-auto size-28 -translate-y-14 rounded-full border-profile border-white profileMax:size-32 profileMax:-translate-y-16"
          :src="`/images/image-${data.user.profile.basic.firstName}.jpg`"
        />
        <h1 class="mt-20 font-kumbh-sans text-lg font-bold capitalize text-profile-200">
          {{ data.user.profile.basic.firstName }} {{ data.user.profile.basic.lastName }}
          <span class="ml-2 font-normal text-profile-300">
            {{ data.user.profile.basic.age }}
          </span>
        </h1>
        <h2
          class="mt-1 w-full border-b border-profile-300/50 pb-10 text-center font-kumbh-sans capitalize text-profile-300"
        >
          {{ data.user.profile.basic.city }}
        </h2>
        <div class="flex w-full items-center justify-center px-8 py-10">
          <span
            v-for="(soc, index) in socials"
            :key="index"
            class="flex w-full flex-col items-center"
          >
            <span class="font-kumbh-sans text-base font-bold profileMax:text-lg">
              {{ formatNumber(data.user.profile.social[soc]) }}
            </span>
            <span
              class="font-kumbh-sans text-xs capitalize tracking-widest text-profile-300 profileMax:text-sm"
            >
              {{ soc }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import type { Social } from "@/stores/interface";

const data = useProfileStore();
const socials = ["followers", "likes", "photos"] as (keyof Social)[];

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};
</script>
