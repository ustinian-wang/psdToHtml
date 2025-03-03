import {run} from "./app";
import inquirer from "inquirer";
import { DEFAULT_CONFIG, TypeEnum } from "./Config";

(async () => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: '请输入页面名称',
        },
        {
            type: 'list',
            name: 'type',
            message: '请选择模式:',
            choices: [
                { name: '移动端750设计稿', value: TypeEnum.MOBILE_750 },
                { name: 'pc端2400自适应式设计稿', value: TypeEnum.PC_2400_ADAPTIVE },
                { name: 'pc端2400单屏滚动设计稿', value: TypeEnum.PC_2400_CAROUSEL },
                { name: 'pc端1920px设计稿', value: TypeEnum.PC_1920 },
                { name: 'pc端1920px自适应式设计稿', value: TypeEnum.PC_1920_ADAPTIVE },
                { name: 'pc端1920px单屏滚动设计稿', value: TypeEnum.PC_1920_CAROUSEL },
            ],
        },
    ];
    const answers = await inquirer.prompt(questions);
    
    let config = {
        ...DEFAULT_CONFIG,
        ...answers,
    }
    run(config);
})();
