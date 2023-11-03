<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      name: 'name' | 'name2'
    },
    methods:{

    },
    created: () => {

    }
  }
</script>

<template>
  <img :src="`/assets/icon/${name}`"/>
</template>