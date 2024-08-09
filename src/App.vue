<script setup lang="ts">
import { useStore } from "./store";
import { storeToRefs } from "pinia";

//  ---------------------------------------

const store = useStore();
const { showCart, countInCart } = storeToRefs(store);

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
          <transition name="fade" appear>
            <span class="countInCart" v-if="countInCart">{{
              countInCart
            }}</span>
          </transition>
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
  position: relative;
}
.countInCart {
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  height: 15px;
  background-color: rgb(53, 218, 247);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
