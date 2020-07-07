<template>
<li>
    <div v-bind:class="{'item': flag, 'd-none': !flag}">
      <a class="anchor" href="javascript:void(0)" @click="showModal = true">{{item.name}}</a>
    </div>
    <ul>
      <Hierarchy v-for="(hierarchy,index) in item.children" :key="index" :item="hierarchy" :flag="true"></Hierarchy>
    </ul>
    <HierarchyDetail v-if="showModal" @close="showModal = false" :item="item"/>
  </li>
</template>
<script lang="ts">
import Vue from 'vue';
import HierarchyDetail from './HierarchyDetail';
export default Vue.extend({
    props:{
        item: Object,
        flag:Boolean
     },
    data() {
        return {
          showModal: false
        }
      },
     components:{
        HierarchyDetail
     },
     name:'Hierarchy'
});
</script>