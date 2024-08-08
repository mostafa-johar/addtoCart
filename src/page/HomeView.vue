<script setup lang="ts">
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
import { useStore } from "../store/index.ts";
import { storeToRefs } from "pinia";

//  ---------------------------------------

const store = useStore();
const { products, cart, showCart } = storeToRefs(store);

//  ---------------------------------------

const addToCart = (prod: any) => {
  let exist = false;
  for (const item of cart.value) {
    if (item.imgColor == prod.imgColor) {
      exist = true;
      break;
    }
  }
  if (!exist) {
    cart.value.push({ ...prod, amount: 1 });
  }
};
</script>

<template>
  <div class="Home">
    <transition name="showCart">
      <Cart :cartBox="cart" v-if="showCart" />
    </transition>
    <div class="container">
      <section class="products">
        <Product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          @productEmit="addToCart($event)"
        />
      </section>
    </div>
  </div>
</template>

<style scoped>
.Home {
  padding-block: 30px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.showCart-enter-active,
.showCart-leave-active {
  transition: all 0.5s ease-in-out;
}
.showCart-enter-from,
.showCart-leave-to {
  transform: translateX(-300px);
}
.showCart-enter-to,
.showCart-leave-from {
  transform: translateX(0);
}
</style>
