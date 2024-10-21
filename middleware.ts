import { clerkMiddleware } from '@clerk/nextjs/server'

// Protect all routes except the `/api/webhooks/(.*)` route
export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/api/webhooks/(.*)',  // Exclude webhooks from protection
  ],
}
