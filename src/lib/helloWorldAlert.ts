import {mlAlert} from 'markscript-core'

export class HelloWorldAlert {
  @mlAlert({
    scope: '/sampleDir'
  })
  alert(uri: string, content: cts.DocumentNode<any>) {
    xdmp.log('Hello ' + JSON.stringify(content.toObject()))
  }
}
