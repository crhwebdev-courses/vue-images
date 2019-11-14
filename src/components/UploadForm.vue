<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
export default {
  name: "UploadForm"
};
</script>
<style scoped>
.dropper {
  position: relative;
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropper:hover {
  background-color: #eee;
}

input {
  position: absolute;
  width: 100%;
  height: 30vh;
  opacity: 0;
}
</style>
