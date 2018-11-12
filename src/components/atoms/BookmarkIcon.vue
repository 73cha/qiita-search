<template functional>
  <div class="BookmarkIcon" :class="data.class" v-bind="data.attrs" v-on="listeners">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BookmakrIcon'
};
</script>

<style lang="postcss">
@import '../../../public/css/variables.css';

.BookmarkIcon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--colorTextSub);
  font-size: 1.25rem;
  cursor: pointer;

  &.--bookmarked,
  &:hover .fas {
    color: var(--colorBrand);
  }

  &.--trash {
    &:hover .fas {
      color: #e74c3c;
    }
  }
}
</style>
