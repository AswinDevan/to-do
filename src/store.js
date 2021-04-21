import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
    plugins:[
        createPersistedState({
            Storage:window.sessionStorage
        })
    ],
    state:{
     drawer:null,
     snackbar:false,
     dialog:false,
    },mutations:{
      CHANGE_DRAWER:(state)=>{
        state.drawer=!state.drawer
      },
      DRAWER_MODEL:(state,value)=>{
        state.drawer=value;
      },
      CHANGE_SNACKBAR:(state,value)=>{
          state.snackbar=value;
      },
      SNACK_TRUE:(state)=>{
          state.snackbar=true;
      },
      SNACK_FALSE:(state)=>{
          state.snackbar=false;
      },
      STORE:(state,value)=>{
          state.dialog=value;
      },
      CHANGE_DIALOG:(state)=>{
          state.dialog=true;
      }
    }
})