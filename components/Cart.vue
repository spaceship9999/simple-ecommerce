<template>
  <div class="shadow shadow-md">
    <div class="grid grid-cols-3 items-center p-4" v-for="item in basketItems">
      <div class="col-end-2">
        <div class="aspect-w-1 aspect-h-1">
          <img :src="item.image" class="object-cover object-center" alt="">
        </div>
      </div>
      <div class="col-start-2 col-end-4 p-4">
        <a :to="'/' + item.slug">{{item.name}} - £{{item.price}}</a>
        <div class="xl:flex my-4">
          <button class="block bg-red-500 p-4 text-white rounded-lg" @click="removeItemFromBasket(item.slug)">Remove from basket</button>
          <div class="ml-auto flex my-4 xl:my-0">
            <button class="p-4 text-xl bg-black text-white rounded-l-lg" @click="minusItem(item.slug)">-</button>
            <input type="number" class="max-w-[70px]  "
                   :value="item.quantity"
                    @change="setQuantity($event, item.slug)">
            <button class="p-4 text-xl bg-black text-white rounded-r-lg" @click="addItem(item.slug)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 flex items-center justify-center text-2xl" v-if="!basketItems.length">
      Your basket is empty
    </div>
    <div class="flex items-center p-4">
      <div class="font-bold text-2xl">Total:</div>
      <div class="font-bold text-2xl ml-auto">£ {{total}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cart",

  data(){
    return {
      quantity: 0,
    }
  },
  computed: {
    ...mapState('basket', {
      basketItems: state => state.basketItems,
    }),
    total() {
      let amount = 0.0
      this.basketItems.forEach((e) => {
        amount += e.price * e.quantity
      })
      return parseFloat(amount).toFixed(2)
    }
  },
  methods: {
    removeItemFromBasket(slug) {
      this.$store.commit('basket/removeFromBasket', slug)
    },
    setQuantity($event, slug) {
      let quantity = $event.target.value
      if(quantity < 1) {
        this.$store.commit('basket/removeFromBasket', slug)
      }
      let item = {
        slug: slug,
        quantity:  quantity
      }
      this.$store.commit('basket/setBasketItemQuantity', item)
    },
    minusItem(slug) {
      this.basketItems.filter((e) => e.slug === slug).forEach((e) => {
        if(e.quantity <= 1) {
          this.$store.commit('basket/removeFromBasket', slug)
        }
        else {
          let item = {
            slug: slug,
            quantity: --e.quantity,
          }
          this.$store.commit('basket/setBasketItemQuantity', item)
        }
      })
    },
    addItem(slug) {
      this.basketItems.filter((e) => e.slug === slug).forEach((e) => {
        let item = {
          slug: slug,
          quantity: ++e.quantity,
        }
        this.$store.commit('basket/setBasketItemQuantity', item)
      })
    }
  }
}
</script>

<style scoped>

</style>
