<template>
  <div class="hello">
    <div>Vue3仿美团项目</div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-a-shujutubiao"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped> // 设置编译模式
.hello{
  font-size: 15px;
  div {
    color: red;
  }
}
</style>
