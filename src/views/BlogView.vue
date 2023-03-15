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
        <h2>Posts</h2>
      </div>
      <div class="allpost-container">
        <div v-for="post in allPosts" :key="post" class="post-container">
          <div class="outer-post">
            <div class="post-details">
              <div class="posted-by">Posted by: {{ post.user }}</div>
              <div class="posted-at">
                Posted at: {{ post.created.time }} | {{ post.created.date }}
              </div>
            </div>
            <div class="post-title">
              <span class="type">{{ post.type }}: </span>
              <span class="title">{{ post.title }}</span>
            </div>
            <div class="post-comment">
              <span class="comment">Comments ({{ post.comments.length }})</span>
            </div>
          </div>

          <div class="post-content">
            <div class="content-border">{{ post.content }}</div>
            <div class="comment-section">
              <div class="comment-title">Comments</div>
              <div
                v-for="comment in post.comments"
                :key="comment.id"
                class="comment-container"
              >
                <div class="comment-content">{{ comment.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    created() {
      fetch('blogapi.json')
        .then((response) => response.json())
        .then((result) => {
          setTimeout(() => {
            this.allPosts = result.data
          }, 100)
        })
    },
    data() {
      return {
        allPosts: null
      }
    },
    methods: {}
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
    gap: 8px;
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

  .post-comment .comment {
    font-size: 12px;
    color: gray;
  }

  .post-content {
    margin-top: 16px;
  }

  .content-border {
    border: 3px solid #ccc;
    padding: 8px;
    margin-bottom: 16px;
    font-weight: bold;
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
    border: 1px solid #ccc;
    padding: 8px;
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
    border: 3px solid #ccc;
    margin-bottom: 16px;
    padding: 16px;
  }
</style>
