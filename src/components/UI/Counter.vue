  <script setup>
  import {ref} from 'vue'
  import { useMealsStore } from '../../store/meals';  
  const meals=useMealsStore()
  const props=defineProps(['meal'])

  </script>
  <template>
    <!-- counter是按钮选购汉堡数量的计数器组件 -->
    <div class="counter">

        <template v-if="props.meal.count > 0">
          <button class="sub" @click="meals.subMealFromCart(props.meal)"><i class="ri-subtract-line"></i></button>
          <!--不可以直接读取，因为counter是一个商品，meals是全部商品 -->
          <span class="count">{{ props.meal.count }}</span>
        </template>

        <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line "></i></button>
    </div>
  </template>

  <style scoped>
    .counter{
      display: flex;
     
    }
    .sub, .add{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34rem;
      height: 36rem;
      background-color: rgb(234,178,0);
      border: none;
      border-radius: 50%;
      font-size:36rem ;
      font-weight: bold;

    }
    .sub{
      background-color:#fff ;
      border: 1px solid #000;
      
    }
    .count{
      font-size: 30rem;
      margin: 0 10rem ;
      
      
    }
  </style>