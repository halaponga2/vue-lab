import MainPage from "@/pages/MainPage";
import NewsPage from "@/pages/NewsPage";
import SingleNewsPage from "@/pages/SingleNewsPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path:'/news/:id',
        component: SingleNewsPage
    }
]

const router = createRouter({routes, history: createWebHistory()})

export default router;