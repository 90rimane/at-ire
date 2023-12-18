<template>
  <main>
    <div class="introduction">
      <h2>Welcome to @ire blog</h2>
      <p class="guideline1">
        Here you can ask, share and discuss all about our fashion!
      </p>
      <p class="guideline2">
        Please keep the discussions relevant and appropriate.
      </p>
    </div>

    <div class="outer-post-container">
      <div class="post-headline">
        <span>Posts</span>
        <button class="add-button" @click="toggleModal">Create Post</button>
      </div>

      <div v-if="this.$store.state?.allPosts" class="allpost-container">
        <div v-for="post in this.$store.state.allPosts" class="post-container">
          <router-link :to="'/post/' + post.id" class="outer-post">
            <div class="post-details">
              <div class="posted-by">Posted by: {{ post.user }}</div>
              <div class="posted-at">
                Posted at: {{ post.created.time }} | {{ post.created.date }}
              </div>
            </div>

            <div class="post-title">
              <span :class="'type ' + post.type">{{ post.type }}: </span>
              <span class="title">{{ post.title }}</span>
            </div>

            <span class="comment">Comments ({{ post.comments.length }})</span>
          </router-link>
        </div>
      </div>

      <div v-else>Loading posts...</div>
    </div>

    <AddPostModal @close="toggleModal()" v-if="showModal" />
  </main>
</template>

<script>
  import AddPostModal from '../components/AddPostModal.vue'
  export default {
    components: {
      AddPostModal
    },

    data() {
      return {
        showModal: false
      }
    },

    created() {
      if (!this.$store.state?.allPosts) {
        this.$store.dispatch('getPosts')
      }
    },

    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  main {
    min-height: 100vh;
    margin: 56px 0 0 0;
    padding: 16px;
    font-family: 'Roboto', sans-serif;

    .introduction {
      border: 2px rgb(227, 227, 227) solid;
      padding: 4px 8px;
      border-radius: 8px;
      background-color: rgb(255, 235, 225);

      .guideline1 {
        font-size: 18px;
      }

      .guideline2 {
        font-size: 16px;
        margin: 4px 0;
        color: gray;
      }
    }

    .outer-post-container {
      margin-top: 16px;
      .post-headline {
        padding: 0 8px 4px 8px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px rgb(196, 196, 196) solid;
        display: flex;
        align-items: center;

        span {
          font-size: 23px;
          font-weight: bold;
        }
      }
    }

    .allpost-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
      max-width: 900px;
      margin: auto;
    }
  }
  .outer-post {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .post-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .posted-by,
  .posted-at {
    font-size: 12px;
    color: gray;
  }

  .post-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .post-title .type {
    font-weight: bold;
    margin-right: 4px;
  }

  .comment {
    font-size: 12px;
    color: gray;
  }

  .post-content {
    margin-top: 16px;
  }

  .content-border {
    border: 2px solid #cccccc85;
    padding: 8px;
    margin-bottom: 16px;
    font-weight: bold;
    border-radius: 8px;
  }

  .comment-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .comment-title {
    font-size: 16px;
    font-weight: bold;
  }

  .comment-container {
    border: 1px solid #cccccc83;
    padding: 8px;
    border-radius: 6px;
  }

  .comment-content {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .post-container {
    border: 2px solid #cccccc7c;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px;
    padding: 12px 16px;
    border-radius: 13px;
  }

  .comment-user {
    font-weight: bold;
    padding: 5px;
  }

  .add-button {
    padding: 8px 10px;
    border-radius: 4px;
    border: 1px solid #ccccccc4;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;

    &:hover {
      background-color: rgb(216, 216, 216);
    }
  }

  .Share {
    color: rgb(216, 131, 3);
  }

  .Ask {
    color: rgb(81, 216, 3);
  }

  .Discuss {
    color: rgb(3, 138, 216);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
