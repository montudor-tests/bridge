import ThemeManager from "../../scripts/themes/Manager";
import Store from "../index";

const state = {
    is_dark_mode: true,
    files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-json",
        md: "mdi-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel",
        lang: "mdi-web"
    },
    color_theme: {
        dark: ThemeManager.getHighlighter(0),
        light: ThemeManager.getHighlighter(1)
    }
}

const mutations = {
    toggleDarkMode(state) {
        state.is_dark_mode = !state.is_dark_mode;
    },
    setDarkMode(state, val) {
        state.is_dark_mode = val;
    }
}

const getters = {
    manager_color_theme() {
        return ThemeManager.getColorTheme(Store.state.Settings.color_theme_variant);
    },
    primary_color(state, getters) {
        return getters.manager_color_theme.primary;
    },
    secondary_color(state, getters) {
        return getters.manager_color_theme.secondary;
    },
    tertiary_color(state, getters) {
        return getters.manager_color_theme.tertiary;
    },
    text_color(state, getters) {
        return getters.manager_color_theme.text;
    },
    accent_color(state, getters) {
        return getters.manager_color_theme.accent;
    }
}

export default {
    state,
    mutations,
    getters
}