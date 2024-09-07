import { lazy } from 'react'

// TODO we can also do server side render to render the Layout in server and directly
// send html template to browser or UI rendering agent
const Layout1 = lazy(() => import('./Layout1.tsx'))
const Layout2 = lazy(() => import('./Layout2.tsx'))
const Layout3 = lazy(() => import('./Layout3.tsx'))

export function Layout({ layoutId }: { layoutId: string }) {
    switch (layoutId) {
        case '1':
            return <Layout1 />
        case '2':
            return <Layout2 />
        case '3':
            return <Layout3 />
        default: {
            throw new Error('Unsupported Layout Id')
        }
    }
}
