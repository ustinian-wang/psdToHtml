import psd from 'psd.js';

export function parsePsd(file:string){
    const psdLoaded:any = psd.fromFile(file);
    psdLoaded.parse();//要执行一遍解析，后面的结果才能产出
    let tree = psdLoaded.tree();
    return {
        tree,
        json:tree.export()
    }
}

export function isGroupNode(node:any):boolean{
    return node && node.type == "group";
}

export function isVisibleGroupNode(node:any):boolean{
    return isGroupNode(node) && node.visible;
}

export function isLayerNode(node:any):boolean{
    return node && node.type == "layer" && node.visible;
}

export function isVisibleLayerNode(node:any):boolean{
    return isLayerNode(node) && node.visible;
}

