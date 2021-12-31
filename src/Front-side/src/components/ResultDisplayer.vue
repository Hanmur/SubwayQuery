<template>
    <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="时间最短">
              <result-shower :linesInfo="linesInfo" :route="this.convert(this.bestTime)" :timeTransSel="true" :time="bestTimeTime"></result-shower>
          </a-tab-pane>
          <a-tab-pane key="2" tab="换乘最少">
              <result-shower :linesInfo="linesInfo" :route="this.convert(this.leastTransfer)" :timeTransSel="false" :time="leastTransferTime - (this.subed)"></result-shower>
          </a-tab-pane>
        </a-tabs>
</template>

<script>
import ResultShower from './RouteShower.vue'
export default {
    props: ['bestTime', 'leastTransfer', 'linesInfo', 'bestTimeTime', 'leastTransferTime'],

    data: function() {
        return {
            subed: 0,
            activeKey: '1'
        }
    },

    methods: {
        convert: function(all) {
            this.subed = 0
            var res = []
            let first = {line: all[0].line, stop: all[0].stop, step: 0}
            res.push(first)
            var current = 0
            for (var i = 1; i < all.length; i++) {
                if (all[i].line != all[current].line) {
                    let newItem_1 = {line: all[i - 1].line, stop: all[i-1].stop, step: i - 1 - current}
                    let newItem_2 = {line: all[i].line, stop: all[i].stop, step: 1}
                    res.push(newItem_1)
                    res.push(newItem_2)
                    current = i
                }
                if (i == all.length - 1) {
                    let last = {line: all[i].line, stop: all[i].stop, step: i - current}
                    res.push(last)
                }
            }

            if (res.length >= 2 && res[1].step == 0) {
                res.shift()
                res.shift()
                this.subed += 1
            }

            if (res.length >= 2 && res[res.length - 1].step == 0) {
                res.pop()
                res.pop()
                this.subed += 1
            }

            return res
        }
    },

    components: {
        ResultShower
    }
}
</script>