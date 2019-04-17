<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-btn block color="primary" @click="$refs.inputUpload.click()">File Open</v-btn>
      <input id="select" v-show="false" type="file" ref="inputUpload" @change="onFileChange" accept="text/*,.json,.md">
    </v-list-tile-content>
  </v-list-tile>
</template>
 
<script>
export default {
  name: 'FileOpen',
  methods: {
    onFileChange: function (event) {
      const file = event.target.files[0]
      if (!file) { return false }
 
      const state = this
      const reader = new FileReader()
      reader.onload = function(event){
        state.$store.dispatch('setValues', event.target.result)
      }
      reader.readAsText(file)
 
      this.$store.dispatch('setFile', file)
    },
  }
}
</script>
