<template>
    <div class="cont px-16 h-height90 py-10 grid grid-cols-2">
        <div class="first col-span-1">
            <h1 class="text-4xl font-bold">Contact me</h1>
            <form class="mt-8  " action="#">
                <div class="form-element flex flex-col mb-10 ">
                    <label class="text-gray-600 text-lg" for="fullname">Fullname</label>
                    <input class="outline-none border-b py-2  bg-transparent" type="text" id="fullname" placeholder="Iwuagwu Chibuzor Michael" />
                </div>
                <div class="form-element flex flex-col mb-10">
                    <label class="text-gray-600 text-lg" for="email">Email address</label>
                    <input class="outline-none border-b py-2 bg-transparent" type="email" id="email" placeholder="iwuagwuchibuzor@gmail.com" />
                </div>
                <div class="form-element">
                    <textarea class="w-full outline-none bg-transparent border-b" rows="5" placeholder="Say something to me">
                    </textarea>
                </div>
                <div class="form-element flex justify-end items-center py-10">
                    <button type="submit" class="bg-text-color hover:bg-black transition duration-150 h-8 w-32 flex items-center justify-center px-1 py-6  rounded-full">
                        <span class="text-white">Submit</span>
                        <span >
                            <svg class="h-full w-6 ml-2 transform -rotate-90 transition duration-150  " viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5303 6.53033C22.8232 6.23744 22.8232 5.76257 22.5303 5.46967L17.7574 0.696701C17.4645 0.403807 16.9896 0.403807 16.6967 0.696701C16.4038 0.989594 16.4038 1.46447 16.6967 1.75736L20.9393 6L16.6967 10.2426C16.4038 10.5355 16.4038 11.0104 16.6967 11.3033C16.9896 11.5962 17.4645 11.5962 17.7574 11.3033L22.5303 6.53033ZM-6.55671e-08 6.75L22 6.75L22 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="white"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
        <div class="second"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .cont{
        flex: 0 0 20%;
    }

    .form-element button:hover svg{
        transform: rotateX(0);
    }
</style>