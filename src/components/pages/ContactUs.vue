<template>
  <p>Contact Us</p>
   <!-- First View Starts -->
    <div class="first-view  h-height60  w-screen">
        <Banner nameofpage="Contact Us" />
    </div>
    <!-- First View Ends -->

    <main class="grid grid-cols-1 xl:grid-cols-2 gap-10 px-8 xl:px-16 py-10 w-screen ">
      <div class=" contact-form">
       
        <h3 class="text-lg md:text-2xl mb-4">CONTACT US FOR ANY QUESTIONS</h3>

        <form action="#">

          <div class="form-element w-full flex flex-col mb-4">
              <label for="username" class="mb-1 xl:mb-2 text-sm xl:text-base text-gray-600">Your Name</label>
              <input placeholder="Chibuzor" type="text" class="text-sm outline-none px-2 py-1 bg-gray-100" name="username" id="username" />
          </div>

          <div class="form-element w-full flex flex-col mb-4">
              <label for="email" class="mb-1 xl:mb-2 text-sm xl:text-base text-gray-600">Email</label>
              <input placeholder="iwuagwuchibuzor@gmail.com" type="email" class="text-sm outline-none px-2 py-1 bg-gray-100" name="email" id="email" />
          </div>  

          <div class="form-element w-full flex flex-col mb-4">
              <label for="number" class="mb-1 xl:mb-2 text-sm xl:text-base text-gray-600">Phone Number</label>
              <input placeholder="08094939264" type="number" class="text-sm outline-none px-2 py-1 bg-gray-100" name="number" id="number" />
          </div>                    

          <div class="form-element w-full flex flex-col mb-4">
              <label for="comment" class="mb-1 xl:mb-2 text-sm xl:text-base text-gray-600">Message</label>
              <textarea placeholder="Your message goes here..."  name="comment" id="comment" class="h-height30 text-sm xl:text-base w-full p-2 outline-none bg-gray-100"></textarea>
          </div>

          <input type="button" class=" px-8 text-white py-1 cursor-pointer" value="Send Message">
        
        </form>

        </div>

        <div class="address-bar px-2 xl:px-10 w-full h-full ">
          <div class="div bg-red-500 w-full h-full py-4 xl:py-10 flex flex-col  md:justify-between">
            <div class="one px-4 xl:px-8 text-white  ">
                <h4 class="text-lg mb-2 md:mb-0 ">Our Stories</h4>
                <p class="border-b  border-white  pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic nobis ducimus mollitia nulla est voluptas assumenda adipisci deserunt tenetur!</p>
            </div>
            <div class="one px-4 xl:px-8 text-white  ">
                <h4 class="text-lg mt-5">EMAIL</h4>
                <p class="border-b border-white pb-4"><a href="mailto:info@smoochiz.com">info@smoochiz.com</a></p>
            </div>
            <div class="one px-4 xl:px-8 text-white  ">
                <h4 class="text-lg mt-5">PHONE</h4>
                <p class="border-b border-white pb-r"> +234 908 765 4321</p>
            </div>
            <div class="one px-4 xl:px-8 text-white  ">
                <h4 class="text-lg mt-5 ">FOLLOW US</h4>
                <p class="border-b border-white pb-2 pt-2 flex">
                    <a class="mr-6" href="#">
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.70833 1H7.33333C6.28352 1 5.2767 1.39509 4.53437 2.09835C3.79204 2.80161 3.375 3.75544 3.375 4.75V7H1V10H3.375V16H6.54167V10H8.91667L9.70833 7H6.54167V4.75C6.54167 4.55109 6.62507 4.36032 6.77354 4.21967C6.92201 4.07902 7.12337 4 7.33333 4H9.70833V1Z"
                                stroke="#F04C39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a class="mr-6" href="#">
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.7085 1.75C16.9903 2.25661 16.1951 2.64409 15.3535 2.8975C14.9018 2.37814 14.3015 2.01002 13.6338 1.84295C12.966 1.67587 12.2631 1.7179 11.6201 1.96334C10.977 2.20879 10.4248 2.6458 10.0382 3.21529C9.65164 3.78478 9.44927 4.45926 9.4585 5.1475V5.8975C8.14047 5.93168 6.83445 5.63936 5.65675 5.04659C4.47905 4.45381 3.46623 3.57898 2.7085 2.5C2.7085 2.5 -0.291504 9.25 6.4585 12.25C4.91389 13.2985 3.07386 13.8242 1.2085 13.75C7.9585 17.5 16.2085 13.75 16.2085 5.125C16.2078 4.91609 16.1877 4.7077 16.1485 4.5025C16.9139 3.74762 17.4541 2.79454 17.7085 1.75V1.75Z"
                                stroke="#F04C39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a class="mr-6" href="#">
                        <svg height="16" fill="white" class="insta" viewBox="0 0 511 511.9" width="19" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
                            <path
                                d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
                            <path
                                d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
                        </svg>
                    </a>
                </p>
            </div>
          </div>

        </div>

        <div class="faq ">
        <h3 class="text-xl md:text-3xl mb-6">Frequently Asked Questions</h3>
        <div class="div flex flex-col justify-between">
            <div class="up">
            <p class="border-b border-gray-400 mb-4">Delivery Charges for orders from the online shop?</p>
            <p class="mt-6 text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit nostrum eveniet ducimus ullam quos
                architecto. Ea alias harum voluptates exercitationem praesentium perferendis adipisci quo!</p>
            </div>
            <div class="questions mt-16">
                <p class="text-gray-800 py-2 border-b border-t border-gray-400">How long will Delivery take?</p>
                <p class="text-gray-800 py-2 border-b  border-gray-400">What exactly happens after ordering?</p>
                <p class="text-gray-800 py-2 border-b border-gray-400">Do I receive an invoice for my order?</p>
                <p class="text-gray-800 py-2 border-b  border-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab.</p>
            </div>
        </div>
      </div>
      
      <div class="map">
          <img :src="require('../../assets/images/Rectangle 83 (1).jpg')" alt="">
      </div>
    </main>

</template>

<script>
import Banner from '../layout/Banner.vue';
export default {
  components:{
    Banner,
  }

}
</script>

<style scoped>

input[type="button"] {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
  background-origin: border-box;
  transition: background 0.3s linear;
}
input[type="button"]:hover {
  background: #000;
}

.one svg {
  background: white;
  stroke: #f04c39;
  border-radius: 50%;
  padding: 0.4rem;
  width: 1.4rem;
  height: 1.4rem;
}

.one svg.insta {
  fill: #f04c39;
  stroke: #f04c39;
}



</style>