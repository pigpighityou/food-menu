<script setup >
import { ref } from 'vue';
    const isShow=ref(false)
    const props=defineProps(['isShow'])
    const emits=defineEmits(['hide'])
</script>

<template> 
<!-- 将mask组件传入#hello而不是初始的#app里，数据关系保持不变， -->
<Teleport to="#hello">
    <div :='$attrs' class="mask"  v-show="props.isShow" @click.self="$emit('hide')">
        <slot></slot>
    </div>
</Teleport>
    


</template>

<style  scoped>
    .mask{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
        z-index: 9999;
    }


</style>