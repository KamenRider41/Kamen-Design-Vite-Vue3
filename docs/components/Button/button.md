# Button 按钮
常用操作按钮

## 按钮类型

<div style="margin-bottom:20px;">
    <KMButton color="blue">Primary</KMButton>
    <KMButton color="green">Success</KMButton>
    <KMButton color="gray">Info</KMButton>
    <KMButton color="yellow">Warning</KMButton>
    <KMButton color="red">Danger</KMButton>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <KMButton color="blue">Primary</KMButton>
    <KMButton color="green">Success</KMButton>
    <KMButton color="gray">Info</KMButton>
    <KMButton color="yellow">Warning</KMButton>
    <KMButton color="red">Danger</KMButton>
</template>
```

</details>

## 次要按钮

 <div style="margin-bottom:20px;">
    <KMButton color="blue" plain>Primary</KMButton>
    <KMButton color="green" plain>Success</KMButton>
    <KMButton color="gray" plain>Info</KMButton>
    <KMButton color="yellow" plain>Waring</KMButton>
    <KMButton color="red" plain>Danger</KMButton>
 </div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <KMButton color="blue" plain>Primary</KMButton>
    <KMButton color="green" plain>Success</KMButton>
    <KMButton color="gray" plain>Info</KMButton>
    <KMButton color="yellow" plain>Waring</KMButton>
    <KMButton color="red" plain>Danger</KMButton>
</template>
```

</details>

## 按钮尺寸
 <div style="margin-bottom:20px;">
    <KMButton size="small" plain>Small</KMButton>
    <KMButton size="medium" plain>Medium</KMButton>
    <KMButton size="large" plain>Large</KMButton>
 </div>

 <details>
<summary>展开查看</summary>

```vue
<template>
    <KMButton size="small" plain>Small</KMButton>
    <KMButton size="medium" plain>Medium</KMButton>
    <KMButton size="large" plain>Large</KMButton>
</template>
```

</details>

## 图标按钮

 <div style="margin-bottom:20px;">
    <KMButton color="blue" round plain icon="search">Search</KMButton>
    <KMButton color="green" round plain icon="edit">Edit</KMButton>
    <KMButton color="gray" round plain icon="check">Check</KMButton>
    <KMButton color="yellow" round plain icon="message">Message</KMButton>
    <KMButton color="red" round plain icon="delete">Delete</KMButton>
 </div>
  <div style="margin-bottom:20px;">
    <KMButton color="blue" round plain icon="search"></KMButton>
    <KMButton color="green" round plain icon="edit"></KMButton>
    <KMButton color="gray" round plain icon="check"></KMButton>
    <KMButton color="yellow" round plain icon="message"></KMButton>
    <KMButton color="red" round plain icon="delete"></KMButton>
 </div>

 <details>
<summary>展开查看</summary>

```vue
<template>
    <KMButton color="blue" round plain icon="search">Search</KMButton>
    <KMButton color="green" round plain icon="edit">Edit</KMButton>
    <KMButton color="gray" round plain icon="check">Check</KMButton>
    <KMButton color="yellow" round plain icon="message">Message</KMButton>
    <KMButton color="red" round plain icon="delete">Delete</KMButton>

    <KMButton color="blue" round plain icon="search"></KMButton>
    <KMButton color="green" round plain icon="edit"></KMButton>
    <KMButton color="gray" round plain icon="check"></KMButton>
    <KMButton color="yellow" round plain icon="message"></KMButton>
    <KMButton color="red" round plain icon="delete"></KMButton>
</template>
```

</details>

## 纯色图标

 <div class="flex flex-row">
    <KMButton icon="edit" plain></KMButton>
    <KMButton icon="delete" plain></KMButton>
    <KMButton icon="share" plain></KMButton>
    <KMButton round plain icon="search">搜索</KMButton>
 </div>


<details>
<summary>展开查看</summary>

```vue
<template>
    <KMButton icon="edit" plain></KMButton>
    <KMButton icon="delete" plain></KMButton>
    <KMButton icon="share" plain></KMButton>
    <KMButton round plain icon="search">Search</KMButton>
</template>
```
</details>

## Button 属性

| 属性名 | 描述     | 默认值 |
| ------ | -------- | ------ |
| color  | 按钮颜色 | blue   |
| size   | 按钮大小 | Medium |
| plain  | 按钮主次 | -      |
| icon   | 按钮图标 | -      |