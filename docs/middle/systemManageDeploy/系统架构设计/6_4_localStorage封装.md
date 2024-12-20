### 5 localStorage 封装

[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

* storage.ts

```ts
export default {
  /**
   * storage 存储
   * @params key {string} 参数名称
   * @params value {string | number | object} 写入值
   */
  set(key: string, value: string | number | object) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * storage 读取
   * @params key {string} 参数名称
   * @returns storage 值
   */
  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return '';
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
  /**
   * 删除 storage 值
   * @params key {string} 参数名称
   */
  remove(key: string) {
    localStorage.removeItem(key);
  },
  /**
   * 清空 storage 值
   */
  clear() {
    localStorage.clear();
  }
};
```

#### 应用

```tsx
export default function Welcome() {
  const handleStorage = (type: number) => {
    switch (type) {
      case 1:
        storage.set('age', 30);
        storage.set('user', { name: 'Lucy', gender: '1' });
        break;
      case 2:
        console.log(storage.get('age'));
        console.log(storage.get('user'));
        break;
      case 3:
        console.log(storage.remove('age'));
        break;
      case 4:
        storage.clear();
        break;
    }
  };

  return (
    <div className='welcome'>
      <p>Welcome</p>
      <Button onClick={() => handleStorage(1)}>写入值</Button>
      <Button onClick={() => handleStorage(2)}>读取值</Button>
      <Button onClick={() => handleStorage(3)}>删除值</Button>
      <Button onClick={() => handleStorage(4)}>清空所有</Button>
    </div>
  );
}
```