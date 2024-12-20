### 4 Loading 组件封装

#### 1. 方案一

* loading > loading.tsx

```tsx
import { Spin } from 'antd';
import './loading.less';

export default function Loading({ tip = 'Loading' }: { tip?: string }) {
  return (
    <Spin tip={tip} size='large' className='request-loading'>
      <div className='content' />
    </Spin>
  );
}
```

```less
#loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
```

* loading > index.tsx

```tsx
import ReactDOM from 'react-dom/client';
import Loading from './loading';

let count = 0;
export const showLoading = () => {
  if (count === 0) {
    const loading = document.createElement('div');
    loading.setAttribute('id', 'loading');
    document.body.appendChild(loading);

    ReactDOM.createRoot(loading).render(<Loading />);
  }
  count++;
};

export const hideLoading = () => {
  if (count < 0) return;
  count--;
  if (count === 0) {
    document.body.removeChild(document.getElementById('loading'));
  }
};

```

#### 2. 方案二（推荐）

[iconfont](https://www.iconfont.cn/)

* index.html

```tsx
<style>
  .loading {
    animation: rotate linear 1.5s infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div id="loading" style="display: none">
  <svg
    t="1705461786149"
    class="icon loading"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4262"
    width="46"
    height="46"
  >
    <path
      d="..."
      fill="#1677ff"
      p-id="4263"
    ></path>
  </svg>
  <p>Loading...</p>
</div>
```

* loading > index.tsx

```tsx
import Loading from './loading';
import './loading.less';

let count = 0;
export const showLoading = () => {
  if (count === 0) {
    const loading = document.getElementById('loading');
    loading?.style.setProperty('display', 'flex');
  }
  count++;
};

export const hideLoading = () => {
  count--;
  if (count === 0) {
    const loading = document.getElementById('loading');
    loading?.style.setProperty('display', 'none');
  }
};
```