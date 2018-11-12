const FetchManager = (() => {
  const token = '0b4055254e75e833b2046221082391c47eb688a6';
  const fetch = (pageNumber, searchKeyword) => {
    const url = `https://qiita.com/api/v2/items?page=${pageNumber}&per_page=30&query=body:${searchKeyword}`;

    try {
      return window.fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    fetch
  };
})();

export default FetchManager;
