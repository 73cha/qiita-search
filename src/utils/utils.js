const Utils = (() => {
  const infinityLoad = (target, callback) => {
    if (!target) {
      return;
    }

    // optionにrootに指定がなければ、ブラウザのviewport
    const options = {
      threshold: 1 // 対象が完全にrootに入った時
    };

    // 引数のentriesは監視対象にした全ての対象
    // 引数のobjectはIntersectionObserver
    const observer = new IntersectionObserver((entries, object) => {
      entries.forEach(entry => {
        // 交差していない
        if (!entry.isIntersecting) {
          return;
        }

        //targetsで指定した現在交差している.Posts__item:last-child
        const cont = entry.target;

        // 監視を解除
        object.unobserve(cont);

        callback();
      });
    }, options);

    observer.observe(target);
  };

  const toggleFixedHtml = () =>
    document.querySelector('html').classList.toggle('--fixed');

  return {
    infinityLoad,
    toggleFixedHtml
  };
})();

export default Utils;
