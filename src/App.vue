<template>
    <div class="main">
        <h1>你好世界{{msg}} !</h1>
        <welcom />
    </div>
</template>

<script>
import welcom from "./components/welcom.vue"
export default {
    data(){
        return{
            msg:'hello world'
        }
    },
    components:{
        welcom
    }
}
</script>

<style>

</style>