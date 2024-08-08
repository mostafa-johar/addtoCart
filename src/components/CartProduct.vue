<script setup lang="ts">
import { Products } from "../types/types";
import { useStore } from "../store/index.ts";
import { storeToRefs } from "pinia";

//  -----------------------------------------------------
defineProps(["product"]);
const store = useStore();
const { cart } = storeToRefs(store);

//  -----------------------------------------------------
const removeItem = (cartItem: Products) => {
  cart.value = cart.value.filter((item) => item !== cartItem);
};

//  -----------------------------------------------------

const increaseProduct = (prod: Products) => {
  if (Number(prod.amount) < 30) {
    prod.amount = Number(prod.amount) + 1;
  }
};
const decreaseProduct = (prod: Products) => {
  if (Number(prod.amount) > 1) {
    prod.amount = Number(prod.amount) - 1;
  }
  return;
};
</script>
<template>
  <div class="product">
    <div class="info">
      <div class="img" :style="{ backgroundColor: product.imgColor }"></div>
      <div class="details">
        <p class="name">{{ product.imgColor }}</p>
        <p class="price">${{ product.price }}</p>
      </div>
    </div>
    <div class="amountClose">
      <div class="amount">
        <button type="button" @click="increaseProduct(product)">
          <img
            src="../assets/imgs/plus.svg"
            alt="plus"
            width="100%"
            height="100%"
          />
        </button>
        <p class="number">{{ product.amount }}</p>
        <button type="button" @click="decreaseProduct(product)">
          <img
            src="../assets/imgs/minus.svg"
            alt="minus"
            width="100%"
            height="100%"
          />
        </button>
      </div>
      <img
        src="../assets/imgs/delete.svg"
        alt="delete"
        @click="removeItem(product)"
        class="close"
      />
    </div>
  </div>
</template>
<style scoped>
.cart .product .info {
  display: flex;
  gap: 5px;
}
.cart .product .amountClose {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 3px 0;
  border-bottom: 1px solid #eee;
  padding: 2px 0px;
}
.cart .product .amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.cart .product .amount .number {
  font-size: 14px;
  font-weight: 500;
}
.cart .product .amount button {
  width: 15px;
  height: 15px;
  border: 0;
  cursor: pointer;
}
.cart .product .close {
  width: 15px;
  height: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
}
.cart .product .img {
  width: 65px;
  height: 44px;
  border-radius: 5px;
}
.cart .details {
  display: flex;
  flex-direction: column;
}
.cart .details .name,
.cart .details .price {
  font-size: 12px;
  color: var(----darkColor);
}
.cart .details .name {
  font-weight: 500;
}
.cart .details .price {
  font-weight: 600;
}
</style>
