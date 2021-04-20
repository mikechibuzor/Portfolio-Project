<template>
  <div class="container  grid grid-cols-1 xl:grid-cols-2 h-height100 xl:h-height80 items-center justify-center px-6 xl:pl-32 xl:pr-16 ">
    <div class="first col-span-1 flex items-center justify-center xl:items-start xl:justify-start relative">
      <div class="profile-image dark:shadow-lg dark:border-yellow-500  object-contain h-height30 xl:h-height60 w-full  overflow-hidden   xl:w-3/5  ">
        <img class="h-full w-full" :src="publicPath + '' +slidesObj.imageUrl" alt="olumide-okewale">
      </div>
      <div class="smedia-icons absolute -bottom-16 md:-bottom-28 xl:-bottom-16 flex items-center justify-between  px-20 md:flex   md:px-32 w-full md:w-full xl:w-4/5">
        <a href="#">
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
        <a href="#">
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
        <a href="#">
          <div class="icon h-6 w-6 md:h-10 md:w-10 xl:h-6 xl:w-6">
            
            <svg class="w-full h-full"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 8.5H2.5C2.22386 8.5 2 8.72386 2 9V22C2 22.2761 2.22386 22.5 2.5 22.5H6.5C6.77614 22.5 7 22.2761 7 22V9C7 8.72386 6.77614 8.5 6.5 8.5Z" />
            <path d="M4.48 6.5C5.84967 6.5 6.96 5.38071 6.96 4C6.96 2.61929 5.84967 1.5 4.48 1.5C3.11033 1.5 2 2.61929 2 4C2 5.38071 3.11033 6.5 4.48 6.5Z" />
            <path d="M18.5 22.5H21.5C21.6326 22.5 21.7598 22.4473 21.8536 22.3536C21.9473 22.2598 22 22.1326 22 22V13.6C22 9.83 19.87 8 16.89 8C16.3022 7.9785 15.7164 8.08041 15.1704 8.29915C14.6245 8.51789 14.1304 8.84862 13.72 9.27C13.6652 9.33332 13.5923 9.37834 13.5111 9.399C13.43 9.41967 13.3445 9.41498 13.266 9.38557C13.1876 9.35617 13.1201 9.30345 13.0725 9.23452C13.025 9.16559 12.9997 9.08375 13 9C13 8.86739 12.9473 8.74022 12.8536 8.64645C12.7598 8.55268 12.6326 8.5 12.5 8.5H9.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74022 9 8.86739 9 9V22C9 22.1326 9.05268 22.2598 9.14645 22.3536C9.24021 22.4473 9.36739 22.5 9.5 22.5H12.5C12.6326 22.5 12.7598 22.4473 12.8536 22.3536C12.9473 22.2598 13 22.1326 13 22V14.5C13 13.837 13.2634 13.2011 13.7322 12.7322C14.2011 12.2634 14.837 12 15.5 12C16.163 12 16.7989 12.2634 17.2678 12.7322C17.7366 13.2011 18 13.837 18 14.5V22C18 22.1326 18.0527 22.2598 18.1464 22.3536C18.2402 22.4473 18.3674 22.5 18.5 22.5Z" />
            </svg>

          </div>
        </a>
        <a href="#">
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
        </a>
      </div>
    </div>
    <div class="second col-span-1 ">
      <div class="text md:-mt-36 xl:mt-o">
        <h1 class="text-2xl name text-center xl:text-left md:text-4xl xl:text-3xl font-bold mb-2">{{ slidesObj.text.firstHeader }}</h1>
        <h3 class="text-lg text-center xl:text-left xl:text-xl font-bold dark:text-yellow-400 text-gray-700 mb-3">{{ slidesObj.text.secondHeader }}</h3>
        <p class="text-center xl:text-justify leading-relaxed text-sm dark:text-yellow-50 text-gray-500 ">{{ slidesObj.text.description }}
        </p>
        <p class="text-gray-500 dark:text-yellow-400 mt-4 mb-8 xl:mb-0 text-center xl:text-left">I code in</p>
        <div class="techStack mt-4 grid grid-cols-5 w-full justify-center xl:justify-start  px-6 xl:px-0 xl:w-3/5 ">
          <div class="icon h-8 w-8">            
            <svg class="w-full  h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3934 24.848L12.444 25.5547L13.1507 20.6053L25.8787 7.87733C26.4413 7.31471 27.2044 6.99864 28 6.99864C28.7957 6.99864 29.5588 7.31471 30.1214 7.87733C30.684 8.43994 31 9.20301 31 9.99866C31 10.7943 30.684 11.5574 30.1214 12.12L17.3934 24.848Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 0.998672H8C7.44772 0.998672 7 1.44639 7 1.99867V3.99867C7 4.55096 7.44772 4.99867 8 4.99867H16C16.5523 4.99867 17 4.55096 17 3.99867V1.99867C17 1.44639 16.5523 0.998672 16 0.998672Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 2.99867H21C21.5304 2.99867 22.0391 3.20939 22.4142 3.58446C22.7893 3.95953 23 4.46824 23 4.99867" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 24.9987V28.9987C23 29.5291 22.7893 30.0378 22.4142 30.4129C22.0391 30.788 21.5304 30.9987 21 30.9987H3C2.46957 30.9987 1.96086 30.788 1.58579 30.4129C1.21071 30.0378 1 29.5291 1 28.9987V4.99867C1 4.46824 1.21071 3.95953 1.58579 3.58446C1.96086 3.20939 2.46957 2.99867 3 2.99867H7" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 10.9987H17" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 16.9987H11" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="icon h-8 w-8">
            
            <svg class="w-full dark:fill h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.9987 3H3.99866C2.89409 3 1.99866 3.89543 1.99866 5V27C1.99866 28.1046 2.89409 29 3.99866 29H27.9987C29.1032 29 29.9987 28.1046 29.9987 27V5C29.9987 3.89543 29.1032 3 27.9987 3Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.99866 9H29.9987" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.9987 13H6.99866C6.44637 13 5.99866 13.4477 5.99866 14V20C5.99866 20.5523 6.44637 21 6.99866 21H12.9987C13.5509 21 13.9987 20.5523 13.9987 20V14C13.9987 13.4477 13.5509 13 12.9987 13Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.99866 25H14" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.9987 13H18.9987C18.4464 13 17.9987 13.4477 17.9987 14V24C17.9987 24.5523 18.4464 25 18.9987 25H24.9987C25.5509 25 25.9987 24.5523 25.9987 24V14C25.9987 13.4477 25.5509 13 24.9987 13Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.9987 19H25.9987" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="icon h-8 w-8">
            
            <svg class="h-full w-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 26.8467C1.00176 27.4172 1.22919 27.9639 1.63264 28.3674C2.03609 28.7708 2.58277 28.9982 3.15333 29H29C29.5304 29 30.0391 28.7893 30.4142 28.4142C30.7893 28.0391 31 27.5304 31 27" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31 9V5.15333C30.9982 4.58277 30.7708 4.03609 30.3674 3.63264C29.9639 3.22919 29.4172 3.00176 28.8467 3H3.14267C2.57494 3.00176 2.03096 3.22807 1.62951 3.62951C1.22807 4.03096 1.00176 4.57494 1 5.14267V9" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 9H31" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 23V13" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 13H13" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 23V13" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 23V13" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 19H5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M27 13V21C27 21.5304 27.2107 22.0391 27.5858 22.4142C27.9609 22.7893 28.4696 23 29 23H31" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 23V13L20 18L17 13V23" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="icon h-8 w-8">
            
            <svg class="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 3H4C2.89543 3 2 3.89543 2 5V27C2 28.1046 2.89543 29 4 29H28C29.1046 29 30 28.1046 30 27V5C30 3.89543 29.1046 3 28 3Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 9H30" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 13H7C6.44772 13 6 13.4477 6 14V16C6 16.5523 6.44772 17 7 17H25C25.5523 17 26 16.5523 26 16V14C26 13.4477 25.5523 13 25 13Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 21H7C6.44772 21 6 21.4477 6 22V24C6 24.5523 6.44772 25 7 25H11C11.5523 25 12 24.5523 12 24V22C12 21.4477 11.5523 21 11 21Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 21H26" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 25H26" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="icon h-8 w-8">
            
            <svg class="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31 27V5.15333C30.9982 4.58277 30.7708 4.03609 30.3674 3.63264C29.9639 3.22919 29.4172 3.00176 28.8467 3H3.14267C2.57494 3.00176 2.03096 3.22807 1.62951 3.62951C1.22807 4.03096 1.00176 4.57494 1 5.14267V26.8467C1.00176 27.4172 1.22919 27.9639 1.63264 28.3674C2.03609 28.7708 2.58277 28.9982 3.15333 29H29C29.5304 29 30.0391 28.7893 30.4142 28.4142C30.7893 28.0391 31 27.5304 31 27Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 9H31" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 14C8.93913 14 7.92172 14.4214 7.17157 15.1716C6.42143 15.9217 6 16.9391 6 18V20C6 21.0609 6.42143 22.0783 7.17157 22.8284C7.92172 23.5786 8.93913 24 10 24" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26 14H24C23.4696 14 22.9609 14.2107 22.5858 14.5858C22.2107 14.9609 22 15.4696 22 16C22 19 26 19 26 22C26 22.5304 25.7893 23.0391 25.4142 23.4142C25.0391 23.7893 24.5304 24 24 24H22" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16C14 19 18 19 18 22C18 22.5304 17.7893 23.0391 17.4142 23.4142C17.0391 23.7893 16.5304 24 16 24H14" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['slidesObj'],
    data(){
        return {
        publicPath: process.env.BASE_URL,
      }
    }
}
</script>

<style scoped>
  .profile-image{
    width: 60vh;
    border-radius: 50%;
    transition: all .3s linear;
  }

  .smedia-icons a{
    transition: all .15s linear;
  }

  .smedia-icons a svg path{
    fill: #1B45DC;
    transition: all .15s ease-in;
  }

  
  .smedia-icons a:hover{
    transform: translateY(.2rem) scale(1.01);
  }

  .smedia-icons a:hover svg path{
    fill: #000;
  }

  html.dark .smedia-icons a svg path{
    fill: #FBBF24;
  }
  html.dark .profile-image{
    border: 3px solid #FBBF24;
  }
  html.dark .techStack svg path{
    fill: #FBBF24;
  }

  @media screen and (max-width: 768px){
    .profile-image{
    width: 30vh;
 
  }
  }

/* Fixing responsiveness on screens */
  @media screen and (height: 960px){
    .first .smedia-icons{
      padding: 0 7rem;
      margin-bottom: -1.5rem;
    }

    .first .smedia-icons .icon{
      height: 2rem;
      width: 2rem;
    }
    .second {
      margin-top: -4rem;
     
    }

    .second .name{
      font-size: 2rem;
      line-height: 2.6rem;
    }

    .second  h3{
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .second p{
      font-size: 1.25rem;
    }
  }

  @media screen and (width: 320px){
    .first{
      margin-top: 4rem;
    }

    .first .smedia-icons{
      padding: 0 4rem;

    }

    .second{
      margin-top: 6rem;
    }


  }
</style>