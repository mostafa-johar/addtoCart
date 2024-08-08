import { createRouter , createMemoryHistory } from "vue-router";
import HomeView from '../page/HomeView.vue'

const router = createRouter({
    history : createMemoryHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path:'/',
            component: HomeView
        }

    ]
    
})

export default router;