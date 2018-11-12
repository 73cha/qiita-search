<template functional>
  <div class="Posts">
    <components :is="props.components.Container">
      <article class="Posts__item" v-for="(post, id) in props.source" :key="id">
        <slot :post="post" />

        <a class="Posts__itemLink" :href="post.url">
          <div class="Posts__itemUser">
            <img :src="post.user.profile_image_url" alt="">
            <p class="Posts__itemUserName">{{post.user.id}}</p>
          </div>

          <div class="Posts__itemBody">
            <h2 class="Posts__itemTitle">{{post.title}}</h2>
            <p class="Posts__itemDate">
              <time>{{ post.created_at | moment('YYYY-MM-DD') }}</time>
            </p>

            <div class="Posts__itemMeta">
              <i class="fas fa-heart"> {{ post.likes_count || 0 }}</i>
              <i class="fas fa-comment-alt"> {{ post.comments_count || 0 }}</i>
            </div>
          </div>
        </a>
      </article>
    </components>
  </div>
</template>

<script>
import Container from '@/components/atoms/Container.vue';

export default {
  name: 'Posts',
  props: {
    source: {
      type: Array,
      default() {
        return [];
      }
    },
    components: {
      default() {
        return {
          Container
        };
      }
    }
  }
};
</script>

<style lang="postcss">
@import '../../../public/css/variables.css';

.Posts {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.Posts__item {
  position: relative;
  background-color: #fff;
  border: solid 1px #eee;

  + .Posts__item {
    margin-top: 1.5rem;
  }
}

.Posts__itemLink {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;

  &:hover .Posts__itemTitle {
    color: var(--colorBrand);
  }
}

.Posts__itemTitle {
  max-width: 35em;
  font-size: 1.25rem;

  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}

.Posts__itemUser {
  width: 6rem;
  padding-right: 1.5rem;
  border-right: 1px solid #eee;

  > img {
    width: 100%;
    height: auto;
  }
}

.Posts__itemBody {
  flex-grow: 1;
  padding-left: 1.5rem;
}

.Posts__itemDate {
  color: var(--colorTextSub);
  font-size: 0.875rem;
}

.Posts__itemUserName {
  margin-top: 0.25rem;
  color: var(--colorTextSub);
  font-size: 0.75rem;
  text-align: center;
}

.Posts__itemMeta {
  margin-top: 1rem;
  padding-top: 0.5rem;
  color: var(--colorTextSub);
  border-top: solid 1px #eee;

  > i + i {
    margin-left: 0.5rem;
  }
}
</style>
