# Icon Documentation
- available on [Github ](https://github.com/joster-dev/icon/packages/327210) version 0.0.13
- generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2

## About
- dynamic components that contain scalable vector graphics

### Icons
- can be scaled up or down to any resolution with no aliasing
- can be graphically customized

### Icon stacking
- context in which icons appear on top of one another
- can share the same scaling

## Getting Started
1. obtain
   -  `npm install @joster-dev/icon --save`
1. import
   - `import { IconModule } from '@joster-dev/icon'` 
1. update
   - `imports: [..., IconModule]`
   
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
