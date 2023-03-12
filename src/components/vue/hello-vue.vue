<template>
  <div>
    <div class="link-card">
      <a href="https://cn.vuejs.org/" target="_blank">
        <h2>
          {{ title }}
          <span>&rarr;</span>
        </h2>
        <p>
          {{ desc }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Vue';
const desc = '渐进式JavaScript 框架, 易学易用，性能出色，适用场景丰富的 Web 前端框架。';
</script>

<style scoped></style>
