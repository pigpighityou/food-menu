<script setup>
import { ref } from 'vue';
import cartBag from '../../assets/bag.png'
import { useMealsStore } from '../../store/meals';
import CartDetails from '../Cart/CartDetails.vue';
import Checkout from '../Checkout/Checkout.vue';
const meals=useMealsStore()
const showDetails=ref(false)
const showCheckout=ref(false)
</script>
<template>
   <Checkout :is-show="showCheckout" @close="showCheckout=false"></Checkout>
   <CartDetails :is-show="showDetails" @hide="showDetails=false" ></CartDetails>
    <div class="cart-bar">
        <div class="cart-bag" >
            <img :src="cartBag" alt="">
            <span v-show="meals.totalCount>0" class="total-count">{{ meals.totalCount }}</span>
        </div>
        <div class="total-amount" >
             <p class="no-goods" v-show="meals.totalCount<=0">
                 未选购商品
             </p>
             <p 
             @click='showDetails=!showDetails' 
             class="has-goods" 
             v-show="meals.totalCount>0"
             >
                 {{ meals.amount }}
             </p>
        </div>
        <button class="checkout-btn" @click="showCheckout=meals.totalCount>0">去结算</button>
        
    </div>
</template>

<style scoped>
 .cart-bar{
    width: 710rem;
    height: 100rem;
    position: fixed;
    background-color: #bfa;
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
    z-index: 9999;
 }

 .cart-bag{
    position: absolute;
    width: 100rem;
    bottom: -10rem;
 }
 .total-count{
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 30rem;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    right: -20rem;
    padding:6rem;
    color: #fff;
    font-weight: bold;

 }
 .total-amount{
    margin-left: 140rem;
    line-height: 100rem ;
 }
 .no-goods,.has-goods{
    color: rgb(148,148,148);
    font-size: 36rem;
    font-weight: bold;
 }
 .has-goods{
    color: #181515;
    font-size: 36rem;
    font-weight: bold;
 }
 .has-goods::before{
    content: '¥';
    font-size:26rem;
 }
 .checkout-btn{
    position: absolute;
    top: 0;
    right: 0; 
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248,188,0);
    font-size: 36rem;
 }
 
</style>