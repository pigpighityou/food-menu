<script setup >
import {ref} from 'vue'
import Mask from '../UI/Mask.vue';
import Meals from '../Meals/Meals.vue'
import { useMealsStore } from '../../store/meals';
import Dialogue from '../UI/Dialogue.vue';
const meals=useMealsStore()
const showDialogue=ref(false)
const emits=defineEmits()
const okHandler=()=>{
    // 1清购物车，2关对话框(下面内联事件），3关闭弹窗
    meals.clearCart() //1
    emits('hide')     //3


}
</script>

<template>
    
    <Mask style="z-index: 999;" >
       <Dialogue 
       :is-show="showDialogue" 
       @hide="showDialogue=false" 
       msg="确认清空购物车吗"
       @ok="okHandler"></Dialogue>
        <div class="cart-details" >
            <div class="header">
                <h2>餐品详情</h2>
                <a href="javascript:;" @click="showDialogue=true">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :meals="meals.cartMeals" :desc="false"></Meals>
        </div>
    </Mask>
    

</template>

<style  scoped>
    .cart-details{
        position: absolute;
        width: 750rem;
        bottom: 0rem;
        background-color:#fff ;
        overflow: auto;
        border-top-left-radius: 40rem;
        border-top-right-radius: 40rem;
    }
    .meals{
        height: auto;
        padding-top: 40rem;
        max-height: calc(280rem*4);
    }
    .header{
        position: fixed;
        width: 750rem;
        display: flex;
        justify-content: space-between;
        padding: 20rem 40rem ;
        background-color: #fff;
    }
    .header h2{
        font-size: 28rem;
    }
    .header a{
        color: #9f9f9f;
        font-size: 22rem;
        display: flex;
        align-items: center;

    }
    .header i{
        font-size: 26rem;
        margin-right: 10rem;
    }
    
    

</style>