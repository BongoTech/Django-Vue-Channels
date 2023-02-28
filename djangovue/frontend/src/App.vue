<script>
export default {
  data() {
    return {
      roomname: "",
    }
  },
  methods: {
    submit() {
      window.location.pathname = '/displayVue/' + this.roomname + '/';
    }
  }
}

</script>

<template>
  <p>What chat room would you like to enter?</p><br>
  <input v-model="roomname" id="room-name-input" type="text" size="100"><br>
  <input @click="submit" id="room-name-submit" type="button" value="Enter">

</template>

<style>

</style>
