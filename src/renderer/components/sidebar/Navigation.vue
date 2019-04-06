<template>
    <v-navigation-drawer
        :style="`max-height: ${nav_height}px; background-color: ${tertiary_color};`"
        fixed
        mini-variant-width="60"
        mini-variant
        stateless
        value="true"
        app
    >
        <v-toolbar
            :style="`background-color: ${secondary_color}; color: ${text_color};`"
            fixed
            height="24px"
            width="60"
        >
            <h4>bridge.</h4>
        </v-toolbar>

        <v-list :style="`max-height: ${nav_height}px;`">
            <sidebar-element
                v-for="(item, i) in menu_items"
                :key="i"
                :item="item"
                :action="toggleMenu(i+1)"
                :opacity="getOpacity(i)"
            />
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import SidebarElement from "../windowFactory/SidebarElement";
import { mapGetters } from 'vuex';

    export default {
        name: "sidebar-navigation",
        components: {
            SidebarElement
        },
        created() {
            window.addEventListener("resize", this.on_resize);
        },
        destroyed() {
            window.removeEventListener("resize", this.on_resize);
        },
        computed: {
            sidebar_menu_state() {
                return this.$store.state.SidebarMenu.menu_state;
            },
            menu_items() {
                return this.$store.getters.all_items;
            },
            ...mapGetters([
                "tertiary_color",
                "secondary_color",
                "text_color"
            ])
        },
        data() {
            return {
                nav_height: window.innerHeight
            };
        },
        methods: {
            isActive(i) {
                return this.sidebar_menu_state == i+1;
            },
            getOpacity(i) {
                return this.isActive(i) ? 1 : 0.25;
            },
            toggleMenu(i) {
                return () => {
                    if (this.sidebar_menu_state == i) {
                        this.$store.commit("setSidebarMenu", 0);
                    } else {
                        this.$store.commit("setSidebarMenu", i);
                    }
                }
            },
            on_resize() {
                this.nav_height = window.innerHeight;
            }
        }
    }
</script>

<style scoped>
    .v-list {
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
