<template>
  <div id="app">

    <ul>
  <Hierarchy :item="hierarchies" :flag="false"/>
</ul>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hierarchy from './components/Hierarchy.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Hierarchy
  }, data() {
        return {
          hierarchies: {}
        }
      },
      created() {
      let uri = 'http://localhost:4000/api/hierarchy';
      this.axios.get(uri).then(response => {
        this.hierarchies = this.list_to_tree(response.data.data);
      });
    },
    methods: {
       list_to_tree(list) {
      var tree = [],
          mappedArr = {},
          arrElem,
          mappedElem;

      // First map the nodes of the array to an object -> create a hash table.
      for(var i = 0, len = list.length; i < len; i++) {
        arrElem = list[i];
        mappedArr[arrElem.name] = arrElem;
        mappedArr[arrElem.name]['children'] = [];
      }

      for (var name in mappedArr) {
          mappedElem = mappedArr[name];
          // If the element is not at the root level, add it to its parent array of children.
          if (mappedElem.parent || mappedElem.parentId) {
            mappedArr[mappedElem['parent']]['children'].push(mappedElem);
          }
          // If the element is at the root level, add it to first level elements array.
          else {
            tree.push(mappedElem);
          }
      }
      return {children:tree};
	}
      }
});
</script>

<style>
#app {
 justify-content: center;
  margin-top: 60px;
}
</style>
