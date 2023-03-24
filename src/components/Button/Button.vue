<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup>
import { reactive, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
})

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))

const onClick = () => {
  console.log('click');
}

</script>
<style lang="less">
@import url('./button.less');
</style>