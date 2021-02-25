import { createStore } from "vuex"
import data from "../data/data.js";

const store = createStore({
   state:{
      users: data
   }
})

export default store
// https://dev.to/daniel_adekoya_/how-to-initialize-vuex-in-the-new-vue-3-preview-49ef