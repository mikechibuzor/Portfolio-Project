<template>
  <div class="cont px-6 xl:px-16 py-10 flex flex-col xl:grid grid-cols-2">
      <div class="first mt-8 xl:mt-0 h-height70 te col-span-1  ">
          <img class="h-full " src="../../../public/assets/images/Project.jpg" alt="project">
      </div>
      <div class="second ">
          <div @click="goBack" class="navigation absolute top-24 xl:static flex items-center cursor-pointer ">
              <div class="icon h-6 w-6  mr-2">   
                <svg class="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 2C13.9778 2 15.9112 2.58649 17.5557 3.6853C19.2002 4.78412 20.4819 6.3459 21.2388 8.17317C21.9957 10.0004 22.1937 12.0111 21.8079 13.9509C21.422 15.8907 20.4696 17.6725 19.0711 19.0711C17.6725 20.4696 15.8907 21.422 13.9509 21.8079C12.0111 22.1937 10.0004 21.9957 8.17317 21.2388C6.34591 20.4819 4.78412 19.2002 3.68531 17.5557C2.5865 15.9112 2.00001 13.9778 2.00001 12C2.00292 9.34873 3.05742 6.80688 4.93215 4.93215C6.80689 3.05742 9.34873 2.00291 12 2Z" />
                        <path d="M11.882 8.38302L9.94303 10.323C9.90797 10.358 9.88409 10.4026 9.87441 10.4511C9.86472 10.4997 9.86968 10.55 9.88863 10.5958C9.90759 10.6415 9.9397 10.6806 9.9809 10.708C10.0221 10.7355 10.0705 10.7501 10.12 10.75H18C18.3315 10.75 18.6495 10.8817 18.8839 11.1161C19.1183 11.3506 19.25 11.6685 19.25 12C19.25 12.3315 19.1183 12.6495 18.8839 12.8839C18.6495 13.1183 18.3315 13.25 18 13.25H10.12C10.0707 13.2501 10.0225 13.2648 9.98157 13.2922C9.94059 13.3196 9.90863 13.3586 9.88971 13.4041C9.87079 13.4496 9.86576 13.4997 9.87525 13.5481C9.88473 13.5965 9.90832 13.641 9.94303 13.676L11.882 15.616C12.1163 15.8503 12.248 16.1681 12.248 16.4995C12.248 16.8309 12.1163 17.1487 11.882 17.383C11.6477 17.6173 11.3299 17.749 10.9985 17.749C10.6671 17.749 10.3493 17.6173 10.115 17.383L5.61503 12.883C5.49871 12.7672 5.40642 12.6295 5.34344 12.4779C5.28046 12.3262 5.24805 12.1637 5.24805 11.9995C5.24805 11.8353 5.28046 11.6728 5.34344 11.5212C5.40642 11.3696 5.49871 11.2319 5.61503 11.116L10.115 6.61602C10.3493 6.3817 10.6671 6.25006 10.9985 6.25006C11.3299 6.25006 11.6477 6.3817 11.882 6.61602C12.1163 6.85034 12.248 7.16814 12.248 7.49952C12.248 7.8309 12.1163 8.1487 11.882 8.38302Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
              </div>
              <p class="text-text-color dark:text-yellow-500 font-bold">Back</p>
          </div>
          <h2 class="text-4xl font-bold my-4 dark:text-gray-200">{{ projObject.nameOfProject }}</h2>
          <p class="leading-relaxed text-gray-700 text-justify xl:mr-32 text-sm dark:text-yellow-50">{{ projObject.aboutProject }}
          </p>
          <div class="github flex items-center justify-center mt-4">
              <a :href="projObject.githubLink" class="text-text-color underline font-bold">View more on github</a>
                <svg class="ml-2 h-6 w-6"  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)" filter="url(#filter0_d)">
                    <path d="M13 0.209999C10.8574 0.209363 8.78487 0.973139 7.15506 2.36399C5.52525 3.75484 4.44511 5.68151 4.10886 7.79756C3.7726 9.91361 4.2023 12.0802 5.32068 13.9078C6.43906 15.7353 8.17275 17.1039 10.21 17.7675H10.4275C10.5336 17.7741 10.6399 17.758 10.7394 17.7204C10.8388 17.6828 10.9291 17.6244 11.0043 17.5493C11.0795 17.4741 11.1378 17.3838 11.1754 17.2844C11.213 17.1849 11.2291 17.0786 11.2225 16.9725V16.815C11.2225 16.6875 11.2225 16.515 11.2225 15.9975C11.2151 15.9484 11.1981 15.9012 11.1723 15.8587C11.1466 15.8162 11.1127 15.7793 11.0725 15.75C11.0289 15.7148 10.978 15.6897 10.9235 15.6767C10.869 15.6638 10.8123 15.6632 10.7575 15.675C8.74751 16.11 8.32001 14.85 8.29001 14.7675C8.03832 14.1008 7.58803 13.5275 7.00001 13.125C6.96478 13.0945 6.92716 13.0669 6.88751 13.0425C6.97466 12.9956 7.07435 12.9772 7.17251 12.99C7.36101 13.0162 7.53952 13.0908 7.69066 13.2064C7.84181 13.3221 7.96044 13.4749 8.03501 13.65C8.32515 14.1552 8.79992 14.5281 9.35944 14.6904C9.91896 14.8527 10.5196 14.7916 11.035 14.52C11.0903 14.4958 11.139 14.4587 11.1768 14.4116C11.2147 14.3646 11.2407 14.3092 11.2525 14.25C11.2812 13.9031 11.4297 13.577 11.6725 13.3275C11.7264 13.2796 11.7654 13.2172 11.7847 13.1478C11.8041 13.0784 11.803 13.0048 11.7817 12.936C11.7603 12.8671 11.7195 12.8059 11.6643 12.7596C11.609 12.7133 11.5415 12.6839 11.47 12.675C9.69251 12.4725 7.87751 11.85 7.87751 8.7825C7.86253 8.01216 8.1445 7.26559 8.66501 6.6975C8.71295 6.64455 8.74477 6.57901 8.75673 6.50859C8.76868 6.43817 8.76028 6.3658 8.73251 6.3C8.52407 5.71765 8.52672 5.08059 8.74001 4.5C9.43288 4.62282 10.0832 4.9196 10.63 5.3625C10.6752 5.39438 10.727 5.41566 10.7815 5.42475C10.836 5.43384 10.8919 5.43051 10.945 5.415C11.615 5.23326 12.3058 5.13997 13 5.1375C13.6968 5.13809 14.3904 5.2314 15.0625 5.415C15.1145 5.42934 15.169 5.43207 15.2221 5.423C15.2752 5.41392 15.3257 5.39327 15.37 5.3625C15.9177 4.92099 16.5676 4.62438 17.26 4.5C17.4642 5.07748 17.4642 5.70751 17.26 6.285C17.2322 6.35081 17.2238 6.42317 17.2358 6.49359C17.2477 6.56401 17.2796 6.62955 17.3275 6.6825C17.8426 7.24491 18.1242 7.98239 18.115 8.745C18.115 11.8125 16.2925 12.4275 14.5075 12.63C14.4343 12.6376 14.3649 12.6666 14.3081 12.7134C14.2513 12.7602 14.2094 12.8226 14.1878 12.893C14.1663 12.9634 14.1659 13.0385 14.1867 13.1091C14.2075 13.1797 14.2487 13.2426 14.305 13.29C14.4711 13.4615 14.5981 13.667 14.6771 13.8923C14.7561 14.1176 14.7852 14.3573 14.7625 14.595V16.98C14.7588 17.0973 14.7811 17.2139 14.8278 17.3215C14.8744 17.4291 14.9444 17.5251 15.0325 17.6025C15.1448 17.6865 15.2751 17.7432 15.4131 17.7679C15.5512 17.7927 15.6931 17.7848 15.8275 17.745C17.8511 17.068 19.5683 15.6941 20.6728 13.8683C21.7772 12.0426 22.1971 9.88383 21.8574 7.77722C21.5177 5.67062 20.4406 3.75323 18.8182 2.36718C17.1959 0.981137 15.1338 0.216603 13 0.209999Z" />
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" transform="translate(4)"/>
                    </clipPath>
                    </defs>
                </svg>
          </div>
          <div class="controls-container bg-white border dark:bg-yellow-200 w-full xl:w-4/5 px-4 pt-1 pb-8 flex justify-between shadow rounded mt-2">
              <div class="previous ">
                  <div  class="left-arrow h-8 w-8 cursor-pointer  ">
                    <router-link :to="prevLink">
                        <svg class="h-full w-full  transition-all duration-300 ease-linear" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </router-link>
                    </div>  
                  <p class="dark:text-gray-900 font-bold">Playroom application: <br />
                      Electronic app
                  </p>
              </div>
              <div class="next grid">
                  <div @click="nextProject" class="right-arrow  h-8 w-8 cursor-pointer  justify-self-end ">
                      <router-link :to="nextLink">
                          <svg class="h-full w-full  transition-all duration-300 ease-linear" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </router-link>
                  </div>
                  <p  class="dark:text-gray-900 font-bold">Playroom application: <br />
                      Electronic app
                  </p>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['id'],
    data(){
        return{
            projObject: null,
            prevLink: null,
            nextLink: null,
        }
    },

    methods:{
        goBack(){
            this.$router.go(-1);
        },
        previousLink(router){
            let paramId = +router.params.id;
            if( paramId > 1){
                paramId -= 1;
                this.prevLink = `/projects/${paramId}`
                return this.prevLink ;
            }
            this.prevLink = `/projects/${paramId}`;
            return this.prevLink;
        },
        linkNext(router){
            let paramId = +router.params.id;
            if( paramId < this.projectLength){
                paramId += 1;
                this.nextLink = `/projects/${paramId}`
                return this.nextLink ;
            }
            this.nextLink = `/projects/${paramId}`;
            return this.nextLink;
        },

    },

    computed:{
        ...mapGetters({ projects: 'getProjects', projectLength: 'getNumberOfProjects'}),

    },
    watch:{
        $route(newRoute){
            this.projObject = this.projects.find( project => project.id === this.$route.params.id);
            this.previousLink(newRoute);
            this.linkNext(newRoute);                
        }
    },
    created(){    
        this.projObject = this.projects.find( project => project.id === this.$route.params.id);
        this.previousLink(this.$route);
        this.linkNext(this.$route);
    }
}
</script>

<style scoped>
    .icon svg {
        fill: #1B45DC;
        stroke: #1B45DC;
    }
    html.dark svg{
        fill:  rgba(245, 158, 11, var(--tw-bg-opacity));
        stroke: rgba(245, 158, 11, var(--tw-bg-opacity));
    }

    html.dark a{
        color:  rgba(245, 158, 11, var(--tw-text-opacity));
    }

    html.dark .controls-container{
        border: none;
        box-shadow: 0 4px 4px 4px rgba(17, 24, 39, var(--tw-text-opacity));
    }

    .right-arrow svg:hover, .left-arrow svg:hover{
        fill: blue;
    }
</style>