import { group, run, bench } from 'mitata'
import { RegExpRouter as NewRegExpRouter } from './hono/src/router/reg-exp-router/router.ts'
import { RegExpRouter as OldRegExpRouter } from './2285/src/router/reg-exp-router/router.ts'

for (let i = 0; i < 15; ++i) {bench('noop', () => { })}

function createOld() {
    const router = new OldRegExpRouter()
    registerRoutes(router)
    return router.match
}

function createNew() {
    const router = new NewRegExpRouter()
    registerRoutes(router)
    return router.match
}

const routes = [
    ['PUT', '/user/:id/comments'],
    ['GET', '/user/:id'],
    ['GET', '/user'],
    ['GET', '/'],
    ['GET', '/comments/*']
]

function registerRoutes(router) {
    for (let i = 0, { length } = routes; i < length; ++i)
        {router.add(...routes[i], i)}

    // Initialize the match function
    router.match('GET', '/')
}

group('Startup time', () => {
    bench('Old', createOld)
    bench('New', createNew)
})

group('Performance', () => {
    const matchOld = createOld()
    const fn1 = (route) => matchOld(...route)

    const matchNew = createNew()
    const fn2 = (route) => matchNew(...route)

    bench('Old', () => routes.map(fn1))
    bench('New', () => routes.map(fn2))
})

run()