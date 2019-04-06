import fs from "fs";
const default_theme = JSON.parse(fs.readFileSync(__static + "/themes/default.json").toString());

class ThemeManager {
    static setThemeGroup(theme) {
        this.current_theme_group = theme;
    }

    static get(variant_id) {
        return this.current_theme_group.variants[variant_id];
    }

    static getHighlighter(variant_id) {
        try {
            return this.get(variant_id).define.highlighter;
        } catch(e) {
            return {};
        }
    }

    static getColorTheme(variant_id) {
        try {
            return this.get(variant_id).define.theme;
        } catch(e) {
            return {};
        }
    }

    static getAvailableThemes() {
        return this.current_theme_group.variants.map(v => v.name);
    }
}

ThemeManager.setThemeGroup(default_theme);
export default ThemeManager;