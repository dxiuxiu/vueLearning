<template>
  <Menu mode="horizontal" :theme="theme1" active-name="1">
    <MenuItem name="1" to="/">
      <Icon type="ios-paper" />home page
    </MenuItem>
    <MenuItem name="2" to="/pagea">
      <Icon type="ios-people" />pageA
    </MenuItem>
    <MenuItem name="3" to="/pageb">
      <Icon type="ios-construct" />pageB
    </MenuItem>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-stats" />统计分析
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="5" to="/home/pageb">
      <Icon type="ios-construct" />home/pageA
    </MenuItem>
    <MenuItem name="6" to="/home/pageb">
      <Icon type="ios-construct" />home/pageB
    </MenuItem>
    <MenuItem name="7" to="/demo/todolist">
      <Icon type="ios-construct" />demo 之 todolist
    </MenuItem>
    <Submenu name="8">
      <template slot="title">
        <Icon type="ios-stats" />路由嵌套
      </template>
        <MenuItem name="8-1" to="/routerTest/a">嵌套路由 a</MenuItem>
        <MenuItem name="8-2" to="/routerTest/b">嵌套路由 b</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {
      theme1: "primary"
    };
  }
};
</script>