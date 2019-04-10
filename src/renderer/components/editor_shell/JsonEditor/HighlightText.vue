<template>
    <span class="hl-wrapper">
        <span v-for="(string, i) in text_as_array" :key="i" :style="styles(string)">{{ string }}</span>
    </span>
</template>

<script>
    import ThemeManager from "../../../scripts/themes/Manager";
    import FileType from '../../../scripts/editor/FileType';

    export default {
        name: "highlight-text",
        props: {
            
        },
        data() {
            return {
                
            };
        },  
        computed: {
            highlighter_def() {
                return FileType.getHighlighter().define;
            },
            keywords() {
                return this.highlighter_def.keywords;
            },
            titles() {
                return this.highlighter_def.titles;
            },
            symbols() {
                return this.highlighter_def.symbols;
            },
            text() {
                if(this.$slots.default) return (this.$slots.default[0].text + "").trim();
                return "";
            },
            text_as_array() {
                return this.text.replace(/:|<|>/g, (match) => {
                    return `&bridge.split-point;${match}&bridge.split-point;`
                }).split("&bridge.split-point;");
            },
            is_dark_mode() {
                return this.$store.state.Appearance.is_dark_mode;
            },
            color_theme_variant() {
                return this.$store.state.Settings.color_theme_variant || 0;
            },
            color_theme() {
                return ThemeManager.getHighlighter(this.color_theme_variant);
            }
        },
        methods: {
            styles(string) {
                if(this.keywords.includes(string)) {
                    return this.color_theme.keyword;
                } else if(this.titles.includes(string)) {
                    return this.color_theme.property;
                } else if(this.symbols.includes(string)) {
                    return this.color_theme.definition;
                }
            }
        }
    }
</script>
