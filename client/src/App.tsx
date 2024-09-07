import { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Layout } from './components/Layout'
import { useUser } from './hooks'
import { getLayout } from './api'
import { Loader } from './components/Loader'

import './App.css'

function App() {
    const { userId } = useUser()
    // Queries
    const { data, isLoading, error } = useQuery({
        queryKey: [userId],
        queryFn: () => getLayout(userId),
        enabled: !!userId,
    })

    if (isLoading || !userId) {
        return <Loader />
    }

    if (error) {
        return <span>Error while loading!!!</span>
    }

    return (
        <Suspense fallback={<Loader />}>
            <Layout layoutId={data?.layoutId} />
        </Suspense>
    )
}

export default App
