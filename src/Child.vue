<template>
  <div>我是子组件</div>
  <pre>父组件给我的数据：{{ modelValue }}</pre>
  <button @click="handler">点我改变接收到的数据</button>
</template>

<script setup>
const props = defineProps(['modelValue'])
const $emits = defineEmits(['update:modelValue'])

const handler = () => {
  $emits('update:modelValue', props.modelValue + 1000)
}
</script>