<script setup lang="ts">
import { Compression } from './util';

useHead({ title: "图片压缩" })
const handleUpload = (files: FileList) => {
  console.log(files);
  new Compression(files, 0.1)
}
</script>

<template>
  <div class="image-compression">
    <FileUpload @upload="handleUpload" />
  </div>
</template>