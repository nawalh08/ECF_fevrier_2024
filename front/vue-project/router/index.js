import loginView from '../views/loginView'
import signView from '../views/signView'

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
      
        {path: "/Login", component :loginView},
        {path: "/Sign", component :signView},
        
    ]
})


export default router;

