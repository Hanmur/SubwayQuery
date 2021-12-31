<template>
    <a-space direction='vertical'>
        <h3>{{this.makeTitle()}}</h3>
        <a-list item-layout='horizontal' :data-source='this.displayData(this.route)'>
        <template #renderItem="{ item }">
            <a-list-item>
                <div v-if="item.trans">
                    <b>换乘</b> <b>{{ item.text }}</b>  <a-tag :color='item.tagColor'>{{ item.tagLine }}</a-tag>
                </div>
                <div v-if="!item.trans">
                    乘坐 <b>{{ item.lineText }}</b> <em>{{ item.lineDire }}</em> {{item.stopNum}}站到 {{ item.endName}}
                    <a-tag :color='item.tagColor'>{{ item.tagLine }}</a-tag>
                    <a-tag>{{ item.tagStop }}</a-tag>
                </div>
                    
                
            </a-list-item>
        </template>
    </a-list>
    </a-space>
    
</template>

<script>
export default {
    props: ['route', 'linesInfo', 'timeTransSel', 'time'],
    data() {
        return {
            
        }
    },

    methods: {
        findByValue: function(value, arr) {
            var filtered = arr.filter(function(item) {return item.value === value})
            if (filtered.length) {return filtered[0].label}
        },
        displayData: function(data) {
                var result = new Array
                for (var i = 0; i < data.length - 1; i++) {
                    var start = data[i], end = data[i + 1]
                    var row = new Object()
                    var text = new String()
                    if (start.line != end.line) {
                        row.trans = true
                        text += this.linesInfo[end.line].name
                    }
                    else {
                        row.trans = false
                        row.lineText = this.linesInfo[start.line].name
                        var pos = Number(start.stop) < Number(end.stop)
                        if (pos) {
                            row.lineDire = this.linesInfo[start.line].stops.at(-1).label + '方向'
                        }
                        else {
                            row.lineDire = this.linesInfo[start.line].stops.at(0).label + '方向'
                        }
                        row.endName =  this.findByValue(String(end.stop), this.linesInfo[end.line].stops)
                        row.stopNum = end.step
                    }
                    row.text = text
                    row.tagLine = end.line
                    row.tagStop = end.stop
                    row.tagColor = this.linesInfo[end.line].color
                    result.push(row)
                }
                return result
            },
        
        makeTitle: function() {
            var res = ''
            if (this.timeTransSel) {
                let minute = this.time / 60
                res += '全程大概需要' + minute.toFixed(0) + '分钟'
            } else {
                res += '全程需要换乘' + this.time + '次'
            }
            return res
        }
    }
}
</script>