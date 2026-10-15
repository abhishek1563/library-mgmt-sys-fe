const AUTH_STORAGE_KEY = 'libsphere.authenticated'

export function isAuthenticated() {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true'
        || localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
}

export function signIn(rememberMe: boolean) {
    signOut()
    const storage = rememberMe ? localStorage : sessionStorage
    storage.setItem(AUTH_STORAGE_KEY, 'true')
}

export function signOut() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    localStorage.removeItem(AUTH_STORAGE_KEY)
}