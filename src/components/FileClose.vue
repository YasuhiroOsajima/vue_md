<template>
  <v-list-tile @click="onClose">
    <v-list-tile-content>
      <v-btn color="primary">File Close</v-btn>
    </v-list-tile-content>
  </v-list-tile>
</template>
 
<script>
export default {
  name: 'FileClose',
  methods: {
    onClose: function () {
      const writeFile = this.$store.state.file.name
      const fileInput = this.$store.state.input
 
      let blob = new Blob([fileInput], { "type" : "text/plain" });
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = writeFile
      link.click()
 
      this.$store.state.input = '# None'
      this.$store.state.file = {}
      document.getElementById("select").value = ""
    }
  }
}
</script>
