<template>
    <div class="container px-3 xl:px-8">
    <div class="logo  h-12 w-12">
      
    <svg class="h-full w-full mt-6" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <circle cx="40.5" cy="38.5" r="38.5" fill="white"/>
        <circle cx="40.5" cy="38.5" r="38" stroke="#DADADA"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.3643 16.0005C42.502 14.6665 40.4595 14.6665 39.5972 16.0005L27.2787 35.0572C26.3755 36.4544 27.4349 38.2507 29.1623 38.2507H53.7992C55.5265 38.2507 56.586 36.4544 55.6828 35.0572L43.3643 16.0005ZM42.785 24.2053C41.9147 22.9253 39.9419 22.9253 39.0716 24.2053L34.0373 31.6091C33.0884 33.0045 34.144 34.8431 35.894 34.8431H45.9626C47.7126 34.8431 48.7682 33.0045 47.8193 31.6091L42.785 24.2053Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3936 43.4175C27.4211 43.4175 25.0115 45.8406 25.0115 48.8297V57.4891C25.0115 60.1075 26.8605 62.2916 29.3172 62.7931V52.077C29.3172 49.6857 31.2449 47.7472 33.6229 47.7472H48.6928C51.0707 47.7472 52.9985 49.6857 52.9985 52.077V62.7931C55.4551 62.2916 57.3041 60.1075 57.3041 57.4891V48.8297C57.3041 45.8406 54.8945 43.4175 51.922 43.4175H30.3936Z" fill="#1B45DC"/>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="2" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.104718 0 0 0 0 0.271115 0 0 0 0 0.861068 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
    </svg>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scopded>
  .container{
    flex: 0 0 50%;
  }

  @media  screen and (max-width: 768px) {
      .container{
    flex: 0 0 33.3%;
  }
  }
</style>