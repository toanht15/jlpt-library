<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app dark class="blue accent-3">
            <v-col>
                <v-row class="mt-10 mb-8">
                    <v-avatar>
                        <v-icon large>fas fa-store</v-icon>
                    </v-avatar>
                </v-row>
            </v-col>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            drawer: true,
            links: [
                {icon: 'fas fa-home', text: 'Home', route: '/'},
                {icon: 'fas fa-pen', text: 'N1', route: '/n1'},
                {icon: 'fas fa-marker', text: 'N2', route: '/n2'},
                {icon: 'fas fa-paint-brush', text: 'N3', route: '/n3'},
                {icon: 'fas fa-folder', text: 'Library', route: '/library'},
                {icon: 'fas fa-file', text: 'Document', route: '/document'},
            ]
        }
    }
}
</script>

<style scoped>
.border {
    border-left: 4px solid #2c3e60;
}
</style>
