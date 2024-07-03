<script setup lang="ts">
import { hello } from "@vue3ui/utils";

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: "World",
  }
);

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>
