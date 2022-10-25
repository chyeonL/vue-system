<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 手写深拷贝
/* function copy(obj) {
  let newObj = null;
  if (typeof obj === "object" && obj !== null) {
    newObj = obj instanceof Array ? [] : {};
    for (let i in obj) {
      newObj[i] = copy(obj[i]);
    }
  } else newObj = obj;

  return newObj;
}
let a = [22, 6434, 777];
console.log(a);
let b = copy(a);
console.log(b);
// a.a=7575
a[2] = 33;
console.log(a);
console.log(b);
console.log(typeof [33, 55, 3543]);
 */

// 箭头函数不可作为构造函数
// let a = ()=> ac=1
// let aaa = new a()
// console.log(aaa);
export default {
  name: "App",
  mounted() {
    // 初始化 用户信息
    this.$store.commit("initUserInfo");
  },
};
</script>
