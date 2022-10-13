import { createStore } from 'vuex'

export default createStore({
  state: {
    ava: false,
    username: '',
    scrolerCur: false,

    orderInfoModal: false,
    timRange: [],
    intervalId:0,
    orderInfoId: null,
    token: false,
    percent: 0,
    ordersData: [],
    modal_order: false,
    bg_black: false,
    alertModal: false,
    alertModalData: null,
    dataDashPoint: ['123','222'],
    dataDashDates: [],
    currentAnsPercent: 0,

    dataCurRoute:[],
    isLogin:false,
    byuingCur:0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
