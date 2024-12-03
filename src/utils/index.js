// 封装 sessionStorage 访问逻辑
export const storageHandler = {
  // 存储回调函数，用于监听 sessionStorage 的变化
  _onChange: null, // 用于存储回调函数

  // 自定义 setItem，修改 sessionStorage 的数据时触发监听
  setItem: (key, value) => {
    sessionStorage.setItem(key, value); // 调用原生 sessionStorage 的 setItem

    // 当数据发生变化时，触发 onChange 回调
    if (storageHandler._onChange) {
      storageHandler._onChange(key, value); // 执行回调
    }
  },

  // 自定义 getItem，从 sessionStorage 获取数据
  getItem: (key) => {
    return sessionStorage.getItem(key); // 返回 sessionStorage 中的值
  },

  // 设置监听器回调
  onChange: (callback) => {
    storageHandler._onChange = callback; // 注册回调函数
  },

  // 使用自定义的 storageHandler 来操作 sessionStorage

  //   // 设置监听器
  //   storageHandler.onChange((key, value) => {
  //     console.log(`sessionStorage changed: ${key} = ${value}`);
  //   });

  //   // 修改 sessionStorage 数据
  //   storageHandler.setItem('user', 'John Doe');
  //   storageHandler.setItem('role', 'admin');

  //   // 获取 sessionStorage 数据
  //   console.log('User:', storageHandler.getItem('user')); // 输出: User: John Doe
  //   console.log('Role:', storageHandler.getItem('role')); // 输出: Role: admin
};
