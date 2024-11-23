<template>
    <div class="row">
     <h1>Pinia</h1>
     <hr/>
     <div class="col-md-6">
        <p>
           <strong> Sayı: {{store.getCounter}}</strong>
        </p>
        <button class="btn btn-primary me-3" @click="store.add">+</button>
        <button class="btn btn-outline-secondary" @click="store.subtract">-</button>
        <hr/>
        <p>
            <span>{{store.car.color}}</span> renkli <span>{{store.car.brand}}</span>
        </p>
        <button class="btn btn-primary" @click="updateCarAndCounter">Arabayı ve Sayacı Güncelle</button>
        <hr/>
        <button class="btn btn-primary" @click="store.getPosts">Yazılarım</button>
        <ul>
            <li v-for="post in store.posts" :key="post.id">{{post.title}}</li>
        </ul>


     </div>
    </div>
</template>
<script setup>
import {useCounterStore} from '@/stores/counter.js';
const store= useCounterStore();

const updateCarAndCounter=()=>{store.$patch({
    counter:100,
    car:{
        brand:'Porsche',
        color:'Mavi'
    }
})}
// const add = ()=> store.counter ++;
// const subtract=()=> store.counter--;
</script>