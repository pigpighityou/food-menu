<script setup>
import Meal from './Meal.vue';
import {useMealsStore} from '@/store/meals'

const props=defineProps(['meals'])

</script>



<template>
    
    <!-- 所有汉堡容器 -->
<div class="meals">
    <!-- 显示商品信息 -->
    
    <Meal v-for="item in props.meals" :meal="item" :desc="$attrs.desc"></Meal>
    <br><br>
    <h2 v-if="!props.meals || props.meals.length == 0">
    没有找到指定的商品 
    </h2>
</div>
    
        
    
</template>

<style  scoped>
    .meals{
        /* 请注意，总高：meals+mealsfilter为100vh */
        height: calc(100vh - 120rem);
        padding-bottom: 140rem;
        overflow: auto;

        
    }
   h2{
    text-align: center;
    width: 100%;
    height: 50rem;
   }



</style>