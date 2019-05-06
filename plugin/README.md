# nativescript-vue-fab

A Vue component that shows Material Design Fab button

## Installation

```js
npm i --save vue-clock-simple
```

```typescript
import ButtonPlugin from 'nativescript-material-button/vue';
import CardViewPlugin from 'nativescript-material-cardview/vue';
import FabPlugin from "nativescript-vue-fab"
Vue.use(ButtonPlugin);
Vue.use(CardViewPlugin);
Vue.use(FabPlugin)
```

You also need to import the css style from your app style file. The reason is that this way you can easily override any css class.

```css
@import '../node_modules/nativescript-vue-fab/main';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<Fab
    title="test"
    iconClass="mdi"
    :icon="'mdi-plus' | fonticon"
    :iconOn="'mdi-share-variant' | fonticon"
    @tap="onTap('main', $event)"
>
    <FabItem
        title="test6"
        iconClass="mdi"
        icon="e"
        color="red"
        @tap="onTap('test6', $event)"
    />
    <FabItem
        title="test5"
        iconClass="mdi"
        icon="d"
        color="red"
        @tap="onTap('test5', $event)"
    />
    <FabItem
        title="test4"
        iconClass="mdi"
        icon="c"
        color="red"
        @tap="onTap('test4', $event)"
    />
    <FabItem
        title="test3"
        iconClass="mdi"
        icon="b"
        color="red"
        @tap="onTap('test3', $event)"
    />
    <FabItem
        title="test"
        iconClass="mdi"
        icon="a"
        color="blue"
        @tap="onTap('test', $event)"
    />
</Fab>
```
