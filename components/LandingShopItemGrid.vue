<template>
  <div class="shadow shadow-md">
    <div class="aspect-w-16 aspect-h-9">
      <img :src="item.image" class="object-cover object-center" alt="Product image">
    </div>
    <div class="p-4">
      <div class="flex mb-4">
        <h2 class="text-lg mr-4">{{item.name}}</h2>
        <span class="text-lg">£&nbsp;{{item.price}}</span>
      </div>
      <button class="block w-full py-4 text-white rounded-lg bg-black hover:bg-green-400"
              @click="addItemToBasket(item)">Add to basket</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
  name: "LandingShopItemGrid",
  props: {
    item : {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleItemInBasket() {
      //Two way switch for adding item to basket
      if(!this.isItemExistsInBasket) {
        this.addItemToBasket()
      }
      else {
        this.removeItemFromBasket()
      }
    },
    addItemToBasket() {
      this.$store.commit('basket/addToBasket', this.item)
      this.$emit('updatedBasket')
    },
    removeItemFromBasket() {
      this.$store.commit('basket/removeFromBasket', this.item.slug)
      this.$emit('updatedBasket')
    }
  }
}
</script>

<style scoped>

</style>
