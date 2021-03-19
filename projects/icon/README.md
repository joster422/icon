# icon
icon is an [Angular](https://angular.io/) library with dynamic components that contain scalable vector graphics
- [Repository](https://github.com/joster-dev/icon)
- [Github Package](https://github.com/joster-dev/icon/packages/327210)
- [Demo](https://joster-dev.github.io/icon/)

## getting started
update your `package.json`
```bash
npm install @joster-dev/icon --save
```
import the module
```diff
+ import { IconModule } from '@joster-dev/icon';

@NgModule({
  imports: [
+    IconModule
  ],
})
```

## icon component
*can be scaled up or down to any resolution with no aliasing*

*can be graphically customized*

input **`fill`** expects `string | string[]` defaults to `['FFFFFF']`
- for main colors, arranged left to right

input **`fillRotate`** expects `boolean` defaults to `false`
- for rotate fill by 90°

input **`fillOpacity`** expects `number` defaults to `1`
- for fill transparency

input **`stroke`** expects `string | string[]` defaults to `['000000']`
- for outline colors, arranged left to right

input **`strokeRotate`** expects `boolean` defaults to `false`
- for rotate stroke by 90°

input **`size`** expects `<length> | <percentage>` defaults to `'100%'`
- for scaling width and height

input **`spin`** expects `'x' | 'y' | 'z'`
- for linear rotation animation 

**required** input **`type`** expects `string`
- for icon selection
## icon-stack component
*can contain icons which will appear on top of one another*

*can horizontally and vertically center contained icons*

input **`size`** expects `<length> | <percentage>` defaults to `'100%'`
- for scaling width and height of all contained icons
