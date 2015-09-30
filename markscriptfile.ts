import {BuildOptions} from 'markscript-core'
import {HelloWorld} from './src/lib/databaseModel'
import {RunOptions} from 'markscript-project'
import {Server} from 'markscript-koa'

const COMMON = {
  appName: 'markscript-helloworld',
  ml: {
    port: 8008,
    host: 'localhost',
    user: 'admin',
    password: 'passw0rd'
  },
  koa: {
    host: 'localhost',
    port: 8080
  }
}

export const buildOptions: BuildOptions = {
  database: {
    host: COMMON.ml.host,
    httpPort: COMMON.ml.port,
    adminPort: 8001,
    configPort: 8002,
    user: COMMON.ml.user,
    password: COMMON.ml.password,
    modelObject: new HelloWorld(COMMON.appName, COMMON.ml.host, COMMON.ml.port),
    modules: './src/lib/**/*.ts'
  },
  middle: {
    host: COMMON.koa.host,
    port: COMMON.koa.port
  }
}

export const runOptions: RunOptions = {
  database: {
    host: COMMON.ml.host,
    port: COMMON.ml.port,
    name: COMMON.appName + '-content',
    user: COMMON.ml.user,
    password: COMMON.ml.password,
  },
  middle: {
    host: COMMON.koa.host,
    port: COMMON.koa.port,
    fileServerPath: '../client'
  }
}

export const tasks = {
  helloWorld: function(server:Server){
    server.getService
  }
}
