declare type MANIFEST_TYPE = "resources" | "data" | "world_template" | "client_data";
export default class Manifest {
    private format_version;
    private header;
    private modules;
    constructor(type: MANIFEST_TYPE, name: String, description: String, client_data: Boolean);
    get(): string;
}
export {};
