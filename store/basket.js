
export const state = () => ({
  basketItems:  [],
})

export const mutations = {
  addToBasket(state, item) {
    //Check if exists in basket
    let itemExists = state.basketItems.filter((e) => e.slug === item.slug).length
    if(!itemExists) {
      //Add quantity to item
      item.quantity = 1
      state.basketItems.push(item);
    }
    else {
      //Increment quantity if item already exists
      state.basketItems.forEach((e, i, obj) => {
        if(e.slug === item.slug) {
          e.quantity++
          this._vm.$set(state.basketItems, i, e)
        }
      })
    }
  },
  removeFromBasket(state, slug) {
    state.basketItems.forEach(function (e, i, obj) {
      if(e.slug === slug) obj.splice(i , 1)
    })
  },
  setBasketItemQuantity(state, item) {
    //Check if exists in basket
    state.basketItems.forEach((e, i) => {
      if(e.slug === item.slug) {
        e.quantity = parseInt(item.quantity)
        this._vm.$set(state.basketItems, i, e)
      }
    })
  }
}
