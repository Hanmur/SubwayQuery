<template>
  <a-row align='middle'>
    <a-col :span='8'>
      <a-image :src="`https://cs.gzmtr.com/ckfw/xlu_2020/202011/W020211101558961941389.jpg`" :width='600'/> 
      
    </a-col>
    <a-col :span='8' :offset='6'>
    <a-space direction='vertical' class='main'>
      <input-access :linesInfo="linesInfo" :callback='retJson'></input-access>
      <result-displayer 
          :linesInfo="linesInfo" 
          :leastTransfer="leastTransfer"
          :bestTime="bestTime"
          :bestTimeTime="bestTimeTime"
          :leastTransferTime="leastTransferTime"
          v-if="resShow"></result-displayer>
      <a-alert
      message="鸡汤来喽～"
      :description="this.joke"
      type="info"
      show-icon
      />
    </a-space>
  </a-col> 
  </a-row>
</template>

<script type = 'js'>
import InputAccess from './components/InputAccess.vue'
import ResultDisplayer from './components/ResultDisplayer.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    InputAccess,
    ResultDisplayer
  },
  mounted() {
    axios.get(`https://api.oick.cn/dutang/api.php`).then(response => {this.joke = response.data})
    axios.get(`http://localhost:8081/linesList`).then(response => {this.linesInfo = response.data["lines"]})
  },
  data: function() {
    return {
      joke: '',
      post: [],
      linesInfo: {
        '1': {
          name: '一号线',
          stops: [{value:'1', label:'广州东站'},{value:'2', label:'体育中心'},{value:'3', label:'体育西路'}],
          color: '#EECF2D',
        },
        '2': {
          name: '二号线',
          stops: [{value:'1', label:'广州南站'},{value:'2', label:'石壁'},{value:'4', label:'洛溪'}],
          color: '#005E9E'
        },
        '3': {
          name: '三号线',
          stops: [{value:'1', label:'机场北(T2)'},{value:'2', label:'机场南(T1)'},{value:'3', label:'高增'},{value:'4', label:'广州东站'}],
          color: '#EB9A3E'
        },
        '18': {
          name: '十八号线',
          stops: [{value:'1', label:'万顷沙'},{value:'2', label:'横沥'},{value:'3', label:'番禺广场'},{value:'4', label:'南村万博'},{value:'5', label:'沙溪'}],
          color: '#2A459C'
        },
        'GF': {
          name: '广佛线',
          stops: [{value:'1', label:'新城东'},{value:'2', label:'魁奇路'},{value:'3', label:'𧒽岗'},{value:'4', label:'南洲'},{value:'5', label:'沥滘'}],
          color: '#BAD200'
        },
        'APM': {
          name: 'APM线',
          stops: [{value:'1', label:'广州塔'},{value:'2', label:'海心沙'},{value:'3', label:'大剧院'}],
          color: '#01B6E3'
        }
      },
      response: {},
      bestTimeTime: 0,
      leastTransferTime: 0,
      resShow: false,
      bestTime: [{line: '1', stop: '2'}],
      leastTransfer: [{line: '1', stop: '2'}],
    }
  },
  methods: {
    makePost: function(pack) {
      let start = {
        "line": pack[0],
        "stop": pack[1]
      }
      let end = {
        "line": pack[2],
        "stop": pack[3]
      }
      this.post[0] = start
      this.post[1] = end
    },

    retJson: function(pack) {
      this.pack = pack
      this.makePost(pack)
      axios.post(`http://localhost:8081/search`, JSON.stringify(this.post)).then(response => {
        console.log(response)
        this.leastTransfer = response.data.leastTransfer
        this.bestTime = response.data.bestTime
        this.bestTimeTime = response.data.bestTimeTime
        this.leastTransferTime = response.data.leastTransferTime
        this.response = response.data
        })
      this.resShow = true
    }
  }
}
</script>

<style>
#app {
  font-family: JetBrains mono, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  margin-top: 60px;
}

input-access {
  text-align: start;
}
</style>
