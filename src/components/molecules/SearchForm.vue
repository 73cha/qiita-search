<template functional>
  <form class="SearchForm" @submit.prevent="$options.methods.emit('search')">
    <search-input :is="props.components.SearchInput" />
    <search-input :is="props.components.SearchButton" />
  </form>
</template>

<script>
import SearchInput from '@/components/atoms/SearchInput.vue';
import SearchButton from '@/components/atoms/SearchButton.vue';

export default {
  name: 'SearchForm',
  methods: {
    emit(eventName) {
      /* eslint-disable-next-line */
      console.log(eventName);
    }
  },
  props: {
    components: {
      default() {
        return {
          SearchInput,
          SearchButton
        };
      }
    }
  }
};
</script>

<style lang="postcss">
.SearchForm {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
</style>
