<template>
  <div id="login" class="grid xl:grid-cols-3 md:grid-cols-1 py-24 px-32">
    <div class="col-span-1 mb-6">
      <button class="px-3 py-1 hover:underline scale-125">
        <NuxtLink to="/" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline mr-3 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span class="text-xl font-bold">Return</span>
        </NuxtLink>
      </button>
    </div>

    <div class="col-span-2">
      <div class="w-9/12 bg-white px-24 pb-10 pt-20 rounded-lg">
        <h1 class="text-5xl font-semibold mb-16">Login to FILM WILL</h1>
        <form
          id="login-form"
          class="w-full"
          @submit.prevent="login"
          @keydown.enter.prevent="login"
        >
          <div class="mb-10">
            <label
              class="block uppercase text-gray-900 text-xl font-light mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="
                w-full
                appearance-none
                text-lg
                border-b-2
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
              "
              id="email"
              type="email"
              placeholder="Enter Email"
              v-model="email"
            />
          </div>
          <div class="">
            <label
              class="block uppercase text-gray-900 text-xl font-light mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                w-full
                appearance-none
                text-lg
                border-b-2
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none
              "
              id="password"
              type="password"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>
          <div class="text-red-800 mb-3">
            {{ error }}
          </div>

          <div class="mb-12">
            <nuxt-link to="/auth/forgot-password" class="inline-block text-sm">
              Forgot Password? Reset Password
            </nuxt-link>
          </div>
          <div class="mb-8">
            <button
              class="
                w-full
                border-2 border-sky-900
                bg-sky-900
                hover:opacity-90
                text-white text-lg
                font-bold
                py-2
                px-4
                rounded-lg
                focus:outline-none focus:shadow-outline
              "
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div class="mb-20">
            <span class="text-sm text-center block mb-3">
              New to FILM WILL?
            </span>
            <NuxtLink to="/auth/signup">
              <button
                class="
                  w-full
                  border-2 border-sky-900
                  hover:bg-slate-50
                  text-sky-900 text-lg
                  font-bold
                  py-2
                  px-4
                  rounded-lg
                  focus:outline-none focus:shadow-outline
                "
                type="button"
              >
                Sign Up Now
              </button>
            </NuxtLink>
          </div>
        </form>
        <span class="text-sm font-medium"> 2022 FILM WILL - Group 14 </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "authentication",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      })
      if (this.$store.getters["auth/isLogin"]) this.$router.push("/")
      else this.error = "Invalid email or password"
    },
  },
}
</script>