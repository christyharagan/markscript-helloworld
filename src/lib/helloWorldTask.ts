import {mlTask} from 'markscript-core'
import {FrequencyType} from 'markscript-core'

export class HelloWorldTask {
  @mlTask({
    type: FrequencyType.MINUTES,
    frequency: 1,
    user: 'admin'
  })
  task() {
    xdmp.log('Hello world')
  }
}
