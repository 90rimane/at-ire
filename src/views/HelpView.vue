<script setup>
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted, nextTick, defineExpose } from 'vue';


const APP_ID = '452f99a0814b44d29d9a446ec20356fc';
// const APP_ID = '766b26b8564f4d22a1c6cc908547fd8f';
const CHANNEL = 'atire'; //uniq key for each user
let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();
let text = ref('');
let messagesRef = ref(null);
let messages = ref([]);
let channel;

defineExpose({ messagesRef });

const appendMessage = async (message) => {
  messages.value.push(message);
  await nextTick();
  messagesRef.value.scrollTop =
    messagesRef.value.scrollHeight;
};

onMounted(async () => {
  await client.login({ uid, token: null });
  channel = await client.createChannel(CHANNEL);
  await channel.join();
  channel.on('ChannelMessage', (message, peerId) => {
    appendMessage({
      text: message.text,
      uid: peerId,
    });
  });
});

function sendMessage() {
  if (text.value === '') return;
  channel.sendMessage({ text: text.value, type: 'text' });
  appendMessage({
    text: text.value,
    uid,
  });
  text.value = '';
}
</script>

<template>
  <main>
    <h1>Help Center</h1>
    <p><span style="font-weight: bold;"> For developers: </span>
      To test this chatroom, take a copy of the link
      and paste it in another browser while project is runing (npm run dev).<br /> All users can chat each other anywhere when the project is runing.</p>
    <div class="panel">
      <div class="panel-title">
      <span class="material-symbols-outlined support-logo">forum</span>
        <h2>@ire forum</h2>
      </div>
      <p>Here you can chat to other users about products</p>
      <div class="messages" ref="messagesRef">
        <div class="inner">
          <div
            :key="index"
            v-for="(message, index) in messages"
            class="message"
          >
            <div v-if="message.uid === uid" class="user-self">
              You:&nbsp;
            </div>
            <div v-else class="user-them">Others:&nbsp;</div>
            <div class="text-sent">{{ message.text }}</div>
          </div>
        </div>
      </div>

      <form @submit.prevent="sendMessage">
        <input v-model="text" />
        <button>
          <span class="material-symbols-outlined send-msg">send</span>
        </button>
      </form>
    </div>
  </main>
  </template>

  <style lang="scss" scoped>

  main {
    padding: 2em;
    height: 100%;
    text-align: center;
    background: linear-gradient(
      90deg,
      var(--light) 0%,
      var(--lightB) 53%,
      var(--lightB-darker) 100%
    );
    h1{
      text-align: left;
      margin: 1em 5em 0 5em;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin: 5em auto;
    max-width: 25em;
    height: 30em;
    background: var(--lightB-darker);
    box-shadow: 0 5px 20px 0 var(--darker);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    .panel-title{
      display: flex;
      flex-direction: row;
      align-self: center;
      padding-bottom: 5px;
    }
    .support-logo{
      font-size: 2em;
    }
  }
  .messages {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: var(--light);
    margin-top: 5px;
  }
  .inner {
    padding: 10px;
  }
  .message {
    font-size: 18px;
    text-align: left;
    display: flex;
    margin-bottom: 6px;
  }
  .user-self {
    color: green;
  }
  .user-them {
    color: red;
  }
  form {
    position: relative;
    display: flex;
    align-content: center;
  }
  input {
    width: 100%;
    border: none;
    height: 40px;
    padding: .1em .5em;
    border-top: 1px solid #999;
    border-radius: 0px;
    outline: none;
    font-size: 18px;
    background-color: var(--lightB);
  }
  button {
    border: none;
    outline: none;
    position: absolute;
    right: 5px;
    top: 4px;
  }
  .send-msg{
    background-color: var(--orange);
    font-size: 2.3em;
    padding-left: 4px;
    padding-top: 2px;
    width: 35px;
    height: 35px;
    border-radius: 30px;
  }
  @media (max-width: 600px) {
    .panel {
    padding: 1em;
    margin: 5em auto;
    max-width: 20em;
    height: 30em;
    background: var(--lightB-darker);
    box-shadow: 0 5px 20px 0 var(--darker);
    backdrop-filter: blur(4px);
    border-radius: 10px;
  }
  @media (max-width: 470px){
    .panel{
      margin: 5em -2em 7em 2em;
    }
    .message {
    font-size: 14px;
    }
    input{
      font-size: 14px;
    }
  }
}
  </style>
