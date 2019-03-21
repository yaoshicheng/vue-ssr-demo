import createApp  from './app'

export default (context) =>{
  let {app,store,router} = createApp(context);
  // router.push(context.url)
  // 找到所有 asyncData 方法
  let components = app.components;
  let asyncDataArr = []; // promise集合
  for (let key in components) {
    if (!components.hasOwnProperty(key)) continue;
    let component = components[key];
    if (component.asyncData) {
      asyncDataArr.push(component.asyncData({store})) // 把store传给asyncData
    }
  }
  // 所有请求并行执行
  return Promise.all(asyncDataArr).then(() => {
    // context.state 赋值成什么，window.__INITIAL_STATE__ 就是什么
    context.state = store.state;
    return app;
  });
};