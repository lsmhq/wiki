import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: '启动器',
        children:[
            {
                text: '更新日志',
                link: '/subata/update',
                icon: 'sun'
            },{
                text: '使用说明',
                link: '/subata/introduction',
                icon: 'book'
            },{
                text: '常见问题',
                link: '/subata/question',
                icon: 'question'
            }
        ]
    }
]);
