<template>
  <label class="toggle-radio-button">
    <input
      type="radio"
      :value="checked"
      :checked="value === model"
      class="radio"
      @change="$emit('change', value)"
    />
    <span class="button">{{ label }}</span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-radio-button {
  > .radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    visibility: hidden;
  }
  > .button {
    color: $main-color2;
    border-color: $main-color2;
  }
  :checked + .button {
    background-color: $main-color1;
    color: #fff;
  }
}
</style>
