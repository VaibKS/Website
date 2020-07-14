<template>
  <div class="w-full bg-teal-50 p-4 mb-4 text-white rounded-lg shadow-sm">
    <router-link class="text-white" :to="page.path">
      <div>
        <h4 class="m-0 font-semibold text-teal-700">
            {{ page.title }}
        </h4>
        <p class="text-gray-600 leading-none">
          {{ stripHTML(page.excerpt) }}
        </p>
        <div class="flex justify-end">
          <div class="svg-btn text-gray-600 font-semibold">
            Read More
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'PostCard',
  props: ['page'],
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