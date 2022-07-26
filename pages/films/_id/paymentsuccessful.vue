<template>
  <div class = "mt-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:pt-4 lg:pb-16 justify-center grid">
      <div class="flex justify-center">
        <h1 class="text-4xl font-bold font-sans">Payment Successful!</h1> 
      </div>

      <div class="flex justify-center pl-8 scale-75">
        <img :src="img" alt="#">
      </div>

      <div class="flex justify-center max-w-xl text-center">Transaction details have been sent to your email, you can also check other ticket details on my ticket either on the website or on your smartphone.</div>
    
      <div class="flex justify-center pt-4">
        <NuxtLink to="/account/tickets" class="text-gray-400 hover:bg-gray-700 hover:text-white text-xl border-2 border-gray-700 px-8  py-2 rounded-md font-medium">My Ticket</NuxtLink>
      
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      img:{
        src: '@/component/success.png',
        alt: '#'
      }
    }
  }
}
</script>