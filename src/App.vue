<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      width="180"
      dark
      fixed
      app
    >
      <v-list dense>
        <FileOpen />
        <FileClose />
      </v-list>
 
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Editor</v-toolbar-title>
    </v-toolbar>
 
    <v-content>
      <Editor />
    </v-content>
 
    <v-footer color="indigo" app>
      <span class="white--text">&copy; yosajima practice</span>
    </v-footer>
  </v-app>
</template>
 
<script>
import FileOpen from './components/FileOpen.vue'
import FileClose from './components/FileClose.vue'
import Editor from './components/Editor.vue'
 
export default {
  components: {
    FileOpen,
    FileClose,
    Editor
  },
 
  data: () => ({
    drawer: null
  }),

  created: () => {
    window.addEventListener("beforeunload", function(event){
      event.preventDefault()
      event.returnValue = 'You have unfinished changes!'
    }, false)
  }
}
</script>
