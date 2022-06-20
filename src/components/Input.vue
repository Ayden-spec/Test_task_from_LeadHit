<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('onInput', $event.target.value.trim())"
  />
</template>

<script>
export default {
  props: ["value", "type", "placeholder"],
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
  background: transparent;
  padding: 15px;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
}
</style>
