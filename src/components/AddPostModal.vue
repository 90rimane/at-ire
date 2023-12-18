<template>
  <div class="modal-container">
    <button class="close-button" @click="$emit('close')">X</button>
    <h2>title</h2>
    <input required class="input-title" type="text" v-model="title" />

    <h2>post content</h2>
    <textarea required class="inout-content" type="text" v-model="content" />

    <h2>select type</h2>
    <select required class="select-type" name="type" v-model="type">
      <option value="Share">Share</option>
      <option value="Ask">Ask</option>
      <option value="Discuss">Discuss</option>
    </select>

    <button @click="addNewPost">Post</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        type: ''
      }
    },

    methods: {
      addNewPost() {
        this.$store.dispatch('setNewPost', {
          id: `${Math.random() * 100}`,
          user: 'Guest123',
          title: this.title,
          content: this.content,
          type: this.type,
          comments: [],
          created: { date: '22/12/2024', time: '12:30' }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-container {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
</style>
