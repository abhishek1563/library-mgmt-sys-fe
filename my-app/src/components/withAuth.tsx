import { useEffect, useState, type ComponentType } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { isAuthenticated } from '../utils/auth'

function withAuth<Props extends object>(Component: ComponentType<Props>) {
    function AuthenticatedComponent(props: Props) {
        const navigate = useNavigate()
        const [authorized, setAuthorized] = useState(false)

        useEffect(() => {
            if (!isAuthenticated()) {
                void navigate({ to: '/login', replace: true })
                return
            }

            setAuthorized(true)
        }, [navigate])

        if (!authorized) return null

        return <Component {...props} />
    }

    AuthenticatedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`

    return AuthenticatedComponent
}

export default withAuth