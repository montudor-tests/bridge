//@ts-ignore
import uuidv4 from "uuid/v4";

type MANIFEST_TYPE = "resources" | "data" | "world_template" | "client_data";
interface Header {
    description: string,
    name: string,
    uuid: string,
    version: [ number, number, number ],
    min_engine_version: [ number, number, number ]
}
interface Module {
    type: MANIFEST_TYPE,
    uuid: string,
    version: [ number, number, number ]
}

export default class Manifest {
    private format_version: number;
    private header: Header;
    private modules: Module[];
    constructor(type: MANIFEST_TYPE, name: string, description: string, client_data: boolean) {
        this.format_version = 1;
        this.header = {
            description,
            name,
            uuid: uuidv4(),
            version: [ 1, 0, 0 ],
            min_engine_version: [ 1, 0, 0 ]
        };
        this.modules = [
            {
                type,
                uuid: uuidv4(),
                version: [ 1, 0, 0 ]
            }
        ];

        if(client_data) {
            this.modules.push({
                type: "client_data",
                uuid: uuidv4(),
                version: [ 1, 0, 0 ]
            });
        }
    }

    get() {
        return JSON.stringify(this, null, "\t");
    }
}