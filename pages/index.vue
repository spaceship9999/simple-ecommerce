<template>
  <div>
    <Header></Header>
    <div class="container mx-auto px-4 lg:px-0">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4">
        <LandingShopItemGrid
          :item="item"
          :key="item.id"
          v-for="item in shop_items"></LandingShopItemGrid>
      </div>
      <div class="grid lg:grid-cols-2 my-10 gap-8">
        <div class="">
          <h2 class="text-3xl font-extrabold mb-4">Your Basket</h2>
          <Cart></Cart>
        </div>
        <div class="">
          <h2 class="text-3xl font-extrabold mb-4">Checkout</h2>
          <Checkout></Checkout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import LandingShopItemGrid from "../components/LandingShopItemGrid";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

export default {
  components: {
    LandingShopItemGrid,
    Header,
    Cart,
    Checkout
  },
  data(){
    return {
      //Hardcoding the shop items, could be changed when API is available
      shop_items: [
        {
          id: 1,
          image: 'https://placeimg.com/640/480/nature',
          name: 'Shop item 1',
          price: '10',
          create_at: '2021-11-01T19:03:00.000Z',
          updated_at: '2021-11-01T19:03:00.000Z',
          slug: 'shop-item-1',
        },
        {
          id: 2,
          image: 'https://placeimg.com/640/480/nature',
          name: 'Shop item 2',
          price: '17.50',
          create_at: '2021-11-01T19:04:00.000Z',
          updated_at: '2021-11-01T19:04:00.000Z',
          slug: 'shop-item-2',
        },
        {
          id: 3,
          image: 'https://placeimg.com/640/480/nature',
          name: 'Shop item 3',
          price: '22',
          create_at: '2021-11-01T19:05:00.000Z',
          updated_at: '2021-11-01T19:05:00.000Z',
          slug: 'shop-item-3',
        },
        {
          id: 4,
          image: 'https://placeimg.com/640/480/nature',
          name: 'Shop item 4',
          price: '35',
          create_at: '2021-11-01T19:36:00.000Z',
          updated_at: '2021-11-01T19:46:00.000Z',
          slug: 'shop-item-4',
        },
        {
          id: 5,
          image: 'https://placeimg.com/640/480/nature',
          name: 'Shop item 5',
          price: '9.80',
          create_at: '2021-11-01T19:33:00.000Z',
          updated_at: '2021-11-01T19:43:00.000Z',
          slug: 'shop-item-5',
        },
      ]
    }
  },

  methods: {
    calculateTotal() {

    }
  }
}
</script>
