<script setup lang="ts">
const props = defineProps<{ name: string, url: string }>()
const router = useRouter();
const handleSlideItemClick = () => {
    router.push(props.url)
}
</script>

<template>
  <div
    class="slide-item"
    @click="handleSlideItemClick"
  >
    {{ props.name }}
  </div>
</template>