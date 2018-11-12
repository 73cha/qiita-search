<template functional>
  <div class="Loader">
    <div class="Loader__body">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p class="Loader__text">投稿を読込中..</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style lang="postcss">
@import '../../../public/css/variables.css';

@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}

.Loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.Loader__body {
  padding: 1rem 2rem 2rem;
  background-color: #fff;
  border: solid 1px var(--colorBrand);
}

.Loader__text {
  font-size: 0.75rem;
}

.lds-facebook {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 45px;
}

.lds-facebook div {
  position: absolute;
  display: inline-block;
  width: 5px;
  background: var(--colorBrand);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 0;
  animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
  left: 10px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 20px;
  animation-delay: 0;
}
</style>
