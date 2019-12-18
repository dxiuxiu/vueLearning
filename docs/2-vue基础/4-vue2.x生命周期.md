# vue2.x 生命周期

[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

`生命周期方法不能使用箭头函数`


[生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

## 挂载阶段

+ [beforeCreate](https://cn.vuejs.org/v2/api/#beforeCreate) - 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

+ [created](https://cn.vuejs.org/v2/api/#created)

+ [beforeMount](https://cn.vuejs.org/v2/api/#beforeMount) - (服务器渲染期间不被调用)

+ [mounted](https://cn.vuejs.org/v2/api/#mounted) - (服务器渲染期间不被调用)

## 更新阶段

+ [beforeUpdate](https://cn.vuejs.org/v2/api/#beforeUpdate) - (服务器渲染期间不被调用)

+ [updated](https://cn.vuejs.org/v2/api/#updated) - (服务器渲染期间不被调用)

## 卸载阶段

+ [beforeDestroy](https://cn.vuejs.org/v2/api/#beforeDestroy) - 实例销毁之前调用。在这一步，实例仍然完全可用(服务器渲染期间不被调用)

+ [destroyed](https://cn.vuejs.org/v2/api/#destroyed)

## keep-alive 相关

+ [activated](https://cn.vuejs.org/v2/api/#activated)- keep-alive 组件被激活时调用(服务器渲染期间不被调用)

+ [deactivated](https://cn.vuejs.org/v2/api/#deactivated) - keep-alive 组件被停用时调用(服务器渲染期间不被调用)

## 什么是 keep-alive 组件

[vue-router 之 keep-alive](https://www.jianshu.com/p/0b0222954483)

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
用法简单:

```javascript
<keep-alive>
  <component>
    <!-- 该组件将被缓存！ -->
  </component>
</keep-alive>
```

属性有:

+ include - 字符串或正则表达，只有匹配的组件会被缓存

+ exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存


### keep-alive 和 vue-router

#### 简单使用

```javascript
<keep-alive>
    <router-view>
        <!-- 所有路径匹配到的视图组件都会被缓存！ -->
    </router-view>
</keep-alive>
```

#### 如果只想 router-view 里面某个组件被缓存，怎么办?

```javascript
/** 
 * 使用 include/exclude 
 * a 是组件名称
*/
<keep-alive include="a"> 
    <router-view>
        <!-- 只有路径匹配到的视图 a 组件会被缓存！ -->
    </router-view>
</keep-alive>

/** 
 * 增加 router.meta 属性
*/
// routes 配置
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  }, {
    path: '/:id',
    name: 'edit',
    component: Edit,
    meta: {
      keepAlive: false // 不需要被缓存
    }
  }
]
```
