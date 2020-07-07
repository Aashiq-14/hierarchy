<template>
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                 <h3>{{item.name}}</h3>
              </div>

              <div class="modal-body">
                   {{item.description}}
              </div>

              <div class="modal-footer">
                  <button class="modal-default-button" @click="$emit('close')">
                    close
                  </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        item:Object
    },
    name:'HierarchyDetail'
})
</script>
