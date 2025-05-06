import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes for sign-in and sign-up
const isPublicRoute = createRouteMatcher(['/', '/api/webhooks/clerk', '/api/webhooks/stripe']);

export default clerkMiddleware((auth, request) => {
  // If the route is not public, protect it with Clerk's authentication
  if (!isPublicRoute(request)) {
    const user = auth();
    if (!user) {
      // Redirect the user to the sign-in page if not authenticated
      return Response.redirect(new URL("/sign-in", request.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
