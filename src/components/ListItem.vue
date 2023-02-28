<template>
<<<<<<< HEAD
  <transition
    class="expand"
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
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
      list: {
        type: Object,
        default: null
      }
    },
    methods: {
      enter(el) {
        el.style.height = 'auto'
        const height = getComputedStyle(el).height
        el.style.height = 0
        getComputedStyle(el)
        setTimeout(() => {
          el.style.height = height
        })
      },
      afterEnter(el) {
        el.style.height = 'auto'
      },
      leave(el) {
        el.style.height = getComputedStyle(el).height
        getComputedStyle(el)
        setTimeout(() => {
          el.style.height = 0
        })
      }
    }
  }
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
  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.3s ease-in-out;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
=======
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
>>>>>>> d7a27e07d6a2af6357cdc8d78d9744537bb3ad08
    .lista-av-items {
      height: auto;
      overflow: visible;
      padding: 0;
      margin: 0;
    }
    .sub-items {
      text-indent: 0;
      padding: 0;
      margin: 0;
    }
<<<<<<< HEAD
  }
</style>
=======
  </style>
>>>>>>> d7a27e07d6a2af6357cdc8d78d9744537bb3ad08
