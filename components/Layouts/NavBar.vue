<template>
  <header class="">
    <nav class="bg-white w-full xl:px-48 lg:px-32 md:px-26 sm:px-10 xm:px-10 xl:py-3 sm:py-0 shadow-lg">
      <div
        class="grid grid-flow-row grid-cols-5 gap-x-4 xl:scale-100 sm:scale-75"
      >
        <div
          class="
            col-span-2
            grid grid-flow-row grid-cols-5
            gap-4
            justify-start justify-items-start
            items-center
            content-center
          "
        >
          <div class="col-span-1">
            <NuxtLink to="/">
              <img
                class="h-10 w-10 aspect-square xl:scale-100"
                src="@/assets/images/logos/logo1.png"
                alt=""
              />
              <!-- <img
                  class="hidden lg:block h-10 w-10"
                  src="@/assets/images/logos/logo1.png"
                  alt=""
                /> -->
            </NuxtLink>
          </div>
          <div class="col-span-4">
            <form class="w-fit">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="
                    flex
                    absolute
                    inset-y-0
                    left-0
                    items-center
                    pl-3
                    pointer-events-none
                  "
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    pl-10
                    p-2.5
                  "
                  placeholder="Search"
                  required=""
                />
              </div>
            </form>
          </div>
        </div>
        <div></div>
        <div
          class="
            col-span-2
            grid grid-flow-row grid-cols-10
            gap-4
            justify-end justify-items-center
            items-center
            content-center
          "
        >
          <div class="col-span-2">
            <a
              href="#"
              class="
                text-gray-700
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                inline-block
              "
              >Home</a
            >
          </div>

          <div class="col-span-2">
            <a
              href="#"
              class="
                text-gray-700
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                inline-block
              "
              >My Ticket</a
            >
          </div>

          <div class="col-span-2">
            <a
              href="#"
              class="
                text-gray-700
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                inline-block
              "
              >News
            </a>
          </div>

          <div class="col-span-2">
            <button type="button" class="rounded-full hover:bg-slate-100 p-2">
              <svg
                class="text-gray-700 h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>

          <div class="col-span-2">
            <button
              type="button"
              class="rounded-full hover:opacity-80 aspect-square"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>