<template>
  <div class="switch-icon">
    <div class="sun"><img src="@/assets/sun.svg"/></div>
    <div class="moon active"><img src="@/assets/moon.svg"/></div>
  </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';

.switch-icon{
    border: 1px solid $neutral;
    border-radius: 100px;
    display: flex;

    div{
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.5rem;
        width: 3.5rem;
        cursor: pointer;
        
        img{
            justify-content: center;
        }
    }
    .active{
        background: $white;
        border-radius: 100px;
        align-items: center;
        cursor: default;
        
    }
}

</style>
