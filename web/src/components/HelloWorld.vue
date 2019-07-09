<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>state中count 的值：{{this.$store.state.count}}</h2>
    <h2>getters中方法的值：{{this.$store.getters.getStateCount}}</h2>
    <button @click="addFun">+</button>
    <button @click="decrFun">-</button>
    
    <div style="border: 1px solid red">{{count1}}</div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapAction,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState({
      count1:state=>state.count
    })
  },
  methods:{
    addFun(){
      //this.$store.commit("add"); //这个方法是直接控制mutations里面的，但是官方不建议这个操作
      this.$store.dispatch("addFun"); //建议先加一个actions ,这个代码先调用actions里的方法，通过actions来转发调用
      
    },
    decrFun(){
      //this.$store.commit("dec"); //这个方法是直接控制mutations里面的，但是官方不建议这个操作
      var n =10;
      this.$store.dispatch("decrFun",n); //建议先加一个actions ,这个代码先调用actions里的方法，通过actions来转发调用
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
