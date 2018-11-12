<template functional>
  <button class="SearchButton">
    <span class="SearchButton__icon fa fa-search"></span>
  </button>
</template>

<script>
export default {
  name: 'SearchButton'
};
</script>

<style lang="postcss">
@import '../../../public/css/variables.css';

.SearchButton {
  width: 4.5rem;
  height: 4.5rem;
  color: #fff;
  background-color: var(--colorBrand);
  border: none;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  outline: none;
  appearance: none;
}

.SearchButton__icon {
  font-size: 2rem;
}
</style>
