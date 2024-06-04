import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
const onlyAdmin = ['admin'];
const authPage = ['auth'];

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = [], ) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split('/')[1];
    if(requireAuth.includes(pathname)) {
      const token =  await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

      // This checks if a token is present and if not, redirects the user to the authentication page.
      if(!token && !authPage.includes(pathname)){
        const url = new URL('/auth/',req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if(token){
        if(authPage.includes(pathname)){
          return NextResponse.redirect(new URL('/',req.url));
        }
      }
  
      if(token?.role !== "admin" && onlyAdmin.includes(pathname)){
        return NextResponse.redirect(new URL('auth',req.url));
      }
      
      
    }
    return middleware(req, next);
  }
}