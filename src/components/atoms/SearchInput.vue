<template functional>
  <input class="SearchInput" placeholder="キーワードを入力" type="search" autofocus>
</template>

<script>
export default {
  name: 'SearchInput'
};
</script>

<style lang="postcss">
@import '../../../public/css/variables.css';

.SearchInput {
  width: 30rem;
  height: 4.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-top: solid 1px #eee;
  border-right: none;
  border-bottom: solid 1px #eee;
  border-left: solid 1px #eee;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  outline: none;
  appearance: none;

  &:focus {
    border-top-color: var(--colorBrand);
    border-bottom-color: var(--colorBrand);
    border-left-color: var(--colorBrand);
  }

  &::placeholder {
    color: var(--colorTextSub);
    font-size: 1rem;
  }
}
</style>
