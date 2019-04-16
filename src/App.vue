<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
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
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
 
    <v-content>
      <Editor />
    </v-content>
 
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
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
}
</script>
