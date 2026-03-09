<template>
  <ClientOnly>
    <button class="theme-toggle" aria-label="Toggle dark mode" @click="toggleColorMode">
      <Sun v-if="colorMode.value === 'dark'" :size="size" />
      <Moon v-else :size="size" />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Sun, Moon } from "lucide-vue-next"

withDefaults(defineProps<{
  size?: number
}>(), {
  size: 16,
})

const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: inherit;
  opacity: 0.6;
  transition: background 0.2s ease, opacity 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
}
</style>
