<script setup lang="ts">
const slideItems = [{ name: "图片压缩", url: "/image/compression" }, { name: "图片裁剪", url: "/image/cut" }, { name: "图片格式转换", url: "/image/conversion" }]
</script>

<template>
  <div class="slide-bar w-[250px] h-screen bg-blue-900">
    <SlideItem
      v-for="slideItem in slideItems"
      :key="slideItem.url"
      :name="slideItem.name"
      :url="slideItem.url"
    />
  </div>
</template>