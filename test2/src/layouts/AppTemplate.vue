<template>
    <div>
        <v-navigation-drawer app clipped v-model="drawer">
            <v-list>
                <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
                    <v-list-item-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app clipped-left dark color="#008080">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title>Factory</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-footer app color="#008080">

        </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        menuItems() {
            return [
                {
                    title: 'builders',
                    icon: 'mdi-car',
                    route: '/builders',
                },
                {
                    title: 'history',
                    icon: 'mdi-view-list',
                    route: '/history',
                },
            ]
        }
    }
}
</script>
