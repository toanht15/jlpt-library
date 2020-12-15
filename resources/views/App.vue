<template>
    <v-app>
        <navbar/>

        <v-main :style="{background: $vuetify.theme.themes.light.background}">
            <v-container class="mt-10 rounded-lg white" style="height: 100%; width: 95%;" >
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
    name: "App",
    components: {Navbar},
    computed: {
        theme() {
            return (this.$vuetify.theme.dark) ? 'dark' : 'light';
        }
    }
}
</script>

<style scoped>

</style>
