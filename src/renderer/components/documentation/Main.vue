<template>
    <v-dialog
        v-model="DOC_WINDOW.is_open"
        :max-width="is_fullscreen ? 2000 : 500"
    >
        <v-card>
            <v-card-title>
                <v-toolbar @dblclick.native="is_fullscreen = !is_fullscreen" height="30px" :style="`background: ${secondary_color}; color: ${text_color};`">
                    <span class="window-title">Documentation</span>
                    <v-spacer></v-spacer>
                    <v-btn small icon @click.stop="is_fullscreen = !is_fullscreen">
                        <v-icon small>add</v-icon>
                    </v-btn>
                    <v-btn small icon @click.stop="DOC_WINDOW.close" class="last-btn">
                        <v-icon small>close</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card-title>
            

            <v-card-text
                :style="`
                    max-height: ${window_height * 0.75}px;
                    height: ${is_fullscreen ? window_height * 0.75 : 500}px;
                    overflow-y: auto;
                    background: ${tertiary_color};
                `"
            >
               <div ref="attach-documentation"></div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import { DOC_LOADER, DOC_WINDOW } from "../../scripts/documentation/main";
    import { mapGetters } from 'vuex';

    export default {
        name: "documentation-main",
        data() {
            return {
                is_fullscreen: false,
                window_height: window.innerHeight,
                loaded_type: "",
                DOC_WINDOW,
                DOC_LOADER
            }
        },

        created() {
            window.addEventListener("resize", this.onResize);
        },
        mounted() {
            this.updateContent();
            DOC_WINDOW.onOpen = () => this.updateContent();
        },
        destroyed() {
            window.removeEventListener("resize", this.onResize);
        },
        computed: {
            ...mapGetters([ "secondary_color", "tertiary_color", "text_color" ])
        },
        methods: {
            onResize() {
                this.window_height = window.innerHeight;
            },

            updateContent() {
                if(DOC_WINDOW.equals()) return;
                DOC_WINDOW.update();
                this.$refs["attach-documentation"].innerHTML = DOC_LOADER.get(DOC_WINDOW.get());
            }
        }
    }
</script>

<style scoped>
    .last-btn {
        margin-right: 4px !important;
    }
    .window-title {
        margin-left: 8px;
        cursor: default;
    }
    .v-card__title {
        padding: 0;
    }
    .v-card__actions {
        padding: 0;
    }
</style>