<template>
  <div>
    <global-header />

    <p v-if="bookmarks.length === 0" :style="{ 'text-align': 'center', 'margin-top': '1rem'}">まだブックマークはありません。</p>

    <posts :source="bookmarks">
      <template slot-scope="{ post }">
        <bookmark-icon :class="{'--trash': true}" @click="deleteBookmark(post)">
          <i class="fas fa-trash"></i>
        </bookmark-icon>
      </template>
    </posts>
  </div>
</template>

<script>
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import Posts from '@/components/molecules/Posts.vue';
import BookmarkIcon from '@/components/atoms/BookmarkIcon.vue';
import BookmarkManager from '@/modules/bookmark-manager.js';

export default {
  name: 'Bookmark',
  components: {
    GlobalHeader,
    Posts,
    BookmarkIcon
  },
  data() {
    return {
      bookmarks: []
    };
  },
  async mounted() {
    const bookmarks = await new Promise(resolve => {
      setTimeout(() => {
        resolve(BookmarkManager.get());
      }, 0);
    });

    if (bookmarks.length > 0) {
      this.bookmarks = bookmarks;
    }
  },
  methods: {
    deleteBookmark(post) {
      BookmarkManager.remove(post);

      this.bookmarks = BookmarkManager.get();
    }
  }
};
</script>
