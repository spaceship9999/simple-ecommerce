<template>
  <form method="post" class="p-4 bg-gray-400" action="/thank-you">
    <div class="my-4">
      <label class="block" for="first_name">First name</label>
      <input id="first_name" class="p-4 w-full" type="text">
    </div>
    <div class="my-4">
      <label  class="block" for="last_name">Last name</label>
      <input id="last_name" class="p-4 w-full" type="text">
    </div>
    <div class="my-4">
      <label  class="block" for="email_addr">Email</label>
      <input id="email_addr" class="p-4 w-full" type="email">
    </div>
    <div class="flex justify-center items-center mx-4">
      <div class="inline-block my-4">
        <input type="radio" name="payment_method" value="card" id="card" v-model="payment_method">
        <label for="card">Card</label>
      </div>
      <div class="inline-block mx-4">
        <input type="radio" name="payment_method" value="paypal" id="paypal" v-model="payment_method">
        <label for="paypal">Paypal</label>
      </div>
    </div>
    <div v-if="payment_method === 'card'">
      <div class="my-4">
        <label  class="block" for="card_number">Card number</label>
        <input id="card_number" class="p-4 w-full" type="text">
      </div>
      <div class="flex -mx-4">
        <div class="w-1/2 mx-4">
          <label  class="block"  for="expiry">Expiry Date</label>
          <input id="expiry" class="p-4 w-full" type="text">
        </div>
        <div class="w-1/2 mx-4">
          <label  class="block" for="cvv">CVV</label>
          <input id="cvv" class="p-4 w-full" type="text">
        </div>
      </div>
    </div>
    <button
      :class="{'opacity-70' : total <= 0}"
      class="mt-8 p-4 bg-black text-white text-center w-full rounded-lg"
    v-bind:disabled="total <= 0">Pay £ {{total}}</button>
  </form>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Checkout",
  data(){
    return {
      payment_method: '',
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
}
</script>
