<template functional>
  <nav>
    <ul class="GlobalNav">
      <li class="GlobalNav__item">
        <router-link class="GlobalNav__itemLink" to="/">
          ホーム
        </router-link>
      </li>

      <li class="GlobalNav__item">
        <router-link class="GlobalNav__itemLink" to="/bookmark">
          ブックマーク
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GlobalNav'
};
</script>

<style lang="postcss">
.GlobalNav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.GlobalNav__item {
  + .GlobalNav__item {
    margin-left: 1rem;
    padding-left: 1rem;
    line-height: 1;
    border-left: 1px solid #fff;
  }
}

.GlobalNav__itemLink {
  padding-bottom: 0.25rem;
  color: #fff;
  text-decoration: none;
}

.router-link-exact-active {
  border-bottom: solid 1px #fff;
}
</style>
