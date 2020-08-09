<template>
  <div class="project-posts">
    <h5 class="font-semibold mt-8">Recent Blog Posts</h5>
    <div class="flex md:flex-col flex-wrap mt-6">
      
      <div class="italic text-center py-12 text-gray-400" v-if="pages.length == 0">
        No projects yet..
      </div>

      <div class="w-full flex flex-col md:flex-row flex-wrap md:items-stretch">
        <PostCard v-for="page in pages" :page="page" :key="page.title"/>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPosts',
  data: () => ({
    pages: []
  }),
  created () {
    for (let page of this.$site.pages.reverse()) {
      if (page.frontmatter.type == 'article' && !page.frontmatter.hide) {
        this.pages.push(page)
      }
    }
  }
}
</script>