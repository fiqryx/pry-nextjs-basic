import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server'


// applies this middleware only to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
}

const publicRoutes = [
    '/',
    '/sign-in',
    '/sign-up',
    '/reset-password'
]

export async function middleware(req: NextRequest) {
    const key = process.env.AUTH_COOKIE_KEY as string
    const cookie = await cookies()
    const token = cookie.get(key)

    // remove this if already index page
    if (req.nextUrl.pathname === '/' && !token?.value) {
        return NextResponse.redirect(new URL('/sign-in', req.url))
    }

    // redirect to /sign-n if not authenticated
    if (!publicRoutes.includes(req.nextUrl.pathname) && !token?.value) {
        const response = NextResponse.redirect(new URL('/sign-in', req.url));

        return response;
    }

    // redirect if authenticated on public route
    if (publicRoutes.includes(req.nextUrl.pathname) && token?.value) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
}