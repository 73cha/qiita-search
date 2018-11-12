<template>
  <div @search="handleSearch">
    <global-header />

    <search-form />

    <container>
      <p v-if="this.posts && this.posts.length === 0">検索結果はありませんでした。</p>

      <div v-show="this.loading">
        <loader />
      </div>
    </container>

    <container>
      <posts :source="posts">
        <template slot-scope="{ post }">
          <bookmark-icon :class="turnOnBookmark(post)" @click="toggleBookmark" :data-post="setPostProps(post)">
            <i class="fas fa-bookmark"></i>
          </bookmark-icon>
        </template>
      </posts>
    </container>
  </div>
</template>

<script>
import Loader from '@/components/molecules/Loader.vue';
import Logo from '@/components/atoms/Logo.vue';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import SearchForm from '@/components/molecules/SearchForm.vue';
import Posts from '@/components/molecules/Posts.vue';
import Container from '@/components/atoms/Container.vue';
import BookmarkIcon from '@/components/atoms/BookmarkIcon.vue';
import Utils from '@/utils/utils';
import BookmarkManager from '@/modules/bookmark-manager';
import FetchManager from '@/modules/fetch-manager';

export default {
  components: {
    Logo,
    GlobalHeader,
    Posts,
    SearchForm,
    Container,
    BookmarkIcon,
    Loader
  },
  data() {
    return {
      loading: false,
      posts: null,
      currentPage: 1,
      searchKeyword: 'vue.js'
    };
  },
  async mounted() {
    this.loading = true;

    const result = await FetchManager.fetch(
      this.currentPage,
      this.searchKeyword
    );

    const articles = await result.json();

    this.posts = articles;
    this.loading = false;
  },
  watch: {
    async searchKeyword() {
      this.currentPage = 1;
      this.loading = true;

      Utils.toggleFixedHtml();

      const result = await FetchManager.fetch(
        this.currentPage,
        this.searchKeyword
      );

      const articles = await result.json();

      this.posts = articles;
      this.loading = false;

      Utils.toggleFixedHtml();
    },
    posts() {
      this.$nextTick(() => {
        const target = document.querySelector('.Posts__item:last-child');

        Utils.infinityLoad(target, async () => {
          this.currentPage += 1;
          this.loading = true;

          Utils.toggleFixedHtml();

          const result = await FetchManager.fetch(
            this.currentPage,
            this.searchKeyword
          );

          const articles = await result.json();

          // 返ってきたjsonのlengthが0以上の時にthis.postsを入れ替える
          // そうしないと、最後のページに到達した時、空の配列が戻ってきて、
          // 既存のthis.postsとマージされて再描画が走り、
          // this.postsをwatchしているため、nextChickが実行されてIntersectionObserverが
          // 実行され、再描画で新しいDOMが出来ているので、last-childに交差するとfetch
          // というループを防ぐ
          if (articles.length > 0) {
            this.posts = [...this.posts, ...articles];
          }

          this.loading = false;

          Utils.toggleFixedHtml();
        });
      });
    }
  },
  methods: {
    turnOnBookmark(post) {
      const bookmarks = BookmarkManager.get();

      if (bookmarks.length === 0) {
        return;
      }

      const item = bookmarks.find(item => item.id === post.id);

      if (item) {
        return {
          '--bookmarked': true
        };
      }
    },
    setPostProps(post) {
      return JSON.stringify({
        id: post.id,
        title: post.title,
        url: post.url,
        user: {
          id: post.user.id,
          profile_image_url: post.user.profile_image_url
        },
        created_at: post.created_at,
        likes_count: post.likes_count,
        comments_count: post.comments_count
      });
    },
    toggleBookmark(e) {
      const target = e.currentTarget;
      const post = JSON.parse(target.dataset.post);

      if (!target.classList.contains('--bookmarked')) {
        target.classList.add('--bookmarked');
        BookmarkManager.add(post);
      } else {
        target.classList.remove('--bookmarked');
        BookmarkManager.remove(post);
      }
    },
    handleSearch(e) {
      const inputKeyword = e.target.value;
      if (inputKeyword.length === 0) {
        return;
      }

      this.searchKeyword = inputKeyword;
    }
  }
};
</script>
