<template>
  <div class="project-posts">
    <h5 class="font-semibold mt-8">Recent Projects</h5>
    <div class="flex md:flex-col flex-wrap mt-6">
      
      <div class="italic text-center py-12 text-gray-400" v-if="pages.length == 0">
        No projects yet..
      </div>

      <div class="w-full flex flex-col justify-between md:flex-row flex-wrap md:flex-start">
        <PostCard v-for="page in pages" :page="page" :key="page.title"/>
      </div>
    
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
      console.log(page.frontmatter.hide)
      if (page.frontmatter.type == 'project' && !page.frontmatter.hide) {
        this.pages.push(page)
      }
    }
  }
}
</script>