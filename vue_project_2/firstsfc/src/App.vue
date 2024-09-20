<script>
export default {
  data() {
    return {
      message:"Ádámnak kicsi."
  };
  }
  };
</script>

<template>
  <h1>{{ message }}</h1>
  <food-item/>
  <food-item/>
  <food-item/>


</template>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgb(78, 78, 204);
}
</style>
