### 2.0.0 *(2017.xx.xx)*
 - **升级到 `2.0.0` 并改名为 `JParticles`。**
 - **新增特效： `waveLoading` 模拟进度条加载。**
 - 所有特效：增加 `onDestroy()` 方法。
 - 所有特效：事件支持链式操作。
 - particle: 新增 `lineShape` 参数，定义粒子的形状效果。
 - particle: 新增 `parallax` 参数，视差效果。
 - particle: 增加陀螺仪特性，为定位点和视差效果。
 - particle：增强 `range` 和 `proximity` 参数支持 `(0, 1)` 的传值。
 - particle: 修改原来的 `distance` 参数为更接近词意的 `proximity`。
 - wave: 新增 `setOptions()` 方法。
 - wave: 删除原来的 `setOffsetTop()` 方法。
 - wave: 修改原来的 `stroke` 参数为更一致性的 `line`。

### 延误说明 *(2016.11.28)*

实在对不起，自从11月搬家花了一个周末的时间，接下来工作转到另一个事业部，得以工作等事为重，学习 react 等，耽误了 Particleground.js 的开发。下次更新会把 Particleground.js 的粒子特效加上视差效果，增加QQ登录背景效果，即低多边形 Delaunay 三角的实现，当然学习怎么实现 Delaunay 三角算法可能也需要点时间。还得耽误一段时间，实在抱歉。

### 1.1.0 *(2016.10.31)*

- 增加最大最小速度（`maxSpeed`，`minSpeed`），删除原有只是表示最大速度（`speed`）的API。
- 修改最大最小半径API名称。
- 修改粒子特效距离API名称（`dis`）为全称（`distance`）。

### 1.0.1 *(2016.10.16)*

- 修复IE9以下浏览器报错。

### 1.0.0 *(2016.10.14)*

- `Particleground.js v1.0.0` 诞生啦!
- 提供粒子无序运动，波浪运动，雪花飘落三种特效！