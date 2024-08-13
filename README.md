# psdToHtml

## Introduction

这是一个将psd文件转换成html页面的工具，你只要修改`config.json`内容，然后就可以生成对应的页面，并且到`/psdToHtml/dist/dev/result/result.html`下，打开浏览器进行预览

## Usages
运行下面的命令，你就可以看到生成的页面了~
```shell
yarn parse
```

## directory

```shell
    ├── config.json # 配置文件，用于设置解析psd相关参数的命令
    ├── design.psd # 设计稿的位置
    ├── dist # 生成html的产物
    |  ├── dev # 给开发环境用的html产物
    |  |  ├── result #这里会包含css，js，html
    |  |  └── template.html #模板文件，可以配置html的初始结构
    |  └── prod #和dev一样，只是生产出来的内容是给生产环境使用的
    |     ├── result
    |     └── template.html
    ├── lib # ts编译后的脚本目录
    |  ├── app.js
    |  ├── Config.js
    |  ├── Func.js
    |  ├── parse.js
    |  ├── PsdDeal.js
    |  └── uitls.js
    ├── package.json
    ├── README.md
    ├── ts #项目的源代码
    |  ├── app.ts
    |  ├── Config.ts
    |  ├── Func.ts
    |  ├── parse.ts
    |  ├── PsdDeal.ts
    |  └── uitls.ts
    ├── tsconfig.json # ts的配置文件
    └── yarn.lock

```

## config.json
文件内容如下：

```json
{
    "name": "fast",
    "type": 4
}
```

参数介绍

| name | type   | default | description                |
| ---- | ------ | ------- | -------------------------- |
| name | string | fast    | 生成的页面名称                    |
| type | number | 4       | 要生成的页面类型，取值范围详见下方的TypeEnum |
```typescript
export enum TypeEnum  {  
    MOBILE_750= 1,//移动端750设计稿  
    PC_2400_adaptive= 2,//pc端2400自适应式设计稿  
    PC_2400_Carousel= 3,//pc端2400单屏滚动设计稿  
    PC_1920= 4,//pc段1920px设计稿  
    PC_1920_adaptive= 5,//pc端1920自适应式设计稿  
    PC_1920_Carousel= 6,//pc端1920单屏滚动设计稿  
}
```
