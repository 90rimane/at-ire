<template>
    <transition 
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave">
      <ul v-show="list.open" class="lista-av-items">
        <li class="sub-items" v-for="(item, index) in list.sublist" :key="index">
          {{ item }}
        </li>
      </ul>
    </transition>
  </template>
  
  <script>
    export default {
      props: {
        list : {
          type: Object,
          default: null
        }
      },
      methods: {
        enter(el) {
          el.style.height = 'auto';
          const height = getComputedStyle(el).height;
          el.style.height = 0;
          getComputedStyle(el);
          setTimeout(() => {
            el.style.height = height;
          });        
        },
        afterEnter(el) {
          el.style.height = 'auto';
        },
        leave(el) {
          el.style.height = getComputedStyle(el).height;
          getComputedStyle(el);
          setTimeout(() => {
            el.style.height = 0;
          });
        }
      }
    };
  </script>
  
  <style lang="scss" scoped>
    .lista-av-items {
      list-style: none;
      .sub-items {
        padding: 10px;
        text-indent: 20px;
        color: #282828;
        &:hover {
          color: #333;
        }
      }
    }
    .expand-enter-active, .expand-leave-active {
      transition: height .3s ease-in-out;
      overflow: hidden;
    }
  </style>