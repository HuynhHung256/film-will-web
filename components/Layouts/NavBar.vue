<template>
    <nav
      class="
        bg-white
        w-screen
        xl:px-60
        lg:px-32
        md:px-26
        sm:px-10
        xm:px-10
        py-1
        
        shadow-xl
      "
    >
      <div class="grid grid-flow-row grid-cols-5 gap-x-4">
        <div
          class="
            col-span-2
            grid grid-flow-row grid-cols-5
            gap-4
            items-center
            content-center
          "
        >
          <div class="col-span-1">
            <NuxtLink to="/">
              <img
                class="h-8 w-8 aspect-square"
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
                    border border-gray-400
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500
                    block
                    w-full
                    pl-10
                    p-1.5
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
            grid grid-flow-row grid-cols-5
            gap-4
            justify-end justify-items-end
            items-center
            content-center
          "
        >
          <div class="">
            <NuxtLink
              to="/"
              class="
                text-gray-600
                hover:bg-gray-600 hover:text-white
                px-2
                py-2
                rounded-full
                font-medium
                block
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </NuxtLink>
          </div>

          <div class="">
            <NuxtLink
              to="/my-ticket"
              class="
                text-gray-600
                hover:bg-gray-600 hover:text-white
                px-2
                py-2
                rounded-full
                font-medium
                block
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </NuxtLink>
          </div>

          <div class="">
            <NuxtLink
              to="/news"
              class="
                text-gray-600
                hover:bg-gray-600 hover:text-white
                px-2
                py-2
                rounded-full
                font-medium
                block
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </NuxtLink>
          </div>

          <div class="">
            <button
              type="button"
              class="
                text-gray-600
                hover:bg-gray-600 hover:text-white
                px-2
                py-2
                rounded-full
                font-medium
                block
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>

          <div class="">
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="
                    max-w-xs
                    bg-gray-600
                    rounded-full
                    flex
                    items-center
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-offset-gray-600
                    focus:ring-white
                  "
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <MenuItem
                    v-for="item in userMenu"
                    :key="item.name"
                    :v-slot="active"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  data() {
    return {
      user: {
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "John Doe",
      },
      userMenu: [
        { name: "Profile", href: "#" },
        { name: "Settings", href: "#" },
        { name: "Sign out", href: "#" },
      ],
      active: false,
    };
  },
};
</script>