<template>
    <v-tooltip right :color="secondary_color">
        <v-list-tile slot="activator" @click.stop="action">

            <v-list-tile-action>
                <v-layout align-center>
                    <v-icon medium :style="`opacity: ${opacity};`" :color="item.color || text_color">{{ item.icon }}</v-icon>
                </v-layout>

            </v-list-tile-action>
        </v-list-tile>
        <span :style="`color: ${text_color};`">{{ item.title }}</span>
    </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: "sidebar-element",
        props: {
            item: Object,
            opacity: {
                type: Number,
                default: 1
            },
            action: Function
        },
        computed: {
            ...mapGetters([
                "text_color",
                "secondary_color"
            ])
        }
    }
</script>

<style scoped>
    span {
        cursor: pointer;
    }
</style>
