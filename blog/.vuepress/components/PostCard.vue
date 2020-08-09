<template>
  <router-link class="md:w-80 flex flex-col md:flex-none m-2 rounded-lg border border-indigo-300 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:shadow-2xl" :to="page.path">
    
    <img v-if="image" class="clip-img w-full h-48 object-cover" :src="image"/>

    <div class="flex flex-col h-full justify-between p-4">

      <h4 class="text-lg font-semibold text-indigo-800">
          {{ page.title }}
      </h4>
      
      <div v-if="tags" class="tags flex flex-wrap mt-2">
        <div class="tag inline-block text-sm my-1 py-1 px-4 rounded-md bg-indigo-100 text-indigo-700 font-medium mr-2" v-for="tag of tags" :key="tag">
          {{ tag }}
        </div>
      </div>
      
      <p class="text-sm mt-4 text-gray-600 leading-normal">
        {{ stripHTML(page.excerpt) }}
      </p>

      <div class="flex text-sm md:text-xs mt-6 justify-end">
        <div class="svg-btn text-gray-600 font-semibold">
          Read More
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>

    </div>

  </router-link>
</template>
<script>
export default {
  name: 'PostCard',
  props: ['page'],
  computed: {
    tags: function () {
      if (!this.page.frontmatter.tags)
        return false
      return this.page.frontmatter.tags.split(',')
    },
    image: function () {
      const placeholder = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
      return (this.page.frontmatter.image) ? (this.page.frontmatter.image) : placeholder
    }
  },
  methods: {
    stripHTML (str) {
      if (str == undefined || str.length == 0)
        return ''
      let tmp = str.replace(/(\<h1(.*)\<\/h1\>)/ig, '')
      tmp = tmp.replace(/(\<a class=\"header-anchor\"(.*)\<\/a\>)/ig, '')
      tmp = tmp.replace(/(\<\!\-\-(.*)\-\-\>)/ig, '')
      tmp = tmp.replace(/(<([^>]+)>)/ig, '')
      return tmp
    }
  }
}
</script>
<style lang="stylus" scoped>
.clip-img
  // clip-path polygon(0 0, 100% 0, 100% 90%, 0% 100%)
  clip-path polygon(0 0, 100% 0, 100% 90%, 0% 98%)
</style>