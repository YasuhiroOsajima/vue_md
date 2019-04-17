<template>
  <v-layout row wrap id="editor">
    <v-flex d-flex md6>
      <textarea v-model="$store.state.input" @input="update"></textarea>
    </v-flex>
    <v-flex d-flex md6>
      <v-card>
        <div id="preview" v-html="compiledMarkdown" class="markdown-body"></div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
 
<script>
import _ from 'lodash'
import marked from 'marked'
 
export default {
  name: 'Editor',
  computed: {
    compiledMarkdown: function () {
      return marked(this.$store.state.input, { sanitize: true })
    }
  },

  methods: {
    update: _.debounce(function (event) {
      this.$store.dispatch('setValues', event.target.value)
    }, 300),
  },
}
</script>
 
<style>
@import '~github-markdown-css';
 
#editor {
  height: 100%;
}
</style>
