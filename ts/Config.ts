//项目配置文件
export interface DesignConfig {
    device:string,//pc|mobi
    selfAdapt: boolean,//true|false
    width: number,
    funcList: Array<string>//页面的功能(单屏幕滚动，幻灯片播放等)
}

//环境配置文件
export interface EnvConfig {
    dir: string,
    imgDir: string,
    css: string,
    js: string,
    html: string,
    template: string
};

export interface BootConfig{
    name:string,
    type:number
}

export enum TypeEnum  {
    MOBILE_750= 1,//移动端750设计稿
    PC_2400_adaptive= 2,//pc端2400自适应式设计稿
    PC_2400_Carousel= 3,//pc端2400单屏滚动设计稿
    PC_1920= 4,//pc段1920px设计稿
    PC_1920_adaptive= 5,//pc端1920自适应式设计稿
    PC_1920_Carousel= 6,//pc端1920单屏滚动设计稿
}