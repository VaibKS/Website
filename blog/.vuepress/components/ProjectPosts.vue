<template>
  <div class="project-posts">
    <h5>Recent Projects</h5>
    <div class="flex md:flex-col flex-wrap mt-6">
      
      <div class="italic text-center py-12 text-gray-400" v-if="pages.length == 0">
        No projects yet..
      </div>

      <PostCard v-for="page in pages" :page="page" :key="page.title"/>
    
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectPosts',
  data: () => ({
    pages: []
  }),
  created () {
    for (let page of this.$site.pages.reverse()) {
      if (page.frontmatter.category == 'project' && page.frontmatter.publish) {
        this.pages.push(page)
      }
    }
  }
}
</script>