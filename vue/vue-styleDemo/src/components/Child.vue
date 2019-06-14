<template>
    <div class="hello">
        <h1>我是 child</h1>
        <Grandson></Grandson>
    </div>
</template>

<script>
import Grandson from '@/components/Grandson.vue';
export default {
    components: {
        Grandson
    }
}
</script>

<style scoped lang="less">
/deep/ .test-container {
    font-size: 30px;
    color: red;
}
</style>