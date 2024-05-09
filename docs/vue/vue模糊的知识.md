# Vue 模糊的知识概念

**toRaw**

```
import { reactive, toRaw, onMounted } from 'vue'
const data = reactive({ name: "马云禄" })
const rawData = toRaw(data)// 
onMounted(() => {
  console.log(data); // Proxy {name: '马云禄'}
  console.log(rawData); // {name: '马云禄'}
  console.log(data['__v_raw']); // '__v_raw' 是源码中的内容
})
```

**click.stop**

获取实例 getCurrentInstance 

```vue
import {computed,getCurrentInstance } from 'vue';
const instance=getCurrentInstance();
const showSubtitle = computed(() => instance?.props.subtitle || instance?.slots.subtitle);


```
**slot**
```vue
<el-alert v-bind="$attrs">
    <template v-for="(index,name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps||{}" />
    </template>
  </el-alert>
```