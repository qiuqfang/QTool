<script setup lang="ts">
const props = defineProps<{ accept?: string }>();
const emits = defineEmits(["upload"])
const { files, open, reset, onChange } = useFileDialog({
  accept: props.accept ?? "*", // Set to accept only image files
  directory: false, // Select directories instead of files if set true
})
onChange((files) => {
  if (files!?.length > 0) {
    emits("upload", files)
    reset();
  }

})
</script>

<template>
  <div class="file-upload">
    <div class="file-upload-wrap flex justify-center items-center">
      <div
        class="w-[500px] h-[300px] text-gray-400 hover:text-gray-500 border-dashed border-gray-400 hover:border-gray-500 transition-all  rounded flex flex-col justify-center items-center cursor-pointer "
        @click="() => {
          open()
        }"
      >
        <i class="i-material-symbols-drive-folder-upload text-[32px]" />
        <div class="text-[14px]">
          点击或拖拽文件到此处上传
        </div>
      </div>
    </div>
  </div>
</template>