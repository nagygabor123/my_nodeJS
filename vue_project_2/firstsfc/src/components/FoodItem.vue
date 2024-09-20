<script>
export default {
  data() {
    return {
    message: "Szia",
    message2: "SziaSzia",
    clicks: 0
  }
},

  methods: {
    countClicks() {
        this.clicks++;
    }
  }

};
</script>

<template>
<h1>{{ message }}</h1>
<h2>{{ message2 }}</h2>

<div v-on:click="countClicks">
<p id="red" >{{ clicks }}</p>
</div>
</template>

<style >
#red {
    font-weight: bold;
    color: red;
}

#app > div:hover{
cursor: pointer;
}
</style>

