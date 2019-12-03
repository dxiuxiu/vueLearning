## 快速生成 vue 组件模板

[参考](https://www.cnblogs.com/huzhuhua/p/10183992.html)

`vue.json`
```json
{
	"Print to console": {
		"prefix": "vue",
		"body": [
			"<template>",
			"    <div class=\"\" id=\"\">\n",
			"    </div>",
			"</template>",
			"<script>",
			"export default {",
			"   data() {",
			"      return {",
			"      }",
			"   },",
			"   activated() {",
			"   }",
			"}",
			"</script>",
			"$2",
			"<style scoped>",
			　　"/* css */",
	　　　　　"</style>",
		],
		"description": "Log output to console"
	}
}
```