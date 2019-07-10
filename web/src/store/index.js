import Vue from 'vue';
import Vuex from 'vuex';

//使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 2,
        guItemMotor: {
            licenseNo: '车牌号',
            frameNo: '车架号',
            engineNo: '发动机号',
            brandName: '厂牌型号',
            printBrandName: '行驶证品牌型号',
            singeinDate: '初次登记日期',
            enrollDate: '购置日期',
            motorType: '机动车种类',
            carKindCode: '车辆种类',
            vehicleCategory: '交管车辆类型',
            licenseType: '号牌种类',
            seatCount: '核定载客',
            tonCount: '核定载质量',
            negotiatedActualValue: '协商实际价值',
            useNatureCode: '使用性质（营运、非营运）',
            attributeProperty: '所属性质（个人、机关/团队、企业）',
            carUseType: '车辆用途（家庭自用）',

        }
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