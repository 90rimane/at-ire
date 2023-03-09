<template>
  <div>
    <h2>Comments</h2>
    <form @submit.prevent="addComment">
      <label for="comment">Add your comment:</label>
      <textarea id="comment" v-model="newComment" rows="4" />
      <div v-if="!this.$store.state.activeUser">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="newCommentUsername" />
      </div>
      <div v-else>
        <h1>Writing as {{ this.$store.state.activeUser.username }}</h1>
      </div>
      <button type="submit">Post</button>
    </form>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div>
          <span style="font-weight: bold">{{ comment.username }}</span> -
          <span>{{ comment.timestamp }}</span>
          <button @click.prevent="deleteComment(comment.id)">Delete</button>
        </div>
        <p>{{ comment.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: [
          {
            id: '1',
            text: 'Hello i really like this one',
            username: 'Björn Zamora',
            timestamp: new Date().toLocaleString()
          },
          {
            id: '2',
            text: 'I love the color and the quality',
            username: 'Johan Bjärsson',
            timestamp: new Date().toLocaleString()
          }
        ],
        newComment: '',
        newCommentUsername: '',
        id: 0
      }
    },
    methods: {
      addComment() {
        if (this.$store.state.activeUser) {
          this.newCommentUsername = this.$store.state.activeUser.username
        }
        if (this.newComment !== '' && this.newCommentUsername !== '') {
          this.comments.push({
            id: this.id++,
            text: this.newComment,
            username: this.newCommentUsername,
            timestamp: new Date().toLocaleString()
          })
          this.newComment = ''
          this.newCommentUsername = ''
        }
      },
      deleteComment(id) {
        this.comments = this.comments.filter((comment) => comment.id !== id)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  input[type='text'] {
    padding: 5px;
    margin-bottom: 10px;
  }
  button {
    background-color: black;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
  }
  button:hover {
    background-color: #f39256;
  }
</style>
