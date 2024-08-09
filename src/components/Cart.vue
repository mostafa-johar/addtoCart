<script setup lang="ts">
import CartProduct from "./CartProduct.vue";
import { useStore } from "../store/index.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";

//  -----------------------------------------------------

const store = useStore();
const { cart, showCart } = storeToRefs(store);

//  -----------------------------------------------------
const total = computed(() => {
  return cart.value.reduce((total, num) => {
    return total + Number(num.price) * Number(num.amount);
  }, 0);
});
</script>
<template>
  <div class="cart">
    <div class="head">
      <h3 class="title">
        Count : {{ cart.length }}
        {{ cart.length == 1 ? "Product" : "Products" }}
      </h3>
      <img
        src="../assets/imgs/close.svg"
        alt="close.svg"
        @click="showCart = !showCart"
      />
    </div>

    <transition-group tag="section" class="products" name="cart">
      <CartProduct v-for="(prod, index) in cart" :key="index" :product="prod" />
    </transition-group>

    <div class="Checkout">
      <div class="total">
        <p>ToTal</p>
        <p>${{ total }}</p>
      </div>
      <button class="checkoutBtn" type="button">Checkout</button>
    </div>
  </div>
</template>

<style scoped>
.cart {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #fafafa;
  padding: 10px;
}
.cart .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  margin: 20px 0;
}
.cart .head img {
  width: 20px;
  cursor: pointer;
}
.cart .title {
  font-size: 16px;
  color: #0e0912;
  font-weight: 500;
}

.cart .products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 5px;
  position: relative;
}
/* ------------------------------- */
.cart .Checkout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 15px;
}
.cart .Checkout .total {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.cart .Checkout .total p {
  color: #0e0912;
  font-size: 16px;
  font-weight: bold;
}
.cart .Checkout .checkoutBtn {
  border: 0;
  padding: 10px;
  background-color: #19adbc;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.cart .Checkout .checkoutBtn:hover {
  background-color: #1f6997;
}

/* ------------- animation ------ */
.cart-enter-from,
.cart-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.cart-enter-to,
.cart-leave-from {
  opacity: 1;
  transform: scale(1);
}
.cart-enter-active {
  transition: all 0.3s ease;
}
.cart-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}
.cart-move{
  transition: all .3s ease;
}
</style>
