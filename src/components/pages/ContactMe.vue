<template>
    <div class="cont px-8 xl:px-16 h-height90 py-10 grid grid-cols-2">
        <div class="first col-span-2 xl:col-span-1">
            <h1 class="text-4xl font-bold">Contact me</h1>
            <form class="mt-8 w-full xl:w-4/5"  @submit.prevent="submit">
                <div class="form-element flex flex-col mb-10 ">
                    <label class="text-gray-600 text-lg dark:text-yellow-200" for="fullname">Fullname</label>
                    <input class="outline-none border-b py-2  bg-transparent" type="text" id="fullname"  v-model="name" placeholder="Olumide Okewale" />
                </div>
                <div class=" mb-2">
                    <span class="text-sm font-medium dark:text-gray-400"  v-if="handler.input_type == 'name' && handler.show == true ">{{handler.message}}</span>
                </div>
                <div class="form-element flex flex-col mb-10">
                    <label class="text-gray-600 text-lg dark:text-yellow-200" for="email">Email address</label>
                    <input class="outline-none border-b py-2 bg-transparent" type="email" v-model="email" id="email" placeholder="kolumde22@gmail.com" />
                </div>
                <div class="mb-3 mt-3">
                    <span class="text-sm font-medium dark:text-gray-400"  v-if="handler.input_type == 'email' && handler.show == true">{{handler.message}}</span>
                </div>
                <div class="form-element flex flex-col ">
                    <label for="message" class="text-gray-600 text-lg  dark:text-yellow-200">Message</label>
                    <textarea class="w-full outline-none bg-transparent border-b pt-3" v-model="message" rows="5" placeholder="Say something to me">
                    </textarea>
                </div>
                <div class="mt-2 mb-3">
                    <span v-if="handler.input_type == 'message'  && handler.show == true " class="text-sm font-medium dark:text-gray-400">{{handler.message}}</span>
                </div>
                <div class="mt-2 mb-2">
                    <span v-if="success_message" class="text-sm font-medium dark:text-gray-400">Thank You for Contacting Olumide Okewale.. I Will Be In Touch Shortly. </span>
                </div>
                <div class="form-element flex justify-end items-center py-10">
                    <button type="submit" class="bg-text-color dark:bg-yellow-500 hover:bg-black transition duration-150 h-8 w-32 flex items-center justify-center px-1 py-6  rounded-full">
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
        <div class="second col-span-2 flex flex-col xl:block items-center justify-center xl:col-span-1 py-8 xl:py-32 ">
            <div class="sm-icons mb-12 flex">
                <a href="https://github.com/codepriezt" class="mr-8" target="_blank">
                    <div class="icon h-6 w-6 md:h-10 md:w-10 xl:h-6 xl:w-6">
                        <svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M12 0.279999C9.14324 0.279151 6.37985 1.29752 4.20677 3.15199C2.0337 5.00645 0.593508 7.57535 0.145169 10.3968C-0.30317 13.2182 0.269759 16.1069 1.76093 18.5437C3.25211 20.9804 5.5637 22.8052 8.28004 23.69H8.57004C8.71152 23.6988 8.85326 23.6774 8.98584 23.6272C9.11842 23.577 9.23883 23.4993 9.33906 23.399C9.4393 23.2988 9.51708 23.1784 9.56725 23.0458C9.61741 22.9132 9.63882 22.7715 9.63004 22.63V22.42C9.63004 22.25 9.63004 22.02 9.63004 21.33C9.62022 21.2645 9.59749 21.2016 9.56316 21.1449C9.52882 21.0883 9.48357 21.039 9.43004 21C9.37195 20.953 9.30407 20.9196 9.23139 20.9023C9.15871 20.885 9.08307 20.8842 9.01004 20.9C6.33004 21.48 5.76004 19.8 5.72004 19.69C5.38445 18.8011 4.78407 18.0367 4.00004 17.5C3.95306 17.4594 3.9029 17.4226 3.85004 17.39C3.96624 17.3274 4.09917 17.303 4.23004 17.32C4.48138 17.3549 4.71939 17.4544 4.92091 17.6086C5.12243 17.7628 5.28061 17.9665 5.38004 18.2C5.76689 18.8736 6.39992 19.3709 7.14595 19.5872C7.89198 19.8036 8.69284 19.7221 9.38004 19.36C9.45378 19.3278 9.51865 19.2782 9.56914 19.2155C9.61963 19.1529 9.65424 19.0789 9.67004 19C9.70833 18.5374 9.9063 18.1026 10.23 17.77C10.3019 17.7062 10.3539 17.623 10.3797 17.5304C10.4055 17.4378 10.4041 17.3397 10.3756 17.2479C10.3471 17.1561 10.2927 17.0745 10.219 17.0128C10.1453 16.9511 10.0554 16.9119 9.96004 16.9C7.59004 16.63 5.17004 15.8 5.17004 11.71C5.15006 10.6829 5.52603 9.68745 6.22004 8.93C6.28396 8.8594 6.32638 8.77201 6.34233 8.67812C6.35827 8.58423 6.34707 8.48774 6.31004 8.4C6.03212 7.62353 6.03566 6.77413 6.32004 6C7.24387 6.16376 8.11097 6.55946 8.84004 7.15C8.90027 7.19251 8.96932 7.22088 9.04204 7.233C9.11476 7.24512 9.18927 7.24068 9.26004 7.22C10.1533 6.97768 11.0745 6.85329 12 6.85C12.9291 6.85078 13.8538 6.97521 14.75 7.22C14.8193 7.23912 14.892 7.24276 14.9628 7.23066C15.0337 7.21856 15.101 7.19103 15.16 7.15C15.8903 6.56132 16.7569 6.16584 17.68 6C17.9523 6.76998 17.9523 7.61002 17.68 8.38C17.643 8.46774 17.6318 8.56423 17.6477 8.65812C17.6637 8.75202 17.7061 8.8394 17.77 8.91C18.4569 9.65988 18.8323 10.6432 18.82 11.66C18.82 15.75 16.39 16.57 14.01 16.84C13.9124 16.8502 13.82 16.8888 13.7442 16.9512C13.6684 17.0135 13.6126 17.0968 13.5838 17.1906C13.555 17.2845 13.5545 17.3847 13.5823 17.4788C13.6101 17.573 13.6649 17.6568 13.74 17.72C13.9615 17.9486 14.1308 18.2226 14.2361 18.523C14.3414 18.8234 14.3803 19.1431 14.35 19.46V22.64C14.3451 22.7963 14.3748 22.9518 14.437 23.0953C14.4993 23.2388 14.5925 23.3668 14.71 23.47C14.8597 23.5821 15.0335 23.6576 15.2175 23.6906C15.4016 23.7236 15.5908 23.7131 15.77 23.66C18.4681 22.7574 20.7578 20.9254 22.2304 18.4911C23.703 16.0568 24.2628 13.1784 23.8099 10.3696C23.357 7.56082 21.9208 5.00431 19.7577 3.15625C17.5945 1.30818 14.8451 0.288804 12 0.279999Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </a>
                <a href="https://twitter.com/codepriezt"  class="mr-8" target="_blank">
                <div class="icon h-7 w-7 md:h-12 md:w-12 xl:w-7 xl:h-7">
                    
                    <svg class="w-full h-full" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <path d="M27.32 6.44C27.3912 6.38086 27.4445 6.30313 27.4741 6.21546C27.5037 6.1278 27.5084 6.03364 27.4877 5.94346C27.467 5.85329 27.4216 5.77063 27.3567 5.7047C27.2918 5.63876 27.2099 5.59214 27.12 5.57L26.33 5.37C26.2582 5.35202 26.1912 5.3183 26.134 5.2713C26.0768 5.22429 26.0308 5.16516 25.9992 5.09818C25.9676 5.0312 25.9513 4.95805 25.9514 4.884C25.9516 4.80995 25.9682 4.73686 26 4.67L26.44 3.78C26.4816 3.69376 26.4975 3.5974 26.4859 3.50236C26.4743 3.40733 26.4357 3.31763 26.3746 3.24391C26.3135 3.17019 26.2326 3.11556 26.1413 3.0865C26.0501 3.05745 25.9525 3.05519 25.86 3.08L23.86 3.64C23.7855 3.66174 23.7069 3.66582 23.6306 3.65194C23.5542 3.63805 23.4821 3.60657 23.42 3.56C22.5545 2.91089 21.5019 2.56 20.42 2.56C19.0939 2.56 17.8222 3.08679 16.8845 4.02447C15.9468 4.96215 15.42 6.23392 15.42 7.56V7.92C15.4205 7.98142 15.3983 8.04085 15.3577 8.08696C15.3171 8.13307 15.261 8.16263 15.2 8.17C12.39 8.5 9.70001 7.07 6.80001 3.73C6.73701 3.66052 6.65608 3.60976 6.5661 3.5833C6.47612 3.55683 6.38059 3.55569 6.29001 3.58C6.20841 3.61751 6.13841 3.67631 6.08738 3.75021C6.03635 3.82412 6.00617 3.9104 6.00001 4C5.59947 5.64534 5.76141 7.37743 6.46001 8.92C6.48068 8.96092 6.4897 9.00673 6.48609 9.05242C6.48248 9.09812 6.46638 9.14194 6.43954 9.17911C6.4127 9.21627 6.37616 9.24533 6.33392 9.26313C6.29167 9.28092 6.24535 9.28676 6.20001 9.28L5.08001 9.06C5.00047 9.04721 4.91902 9.05383 4.84259 9.0793C4.76616 9.10476 4.69702 9.14832 4.64105 9.20626C4.58507 9.26419 4.54393 9.3348 4.52111 9.41206C4.4983 9.48932 4.49449 9.57095 4.51001 9.65C4.59635 10.4174 4.85418 11.1557 5.26443 11.81C5.67468 12.4643 6.22683 13.018 6.88001 13.43C6.92228 13.4505 6.95792 13.4824 6.98287 13.5222C7.00781 13.562 7.02104 13.608 7.02104 13.655C7.02104 13.702 7.00781 13.748 6.98287 13.7878C6.95792 13.8276 6.92228 13.8595 6.88001 13.88L6.35001 14.09C6.28565 14.1158 6.22735 14.1547 6.17883 14.2043C6.13032 14.2538 6.09263 14.3129 6.06818 14.3778C6.04373 14.4427 6.03304 14.5119 6.0368 14.5812C6.04056 14.6504 6.05868 14.7181 6.09001 14.78C6.3831 15.4213 6.82737 15.982 7.38471 16.4139C7.94205 16.8459 8.59584 17.1362 9.29001 17.26C9.33827 17.2775 9.37997 17.3095 9.40944 17.3515C9.43891 17.3936 9.45472 17.4437 9.45472 17.495C9.45472 17.5463 9.43891 17.5964 9.40944 17.6385C9.37997 17.6805 9.33827 17.7125 9.29001 17.73C7.93037 18.2923 6.47127 18.5746 5.00001 18.56C4.8674 18.5335 4.72969 18.5607 4.61717 18.6357C4.50465 18.7108 4.42653 18.8274 4.40001 18.96C4.37349 19.0926 4.40073 19.2303 4.47575 19.3428C4.55076 19.4554 4.6674 19.5335 4.80001 19.56C7.34755 20.7682 10.1212 21.4259 12.94 21.49C15.4195 21.5278 17.8548 20.832 19.94 19.49C21.6552 18.345 23.0605 16.7935 24.0306 14.9737C25.0007 13.1538 25.5055 11.1223 25.5 9.06V8.19C25.5006 8.11739 25.517 8.04578 25.5481 7.98016C25.5792 7.91454 25.6242 7.85647 25.68 7.81L27.32 6.44Z" />
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                    </svg>

                </div>
                </a>
                <a href="https://linkedin.com/in/olumide-okewale" class="mr-8" target="_blank">
                <div class="icon h-6 w-6 md:h-10 md:w-10 xl:h-6 xl:w-6">
                    
                    <svg class="w-full h-full"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 8.5H2.5C2.22386 8.5 2 8.72386 2 9V22C2 22.2761 2.22386 22.5 2.5 22.5H6.5C6.77614 22.5 7 22.2761 7 22V9C7 8.72386 6.77614 8.5 6.5 8.5Z" />
                    <path d="M4.48 6.5C5.84967 6.5 6.96 5.38071 6.96 4C6.96 2.61929 5.84967 1.5 4.48 1.5C3.11033 1.5 2 2.61929 2 4C2 5.38071 3.11033 6.5 4.48 6.5Z" />
                    <path d="M18.5 22.5H21.5C21.6326 22.5 21.7598 22.4473 21.8536 22.3536C21.9473 22.2598 22 22.1326 22 22V13.6C22 9.83 19.87 8 16.89 8C16.3022 7.9785 15.7164 8.08041 15.1704 8.29915C14.6245 8.51789 14.1304 8.84862 13.72 9.27C13.6652 9.33332 13.5923 9.37834 13.5111 9.399C13.43 9.41967 13.3445 9.41498 13.266 9.38557C13.1876 9.35617 13.1201 9.30345 13.0725 9.23452C13.025 9.16559 12.9997 9.08375 13 9C13 8.86739 12.9473 8.74022 12.8536 8.64645C12.7598 8.55268 12.6326 8.5 12.5 8.5H9.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74022 9 8.86739 9 9V22C9 22.1326 9.05268 22.2598 9.14645 22.3536C9.24021 22.4473 9.36739 22.5 9.5 22.5H12.5C12.6326 22.5 12.7598 22.4473 12.8536 22.3536C12.9473 22.2598 13 22.1326 13 22V14.5C13 13.837 13.2634 13.2011 13.7322 12.7322C14.2011 12.2634 14.837 12 15.5 12C16.163 12 16.7989 12.2634 17.2678 12.7322C17.7366 13.2011 18 13.837 18 14.5V22C18 22.1326 18.0527 22.2598 18.1464 22.3536C18.2402 22.4473 18.3674 22.5 18.5 22.5Z" />
                    </svg>

                </div>
                </a>
                <!-- <a href="#" class="mr-8">
                <div class="icon h-6 w-6 md:h-10 md:w-10 xl:h-6 xl:w-6">
                    
                    <svg class="w-full h-full"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M23 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0V0ZM20.36 5.85L19 7.08C18.9466 7.12201 18.9055 7.17757 18.8808 7.24089C18.8562 7.3042 18.849 7.37296 18.86 7.44V16.92C18.849 16.987 18.8562 17.0558 18.8808 17.1191C18.9055 17.1824 18.9466 17.238 19 17.28L20.35 18.61V18.88H14V18.61L15.16 17.25C15.29 17.12 15.29 17.08 15.29 16.89V10L12.49 17.9L12.19 18.9H11.4C8.75 13.11 7.91 11.08 7.1 9.69V16.69L8.74 18.69V18.96H4V18.69L5.6 16.69V7.69L4.36 6.15V5.62H9.13L12.35 13.33L15 6.06C15.0402 5.88464 15.1421 5.72959 15.2872 5.62312C15.4322 5.51664 15.6106 5.46585 15.79 5.48H20.37L20.36 5.85Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </div>
                </a> -->
            </div>
            <div class="">
                <p>You can also say hi to me here</p>
                <a class="underline font-bold ml-4 dark:text-yellow-500" href="mailto:kolumide22@gmail.com">kolumide22@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script>

import utils from '@/utilClasses/utils';
import storage from '@/utilClasses/data';
export default {
    data(){
        return{
            name:null,
            service:null,
            email:null,
            message:null,
            handler:{
                type:null,
                message:null,
                input_type:null,
                show:false    
            },
            success_message : false,
            is_loading:false
        }
    },
    
    
    methods:{
        submit(){
            
            //default the success_message to false
            this.setToDefault();
            
            if (!this.validate(this.name , this.email , this.message )) {
                return false
            }
            
            this.is_loading = true
            
            try{
                var submit = this.service.save_contact(this.name , this.email , this.message)
                    
            }catch(error ){
                return false;
            }
            console.log(submit)
             submit == true ? this.success_message = true : this.success_message = false
             
             this.is_loading = false 
        },
        
        
        
        setToDefault(){
          //on click set handler  back to default
          this.handler = {
              type:null,
              message:null,
              input_type:null,
              show:false     
          }  
          
          //set the success_to default as well 
          this.success_message = false
        },
        
        
        validate(name  , email , message){
            if(typeof(name) == 'number'){
                this.handler = {
                    type:"error",
                    message:"Invalid Name Format",
                    input_type:"name",
                    show:true
                } 
                 
                return false
            }
            
           
            if(!(utils.isStringLike(name))){
                    this.handler = {
                        type:"error",
                        message:"Name Input Is Required",
                        input_type:"name",
                        show:true
                    }   
                return false  
            }
                
            if(!(utils.isStringLike(email))){
                    this.handler = {
                        type:"error",
                        message:"Email Input Is Required",
                        input_type:"email",
                        show:true
                    }
                   return false  
              }
            
        
            if(!(utils.isStringLike(message))){
                this.handler = {
                    type:"error",
                    message:"Message Input Is Required",
                    input_type:"message",
                    show:true
                }
                return false  
            }
            
            return true;
        }
    },
    
    mounted(){
        this.service = new storage()
    }
}
</script>

<style scoped>
    .cont{
        flex: 0 0 20%;
    }

    .form-element button:hover svg{
        transform: rotateX(0);
    }

    html.dark .form-element button:hover{
        background-color: rgba(180, 83, 9, var(--tw-bg-opacity));
    }
    .sm-icons a{
        transition: all .3s ease-in-out;
    }
    .sm-icons a:hover{
        transform: translateY(.2rem) scale(1.01);
    }
    .sm-icons svg{
        fill: #000; 
    }

    html.dark .sm-icons svg{
        fill: rgba(253, 230, 138, var(--tw-text-opacity));
    }
</style>