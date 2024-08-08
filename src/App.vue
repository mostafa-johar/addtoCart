<script setup lang="ts">
import { useStore } from "./store";
import { storeToRefs } from "pinia";

//  ---------------------------------------

const store = useStore();
const { showCart } = storeToRefs(store);

//  ---------------------------------------

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && showCart) {
    showCart.value = false;
  }
});
</script>

<template>
  <div class="default">
    <!-- navBar -->
    <div class="container">
      <nav class="nav">
        <RouterLink to="/" class="itemLink" exact-active-class="active">
          <img src="/src/assets/imgs/Home.svg" alt="Home.svg" />
        </RouterLink>
        <img
          src="/src/assets/imgs/shoppingCart.svg"
          alt="shoppingCart.svg"
          @click="showCart = !showCart"
        />
      </nav>
    </div>

    <!-- ------------------------ -->

    <!-- Pages -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.default {
  position: relative;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.nav img {
  width: 50px;
  cursor: pointer;
}
nav a.itemLink {
  text-decoration: none;
  color: var(----darkColor);
  font-size: 15px;
  font-weight: 500;
  flex-grow: 1;
  text-align: center;
}
</style>
