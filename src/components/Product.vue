<script setup lang="ts">
import { ref } from "vue";
import { Products } from "../types/types";
import { useStore } from "../store";
import { storeToRefs } from "pinia";

const store = useStore();
const { cart } = storeToRefs(store);

//  ---------------------------------------
const loading = ref(false);
defineProps<{
  product: Products;
}>();

//  ---------------------------------------

const emit = defineEmits(["productEmit"]);

//  ---------------------------------------

const add = (product: Products) => {
  for (let item of cart.value) {
    if (item.imgColor == product.imgColor) {
      return;
    }
  }
  loading.value = true;
  setTimeout(() => {
    emit("productEmit", product);
    loading.value = false;
  }, 1000);
};
//  ---------------------------------------
</script>

<template>
  <div class="product">
    <div class="img" :style="{ backgroundColor: product.imgColor }"></div>

    <div class="info">
      <section>
        <h3>PRIMARY COLOR</h3>
        <p>{{ product.imgColor }}</p>
      </section>
      <section>
        <p>${{ product.price }}</p>
        <button type="button" @click="add(product)">
          {{ loading ? "processing . . ." : "Add To Cart" }}
        </button>
      </section>
    </div>
 
  </div>
</template>

<script></script>

<style scoped>
.product .img {
  background-color: red;
  width: 100%;
  height: 180px;
  margin: 0 auto 10px;
  border-radius: 15px;
}
/* --------------------- */
.product .info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
/* ----- */
.product .info section:first-of-type h3 {
  font-size: 14px;
  font-weight: 500;
  color: #878787;
}
.product .info section:first-of-type p {
  font-size: 14px;
  font-weight: 500;
  color: var(----darkColor);
}
/* ----- */
.product .info section:last-of-type {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.product .info section:last-of-type p {
  font-size: 16px;
  font-weight: 600;
  color: var(----darkColor);
}
.product .info section:last-of-type button {
  border: 0;
  padding: 8px;
  background-color: #19adbc;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 7px;
}
.product .info section:last-of-type button:hover {
  background-color: #1f6997;
}

</style>
