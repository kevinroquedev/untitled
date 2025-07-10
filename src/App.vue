<script setup lang="ts">
  import {ref} from 'vue';

  const date = ref(new Date());
  const text = ref('');
</script>

<template>
  <smd-two-column-layout>
    <template #sidebar>
      <smd-one-column-layout>
        <smd-button tooltip-text="Hello" class="primary meteorite page uppercase">Button</smd-button>
        <smd-button tooltip-text="Hello" class="secondary meteorite page uppercase">Button</smd-button>
        <smd-button tooltip-text="Hello" class="tertiary meteorite page uppercase">Button</smd-button>
        <smd-card class="bordered create-new">
          <span class="smd-icon-plus-with-circle"></span>
          <p class="body-5">Create New Patient Record</p>
        </smd-card>
      </smd-one-column-layout>
    </template>
    <template #content>
      <smd-one-column-layout>
        <smd-input v-model="text" placeholder="Placeholder"/>
        <br>
        <smd-textarea v-model="text" placeholder="Placeholder"/>
        <br>
        <smd-search v-model="text" placeholder="Search"/>
        <smd-card class="bordered create-new">
          <span class="smd-icon-plus-with-circle"></span>
          <p class="body-5">Create New Patient Record</p>
        </smd-card>
      </smd-one-column-layout>
    </template>
  </smd-two-column-layout>


  <!--  <RouterView />-->
</template>

<style lang="scss">
  @import 'node_modules/smd-scaffold/src/assets/scss/utils';

  .smd-card {
    width: 100%;
    @extend %layout--flex-row-center-x;

    > *:first-child {
      margin-right: 8px;
    }
  }
</style>