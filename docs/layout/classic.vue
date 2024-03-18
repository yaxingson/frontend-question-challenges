<script setup>
import { useData } from 'vitepress'

const { page } = useData()

</script>

<template>

  <div v-if="page.isNotFound">
    
  </div>
  <div v-else>
    <Content />

  </div>

</template>