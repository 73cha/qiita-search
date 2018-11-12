import vm from '../main';

const BookmarkManager = (() => {
  const _set = value => vm.$localStorage.set('posts', value);
  const get = () => vm.$localStorage.get('posts');
  const add = post => {
    const bookmarks = get();

    bookmarks.push(post);

    // see: https://qiita.com/hrfmmymt/items/350dd409bd82106e752a
    const newBookmarks = bookmarks.filter((item1, index, self) => {
      return self.findIndex(item2 => item1.id === item2.id) === index;
    });

    _set(newBookmarks);
  };
  const remove = post => {
    const bookmarks = get();
    const index = bookmarks.findIndex(bookmark => bookmark.id === post.id);

    bookmarks.splice(index, 1);

    _set(bookmarks);
  };

  return {
    get,
    add,
    remove
  };
})();

export default BookmarkManager;
