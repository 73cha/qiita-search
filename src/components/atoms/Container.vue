<template functional>
  <div class="Container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
};
</script>

<style lang="postcss">
.Container {
  max-width: 60rem;
  margin-right: auto;
  margin-left: auto;
}
</style>
