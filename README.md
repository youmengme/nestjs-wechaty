# nestjs-wechaty
> 在`NestJs`中使用`wechaty-decorator`

可以使用装饰器方便的处理不同类型的事件

## Install
```bash
npm install nestjs-wechaty
# or
yarn add nestjs-wechaty
# or
pnpm add nestjs-wechaty
```

## Example

```typescript
/**
 * nestjs配置方法
 * filePath: ./src/app.module.ts
 * /

import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {WechatyModule} from 'nestjs-wechaty'

@Module({
  imports: [
    WechatyModule.register({
      botConfig: {
        name: 'YOUER_BOT_NAME',
        puppet: 'wechaty-puppet-wechat'
      },
      plugins: [
        // xxx
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

```

## wechaty-decorator使用方法
[wechaty-decorator](https://www.npmjs.com/package/wechaty-decorator)
