# Caramel little fox

a project for myself to try some practise.

### TODO

- [x] react context
- [ ] canvas 画扇形，画时钟
- [ ] canvas 画刮刮卡
- [ ] event loop 浏览器和node两种模式下验证
- [ ] 柯里化
- [ ] ssr
- [ ] webpack code spliting
- [ ] treeshaking
- [ ] node 多线程 api
- [ ] debounce
- [ ] react component 渲染顺序
- [ ] import的module是只执行一次嘛？
- [ ] immer

### Q&A

#### react context

- createContext的第一个参数是默认值，但是使用Provider时，value是必填属性，那么创建context时候传的默认值参数有什么意义？

`已验证`
取自官方文档的解释：
创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。

