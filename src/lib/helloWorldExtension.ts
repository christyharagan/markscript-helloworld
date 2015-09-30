import {mlExtension} from 'markscript-core'
import {Extension, Context, Parameters} from 'markscript-core'
import * as helloWorldModule from './helloWorldModule'

@mlExtension()
export class HelloWorldExtension implements Extension {
  get(context: Context, params: Parameters) {
    return helloWorldModule.sayHello(<string>params['world'])
  }
}
