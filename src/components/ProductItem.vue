<script>
  export default {
    props: {
      product: {
        type: Object,
        default: null
      }
    },
    methods: {
      setFavInAcc(currentItem) {
        const parsed = JSON.parse(sessionStorage.getItem('activeUser'))
        // findIndex returns -1 if it can't find matching ID
        const indexOfId = parsed.favorites.findIndex(
          (item) => item.id == currentItem.id
        )

        if (indexOfId != -1) {
          parsed.favorites.splice(indexOfId, 1)
        } else {
          parsed.favorites.push(currentItem)
        }

        sessionStorage.setItem('activeUser', JSON.stringify(parsed))
        this.$store.dispatch('getLogged')
      }
    }
  }
</script>

<template>
  <div class="item-container">
    <h3>{{ product.name }}</h3>
    <span>{{ product.price }}</span>
  </div>
  <button
    v-if="$store.state.activeUser != null"
    @click="setFavInAcc(product)"
    type="button"
  >
    *heart icon emoji button*
  </button>
</template>

<style lang="scss" scoped></style>
