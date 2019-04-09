<template>
    <div class="range-input">
        <label for="customRange1">{{ field }}</label>
        <input type="range" min="0" max="10"
               value="0" step="0.1"
               v-model="val"
               class="custom-range" id="customRange1">
        <span class="value">{{ val }}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0
    }
  },
  props: {
    field: String,
  }
}
</script>

<style scoped>
    .range-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        width: 85%;
    }
    .custom-range {
        padding: 0 1rem;
        width: 80%;
    }
    .value { width: 40px; }
</style>