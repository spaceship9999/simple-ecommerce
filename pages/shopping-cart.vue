<template>
  <div>
    <Header></Header>
    <div class="py-20 bg-black text-white flex items-center text-extrabold">
      <h1 class="container mx-auto px-4 lg:px-0 text-2xl">Shopping Basket</h1>
    </div>
    <div class="container mx-auto px-4 lg:px-0">
      <Cart></Cart>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Cart from "~/components/Cart";

export default {
  name: "shopping-cart",
  components: {
    Header,
    Cart
  }
}
</script>

<style scoped>

</style>
