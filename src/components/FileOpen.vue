<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-btn color="primary" @click="$refs.inputUpload.click()">File Open</v-btn>
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
      reader.onload = function(e){
        state.$store.state.input = e.target.result
      }
      reader.readAsText(file)
 
      this.$store.state.file = file
    },
  }
}
</script>
