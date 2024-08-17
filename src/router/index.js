import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    // 指定路由模式
    history: createWebHashHistory(),
    // 路由地址
    routes: [
        {
            /*最常见404匹配规则：没有找到对应路径地址 */
            path: "/:pathMath(.*)*",
            name: "notfound",
            component: () => import("../views/404/404.vue"),
        },
    ]
})
export default router