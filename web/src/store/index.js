import Vue from 'vue';
import Vuex from 'vuex';

//使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 2
    },
    getters: {
        getStateCount: function(state) {
            return state.count + 12;
        }
    },
    mutations: {
        add(state) {
            state.count = state.count + 1;
        },
        decr(state, n) {
            // state.count = state.count - 1; //没加步长n时
            state.count = state.count - n

        }
    },
    actions: {
        addFun(context) { //接收一个与store实例具有相同方法的属性的context对象
            context.commit("add")
        },
        decrFun(context, n) { //接收一个与store实例具有相同方法的属性的context对象
            context.commit("decr", n)
        }
    }
})

export default store; //导出store