### 3 axios 实例封装

#### 1. 创建实例对象

```ts
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
});

export default {
  get(url: string, params: object) {
    return instance.get(url, { params });
  },
  post(url: string, params: object) {
    return instance.post(url, params);
  }
};
```

#### 2. 拦截器封装

* 请求拦截器

```ts
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Token::' + token;
    }
    return {
      ...config
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
```

* 响应拦截器

```ts
instance.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code === 500001) {
      localStorage.removeItem('token');
      location.href = '/login';
    } else if (data.code != 0) {
      return Promise.reject(data);
    }
    return data.data;
  },
  error => {
    return Promise.reject(error.message);
  }
);
```

##### 应用

* login.tsx

```tsx
export default function Login() {
  const handleClick = () => {
    request
      .post('/login', { username: 'admin', password: '123456' })
      .then(res => {
        const { Authorization, role, userName, id } = res.data;
      })
      .catch(error => console.log('error:', error));
  };
  return (
    <div className='welcome'>
      <p>Login</p>
      <Button onClick={handleClick}>点击事件</Button>
    </div>
  );
}
```

#### 3. 请求 ts 类型定义

* request.ts

```tsx
export default {
  get<T>(url: string, params: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params: object): Promise<T> {
    return instance.post(url, params);
  }
};
```

* login.tsx

```tsx
export default function Login() {
  const handleClick = () => {
    request
      .post<object>('/login', { username: 'admin', password: '123456' })
      .then(res => {
        const { Authorization, role, userName, id } = res.data;
      })
      .catch(error => console.log('error:', error));
  };
  return (
    <div className='welcome'>
      <p>Login</p>
      <Button onClick={handleClick}>点击事件</Button>
    </div>
  );
}
```
