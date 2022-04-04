<template>
  <div>
    
      <div class="py-5">
          <div>
           <userstable/>
          </div>
      </div>
  </div>
</template>

<script>
import userstable from '../../../components/userstable.vue'
export default {
  components: { userstable },

    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      
    }),


layout: "Dashboard",
}
</script>

<style>

</style>
