<script setup>
import Mask from './Mask.vue'
const props=defineProps(['msg'])
const emits=defineEmits(['ok','hide'])
</script>
<template>
    <Mask>
        <div class="dialogue">
            <p class="msg">{{props.msg}}</p>
            <div class="btn">
                <button class="cancel" @click="$emit('hide')">取消</button>
                <button class="ok" @click="()=>{
                    $emit('ok')
                    $emit('hide') }">确认</button>
            </div>
        </div>
    </Mask>


</template>
<style scoped>
    .dialogue {
    position: absolute;
    width: 700rem;
    height: 400rem;
    background-color: #fff;
    border-radius: 40rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.msg {
    height: 260rem;
    font-size: 40rem;
    text-align: center;
    line-height: 260rem;
}

.btn {
    display: flex;
    justify-content: space-around;
}

button {
    width: 300rem;
    height: 80rem;
    border-radius: 40rem;
    border: 1px solid #000;
    background-color: #fff;
    font-size: 32rem;
}

.ok {
    background-color: rgb(248, 188, 0);
    border: none;
}

</style>