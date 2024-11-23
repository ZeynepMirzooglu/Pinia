import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state:()=>({
    posts:[],
    counter:10,
    car:{
      brand:'Ferrari',
      color:'siyah'
    }
  }),
  getters:{
   getCounter(state){
      return state.counter
   }
  },
  actions:{
    add(){
      this.counter++;
    },
    subtract(){
      this.counter--;
    },
    async getPosts(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    this.posts=response.data;

    }
  }
})
