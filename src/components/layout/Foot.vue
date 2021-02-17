<template>
    <div class="last px-2 xl:px-16 py-4 w-screen flex items-center justify-between bg-black">
        <div class="logo w-24 col-span-2">
            <a href="#">
                <img src="../../assets/logo.jpg" alt="logo" />
            </a>
        </div>
        <div class="nav-links footer col-span-4" id="footLinks">
            <ul class="md:flex justify-center xl:justify-between pr-8 text-white ">
                <li class="ml-6 mb-2 xl:mb-0"><router-link class="text-sm " to='/home'>Home</router-link></li>
                <li class="ml-6 mb-2 xl:mb-0"><router-link to='/about-us' class="text-sm">About Us</router-link></li>
                <li class="ml-6 mb-2 xl:mb-0"><router-link to='/shop' class="text-sm">Shop</router-link></li>
                <li class="ml-6 mb-2 xl:mb-0"><router-link to='/blog' class="text-sm">Blog</router-link></li>
                <li class="ml-6 mb-2 xl:mb-0"><router-link to='/contact-us' class="text-sm">Contact Us</router-link></li>
            </ul>
        </div>
    </div>
    <div class=" bg-black text-white  w-screen px-3 text-sm md:text-base xl:px-16">
        <div class="border-t border-white w-full grid grid-cols-3 gap-2  sm:flex items-center justify-between py-3">
            <div class="col-span-2">
                <span class="text-xs">Copyright 2021 | All Rights Reserved</span>
            </div>
            <div class="xl:pr-8 col-span-1">
                <p class="text-xs">Smoochies Lingerie</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .footer.nav-links a::before {
        background: white;
    }

    .footer.nav-links a.router-link-active {
        color: white;
    }
</style>