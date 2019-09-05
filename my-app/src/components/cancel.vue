<template>
    <div @click="fun()" class="cancel">
        取消
    </div>
</template>

<script>
export default {
    methods: {
        fun(){
            history.go(-1);
        }
    }
}
</script>

<style scoped>
    .cancel{
        position: absolute;
        top: .17rem;
        left:.17rem;
        color:#17aa52;
        font-size: .16rem;
    }
</style>