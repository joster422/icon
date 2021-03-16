# icon documentation
- [Repository](https://github.com/joster-dev/icon)
- [Github Package](https://github.com/joster-dev/icon/packages/327210)
- [Demo](https://joster-dev.github.io/icon/)

icon is an [Angular](https://angular.io/) library with dynamic components that contain scalable vector graphics

### icons
- can be scaled up or down to any resolution with no aliasing
- can be graphically customized

### icon stacking
context in which icons appear on top of one another  
can share the same scaling

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
   
## Inputs
`type`
   - type: `string`
   - for: icon selection
   - required

`fill`
   - type: `string | string[]`
   - for: main colors, arranged left to right
   - default: `['FFFFFF']`

`fillRotate`
   - type: `boolean`
   - for: rotate fill by 90°
   - default: `false`

`fillOpacity`
   - type: `number`
   - for: fill transparency
   - default: `1`

`stroke`
   - type: `string | string[]`
   - for: outline colors, arranged left to right
   - default: `['000000']`

`strokeRotate`
   - type: `boolean`
   - for: rotate stroke by 90°
   - default: `false`

`size`
   - type: `<length> | <percentage>`
   - for: width and height
   - default: `'100%'`

`spin`
   - type: `'x' | 'y' | 'z'`
   - for: linear rotation animation 
   - default: `null`
