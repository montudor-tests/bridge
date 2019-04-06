<template>
        <v-tooltip  
            right 
            :disabled="!show_tooltip"
            :color="secondary_color"
        >
            <v-btn slot="activator" @click.stop="click" class="tb-actual-btn" small icon>
                <v-icon :color="element.color || text_color" small>{{ display_icon }}</v-icon>
            </v-btn>
            <span :style="`color: ${text_color};`">{{ display_name }}</span>
        </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "toolbar-element",
    props: {
        element: Object
    },
    computed: {
        click() {
            if(typeof this.element.action != "function") return () => {};
            return this.element.action;
        },
        display_icon() {
            if(!this.element.display_icon) return "fullscreen";
            return this.element.display_icon;
        },
        display_name() {
            if(!this.element.display_name) return "";
            return this.element.display_name;
        },
        show_tooltip() {
            return this.element.display_name != undefined && this.element.display_text != "";
        },
        ...mapGetters([ "secondary_color", "text_color" ])
    }
}
</script>

<style scoped>
    .tb-actual-btn {
        margin: 0;
    }
</style>
