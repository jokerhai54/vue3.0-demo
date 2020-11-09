import { createStore } from 'vuex';

export default createStore({
  state() {
      return {
          state:'这是vuex里边的数据',
          todoList:[
            {
              id:1,
              title:"vue3.0",
            },
            {
              id:2,
              title:"初来乍到",
            },
            {
              id:3,
              title:"学习使人快乐！",
            },
          ]
      }
  },
  mutations: {
    addItem(state,val){
      state.todoList.push({
        id:Math.random(100),
        title:val
      })
    }
  },
  actions: {
  },
  modules: {
  },
});
