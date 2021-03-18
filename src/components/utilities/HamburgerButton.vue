<template>
  <div class="container">
        <div ref="btn" @click="toggleNav" class="btn">
            <div class="burger"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: false,
        }
    },
    methods:{
        toggleNav(){
            this.$refs.btn.classList.toggle('open');     
        }
    }
}
</script>

<style scoped>
.btn{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all .2s ease-in;
}

.burger{
    width: 75%;
    height: .2rem;
    background-color: black;
    border-radius: 5px;
    transition: all .2s ease-in;
    box-shadow: 0 2px 5px rgba(225, 101, 47, .2);
}
html.dark .burger, html.dark .burger::before, html.dark .burger::after{
    background: white;
} 
.burger::before, .burger::after{
    content: "";
    position: absolute;
    width: 75%;
    height: .2rem;
    background-color: #000;
    border-radius: .4rem;
    box-shadow: 0 2px 5px rgba(225, 101, 47, .2);
    transition: all .2s ease-in;
}

.burger::after{
    transform: translateY(.5rem);
}

.burger::before{
    transform: translateY(-.5rem);
}

/* Animation */
.btn.open .burger{
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
}

.btn.open .burger::before{
    transform: rotate(45deg) translate(35px,-35px);
}

.btn.open .burger::after{
    transform: rotate(-45deg) translate(35px,35px);
}

</style>