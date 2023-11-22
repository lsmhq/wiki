import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: '启动器',
        children:[
            {
                text: '更新日志',
                link: '/subatamd/update',
                icon: 'sun'
            },{
                text: '使用说明',
                link: '/subatamd/introduction',
                icon: 'book'
            },{
                text: '常见问题',
                link: '/subatamd/question',
                icon: 'question'
            }
        ]
    }
]);
