<template>
  <div class="wangEditor">
    <p>{{desc}}</p>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "wangEditor",
  data() {
    return {
      editor: {},
    };
  },
  props:{
    desc:{
      default:''
    }
  },
  mounted() {
    // 创建实例
    this.editor = new E(".wangEditor");
    // 取消自动 focus
    this.editor.config.focus = false;
    // 默认情况下，显示所有菜单
    this.editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo',
    ]

    // 配置 onblur 回调函数

    this.editor.create();

    // this.editor.txt.html("<p> </p>"); // 重新设置编辑器内容
    // this.editor.txt.text(); //获取内容
    // this.editor.txt.clear(); //清空

    this.$bus.$on('clear',()=>{
      this.editor.txt.clear(); //清空
    })
  },
};
</script>
