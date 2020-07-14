<template>
  <div class="project-posts">
    <h5>Recent Blog Posts</h5>
    <div class="flex md:flex-col flex-wrap mt-4">

      <div class="italic text-center py-12 text-gray-400" v-if="pages.length == 0">
        No blog posts yet..
      </div>

      <PostCard v-for="page in pages" :page="page" :key="page.title"/>
    
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
      if (page.frontmatter.category == 'article' && page.frontmatter.publish) {
        this.pages.push(page)
      }
    }
  }
}
</script>