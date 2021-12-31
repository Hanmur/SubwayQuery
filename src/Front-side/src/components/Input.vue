<template>
  <h3>请选择你的路线(左图单击可放大)</h3>
  <a-space direction='vertical'>
  <a-space>
      <em>起点:</em>
      <a-select ref="select" v-model:value="start_line" style="width: 150px" :options='lines' @change="()=>{start_stop = undefined}">
      </a-select>
      <a-select 
        ref="select-stops"
        v-model:value="start_stop"
        style="width: 200px"
        :options='stops[start_line]'></a-select>
  </a-space>
  <a-space>
      <em>终点:</em>
      <a-select ref="select" v-model:value="end_line" style="width: 150px" :options='lines' @change="()=>{end_stop = undefined}">
      </a-select>
      <a-select 
        ref="select-stops"
        v-model:value="end_stop"
        style="width: 200px"
        :options='stops[end_line]'></a-select>
  </a-space>
  
  <a-button type='primary' style="width: 150px" @click="callback([start_line, start_stop, end_line, end_stop])">选好了</a-button>
  </a-space>
  
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['callback', 'lines', 'stops'],
  setup() {
    return {
      start_line: ref(),
      start_stop: ref(),
      end_line: ref(),
      end_stop: ref()
    }; 
  }

});
</script>

<style scoped>
.fxxk {
  margin: -1px;
}

.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
