import { defineConfig, type DefaultTheme } from 'vitepress'
import { forewordIcon, school, tools, backend, frontend, chatgpt, learn_408, hard_worker, run_bag, acm } from '../theme/icons/svg-path'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "Me0w00f WIKI",
    description: "学习指南",
    themeConfig: {
        //顶部导航栏选项
        nav: nav(),

        //侧边导航栏选项
        sidebar: sidebar(),

        editLink: {
            pattern: '',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航',
            level: 'deep'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        },
        

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '', link: '/main' },
       
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '前言',
            collapsed: true,
            items: [
                { text: '入门须知', link: '/前言/入门须知', },
            ]
        },
        {
            text: tools + '开发工具',
            collapsed: true,
            items: [
                
                { text: 'JetBrains全家桶', link: '/开发工具/JetBrains全家桶', },
            ]
        },

        {
            text: backend + '后端开发',
            collapsed: true,
            items: [
                {
                    text: 'Java技术栈',
                    collapsed: true,
                    items: [
                        { text: '学习路线', link: '/后端开发/Java技术栈/学习路线' },
                        { text: '学习阶段', link: '/后端开发/Java技术栈/学习阶段' },
                    ]
                },

                {
                    text: 'Rust技术栈',
                    collapsed: true,
                    items: [
                        { text: '基础阶段', link: '/后端开发/Rust技术栈/基础阶段' },
                    ]
                },
            ]
        },
        {
            text: frontend + '前端开发',
            collapsed: true,
            items: [
                {
                    text: '前端开发基础',
                    collapsed: true,
                    items: [
                        { text: 'HTML基础', link: '/前端开发/前端开发基础/HTML基础' },
                        { text: 'CSS基础', link: '/前端开发/前端开发基础/CSS基础' },
                        { text: 'JavaScript基础', link: '/前端开发/前端开发基础/JavaScript基础' }
                    ]
                },
                {
                    text: 'Vue技术栈',
                    collapsed: true,
                    items: [
                        { text: 'Vue基础', link: '/前端开发/Vue技术栈/Vue基础' },
                    ]
                },
                {
                    text: 'React技术栈',
                    collapsed: true,
                    items: [
                        { text: 'React基础', link: '/前端开发/React技术栈/React基础' },
                    ]
                }
            ]
        },
        {
            text: chatgpt + '人工智能',
            collapsed: true,
            items: [
                {
                    text: 'PyTorch',
                    collapsed: true,
                    items: [
                        { text: '学习资源', link: '/人工智能/PyTorch/学习资源' },
                    ]
                },

                {text: '学习指南',link: '/人工智能/学习指南'},
                {text: 'LLM',link: '/人工智能/LLM'},
                {text: 'AI开发与学习工具',link: '/人工智能/AI开发与学习工具'},
                {text: 'DevOps 工具与资源',link: '/人工智能/DevOps 工具与资源'},
                {text: 'AI 图像与视频工具清单',link: '/人工智能/AI 图像与视频工具清单'},
            ]
        },


        {
            text: run_bag + '考公留学',
            collapsed: true,
            items: [
                { text: '考公指南', link: '/考公留学/考公指南', },
                { text: '润学指南', link: '/考公留学/润学指南', },
            ]
        },
    ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    root: {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                displayDetails: '显示详细信息',
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                }
            }
        }
    }
}
