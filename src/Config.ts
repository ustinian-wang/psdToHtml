// Project configuration file
export enum DesignDeviceEnum {
    PC = "pc",
    MOBILE = "mobile"
}

export type DesignConfig = {
    device: DesignDeviceEnum; // pc | mobi
    selfAdapt: boolean; // true | false
    width: number;
    funcList: string[]; // Page functionalities (single screen scrolling, slideshow, etc.)
}

// Environment configuration file
export type EnvConfig = {
    dir: string;
    imgDir: string;
    css: string;
    js: string;
    html: string;
    template: string;
}

export type BootConfig = {
    name: string;
    type: TypeEnum;
}

export enum TypeEnum {
    MOBILE_750 = 1, // Mobile design draft 750
    PC_2400_ADAPTIVE = 2, // PC adaptive design draft 2400
    PC_2400_CAROUSEL = 3, // PC single screen scrolling design draft 2400
    PC_1920 = 4, // PC design draft 1920px
    PC_1920_ADAPTIVE = 5, // PC adaptive design draft 1920
    PC_1920_CAROUSEL = 6, // PC single screen scrolling design draft 1920
}

export const DEFAULT_CONFIG: BootConfig = {
    name: "fast",
    type: TypeEnum.PC_1920
}