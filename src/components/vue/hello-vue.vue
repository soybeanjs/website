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
    <div>
      <button @click="setCount(10)">点击</button>
      <span>{{ $count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { count } from '../../store';

const $count = useStore(count);

function setCount(num: number) {
  count.set(num);
}

const title = 'Vue';
const desc = '渐进式JavaScript 框架, 易学易用，性能出色，适用场景丰富的 Web 前端框架。';
</script>

<style scoped></style>
