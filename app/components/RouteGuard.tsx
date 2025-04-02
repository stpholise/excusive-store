'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import  { useLayoutEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface RouteGuardProps { 
  children: React.ReactNode
  protectedRoutes?: string[]
  authRoutes?:string[]
  adminRoutes?: string[]
}


const RouteGuard = ({ 
  children, 
  protectedRoutes = ['/wishlist', '/cart', '/account',],
  adminRoutes = ['/studio'],
  authRoutes = ['/login', '/signup']
}: RouteGuardProps) => {

  const router = useRouter()
  const pathname = usePathname()
  const isAuthenticated = useSelector((state:  RootState) => state.user.isAuthenticated)
  const user = useSelector((state:  RootState) => state.user.user) 

  
  useLayoutEffect(() => {
    //check current routes
    const isProtectedRoute = protectedRoutes.some(route => 
      pathname.startsWith(route)
    ) 
     const isAdminRoute = adminRoutes.some(route =>
      pathname.startsWith(route)
    ) 
    const isAuthRoute = authRoutes.includes(pathname)


    if (!isAuthenticated) {
      if (isProtectedRoute || isAdminRoute) {
        // Redirect unauthenticated users trying to access protected or admin routes
        const redirectUrl = new URL('/signup', window.location.origin)
        redirectUrl.searchParams.set('from', pathname)
        router.push(redirectUrl.toString())
      }
    } else {
      // Handle authenticated users
      if (isAuthRoute) {
        // Redirect away from auth routes if already logged in
        router.push(user?.role === 'admin' ? '/studio' : '/')
      } else if (isAdminRoute && user?.role !== 'admin') {
        // Block non-admin users from admin routes
        router.push('/')
      }
    }

    // if (adminRoutes && isAuthenticated && user?.role === 'admin'){
    //   router.push('/studio')
    // }



 

    // if (isProtectedRoute && !isAuthenticated) {
    //   router.push(`/login?from=${encodeURIComponent(pathname)}`)
    // }
    
    // if (isAuthRoute && isAuthenticated) {
    //   router.push('/')
    // }
  }, [isAuthenticated, pathname, router, protectedRoutes, authRoutes, user, adminRoutes])

  return ( 
    <>{children}</>
  )
}

export default RouteGuard