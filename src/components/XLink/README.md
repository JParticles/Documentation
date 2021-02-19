# `x-link` 组件

对 `router-link` 的包装, 所有的跳转都采用该组件进行跳转，使用方式如下：

```vue
<x-link to="/">首页</x-link>
```

参数同 `router-link` 一致，不过增加了外部跳转与 `baseRoute` 校验功能。 
