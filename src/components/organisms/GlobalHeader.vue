<template functional>
  <div>
    <header class="GlobalHeader">
      <div class="GlobalHeader__wrap">
        <a href="https://qiita.com" class="GlobalHeader__link">
          <component :is="props.components.Logo" />
        </a>

        <components :is="props.components.GlobalNav" />
      </div>
    </header>

  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo.vue';
import GlobalNav from '@/components/molecules/GlobalNav.vue';

export default {
  name: 'GlobalHeader',
  props: {
    components: {
      default() {
        return {
          Logo,
          GlobalNav
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.GlobalHeader {
  padding-top: 1.25rem;
  background-color: #55c500;
  padding-block-end: 1.25rem;
}

.GlobalHeader__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95%;
  margin-right: auto;
  margin-left: auto;
}
</style>
