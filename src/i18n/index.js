// 1 导入
import Vue from 'vue'
import VueI18n from 'vue-i18n'

// element-ui国际化
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

import en from './en'
import zh from './zh'

// 2 安装
Vue.use(VueI18n)

// 3 语言环境信息
const messages = {
    // 英文
    en:{
        ...en, //抽离成一个单独的模块（项目大的时候可以）
        ...enLocale     //国际化英文包
    },
    // 中文
    zh:{
        ...zh,
        ...zhLocale     //国际化中文包
    },
}

//  4 实例化
const i18n = new VueI18n({
    locale:'zh',
    messages:messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

// 5 导出
export default i18n