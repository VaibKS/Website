<template>
  <div class="theme-container" :class="[{'mobile-active': navBar}, $page.frontmatter.pageClass]">

    <header class="flex relative flex-col md:flex-row h-24 md:items-center md:h-24 w-full py-4 px-6 md:px-12" :class="{'mobile-active': navBar}">
      <div class="flex justify-between h-16 z-50 text-3xl font-bold items-center">
        <h1 class="logo font-merienda font-bold">
          <router-link to="/" @click.native="navBar = false">
            Vaibhav Shinde
          </router-link>
        </h1>
        <div @click="navBar = !navBar" class="hamburger md:hidden flex flex-col w-12 h-12 px-1 justify-center cursor-pointer" :class="{ 'active': navBar }">
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>
      <!-- desktop nav -->
      <nav class="hidden md:flex flex-1 flex-col items-end">
        <div class="flex flex-row text-lg items-center">
          <router-link class="my-2 md:ml-6" to="/about">About</router-link>
          <router-link class="my-2 md:ml-6" to="/projects">Projects</router-link>
          <router-link class="my-2 md:ml-6" to="/blog">Blog</router-link>
        </div>
      </nav>
      <!-- mobile nav -->
      <transition name="slide-fade">
        <nav v-show="navBar" class="mobile-nav md:hidden fixed w-full px-6 flex flex-1 flex-col justify-evenly items-center md:items-end font-sans font-hairline tracking-wide">
          <div class="w-full text-right flex flex-col text-3xl items-center">
            <router-link @click.native="navBar = false" class="w-full rounded-lg py-2 my-2 md:ml-6" to="/about">About</router-link>
            <router-link @click.native="navBar = false" class="w-full rounded-lg py-2 my-2 md:ml-6" to="/projects">Projects</router-link>
            <router-link @click.native="navBar = false" class="w-full rounded-lg py-2 my-2 md:ml-6" to="/blog">Blog</router-link>
          </div>
        </nav>
      </transition>
    </header>

    <div class="hero-text w-full flex flex-col bg-salmon text-white pb-8 px-6 justify-center" v-if="$page.frontmatter.home">
      
      <div class="w-full lg:max-w-4xl md:px-12 mx-auto">

        <div class="text-5xl md:text-center lg:text-left tracking-tight font-inter font-extrabold my-20 leading-none">
          Welcome to my place!
        </div>

        <div class="flex action-links md:justify-center justify-end lg:justify-end">
          <router-link class="flex items-center rounded-lg px-4 xl:px-4 py-3 xl:py-3 bg-gray-600 text-white md:text-lg xl:text-base font-semibold leading-tight shadow-md" to="/projects">
            My Work
            <svg class="w-4 ml-2" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </router-link>
          <router-link class="flex items-center rounded-lg px-4 xl:px-4 py-3 xl:py-3 bg-white md:text-lg xl:text-base text-salmon font-semibold ml-2 leading-tight shadow-md" to="/blog">
            Blog
            <svg class="w-4 ml-2" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </router-link>
        </div>

      </div>

    </div>
  
    <Content class="block py-2 pb-12 px-6 md:px-12 text-base text-gray-700"/>

    <footer class="w-full h-32 flex items-center justify-center bg-gray-800">
      <div class="flex">

        <a class="social-link mx-4" href="https://linkedin.com/in/vaibhav-krishnaji">
          <svg data-name="linkedin" class="fill-current h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>

        <a class="social-link mx-4" href="https://github.com/VaibKS">
          <svg data-name="github" class="fill-current h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>

        
        <a class="social-link mx-4" href="https://twitter.com/vaibhavk_shinde">
        <svg data-name="twitter" class="fill-current h-8 text-white"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
        </a>
      </div>
    </footer>

  </div>
</template>
<script>
import '../styles/tailwind.css'
import '../styles/global.styl'
import '../styles/markdown.styl'

// importing fonts
import 'typeface-inter'
import 'typeface-merienda-one'
import 'typeface-open-sans'
import 'typeface-fira-code'


export default {
  data: () => ({
    navBar: false
  }),
  mounted () {
    console.log(this.$page)
    this.initPageLoad()
  },
  watch: {
    $route (to, from) {
      setTimeout(() => {
        this.initPageLoad()
      }, 2000)
    }
  },
  methods: {
    initPageLoad () {
      let imgDefer = document.getElementsByTagName('img');
      for (let i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
          imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
      }
    }
  }
}
</script>
<style lang="stylus">

</style>