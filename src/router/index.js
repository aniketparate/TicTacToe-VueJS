import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import TicTacToe from '../components/TicTacToe.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
        },
        {
            path: '/tictactoe',
            name: 'TicTacToe',
            component: TicTacToe
        }
    ]
})