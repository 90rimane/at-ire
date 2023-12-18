<template>
  <main class="post-page">
    <div v-if="postContent" class="post-content">
      <div class="content-border">
        <h1 class="title">{{ postContent.title }}</h1>
        <p class="content">{{ postContent.content }}</p>
      </div>

      <div class="comment-section">
        <div class="comment-title">
          Comments ({{ postContent.comments.length }})
        </div>

        <div class="add-comment-container">
          <input type="text" v-model="inputValue" />
          <button @click="addComment">Add Comment</button>
        </div>

        <div
          v-for="comment in postContent.comments"
          :key="comment.id"
          class="comment-container"
        >
          <div class="comment-user">{{ comment.user }}</div>
          <div class="comment-content">{{ comment.content }}</div>
        </div>
      </div>
    </div>

    <div v-else>Loading post...</div>
  </main>
</template>

<script>
  export default {
    created() {
      if (!this.$store.state.allPosts) {
        this.$store.dispatch('getPosts')
      }
    },

    computed: {
      postContent() {
        if (this.$store.state.allPosts) {
          return this.$store.state.allPosts.find(
            (post) => post.id === this.$route.params.id
          )
        }

        return null
      }
    },

    data() {
      return {
        inputValue: ''
      }
    },

    methods: {
      addComment() {
        if (this.inputValue) {
          this.$store.dispatch('setNewComment', {
            comment: {
              id: Math.random() * 100,
              user: 'guest123',
              content: this.inputValue
            },
            id: this.$route.params.id
          })

          this.inputValue = ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .post-page {
    margin: 100px 0 50px 0;
    padding: 0 80px 0 80px;
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
    padding: 16px;
    margin-bottom: 16px;
    font-weight: bold;
    border-radius: 8px;

    .title {
      font-size: 26px;
      color: #181818da;
    }

    .content {
      color: #474747da;
    }
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

  .add-comment-container {
    display: flex;

    input {
      display: block;
      width: 100%;
      padding: 0 16px;
      font-size: 15px;
    }
  }
</style>
