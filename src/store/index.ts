import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { Products } from "../types/types";


export const useStore = defineStore('addToCart', () => {

    // --------- states -----------
    const products = ref<Products[]>([
        {
            imgColor: '#197ebc',
            price: 20
        },
        {
            imgColor: '#54787f',
            price: 30
        },
        {
            imgColor: '#ff6e15',
            price: 60
        },
        {
            imgColor: '#381211',
            price: 70
        },
        {
            imgColor: '#e1322e',
            price: 90
        },
        {
            imgColor: '#2ee183',
            price: 40
        },
        {
            imgColor: '#909ded',
            price: 70
        },
        {
            imgColor: '#ed90c6',
            price: 100
        },
        {
            imgColor: '#cf2a73',
            price: 50
        },
        {
            imgColor: '#9b4cef',
            price: 60
        },
        {
            imgColor: '#140b1d',
            price: 20
        },
    ])

    const cart = ref<Products[]>([])

    const showCart = ref(false)

    const countInCart = computed(()=>{
        return cart.value.length 
    })




    return {
        products,
        cart,
        showCart,
        countInCart
    }
})