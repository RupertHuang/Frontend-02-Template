###setIntreval

```
setInterval(() => {}, 16)
```
不可控, 有可能造成积压，执行不准确

###setTimeout

```
let tick = () => {
    setTimeout(tick, 16)
}
```
只执行一次需要函数名

###requestAnimationFrame

```
let tick = () =>{
    let handler =  requestAnimationFrame(tick);
    cancelAnimationFrame(handler);
}
```
推荐使用
