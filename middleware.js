import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en' , 'ar' , 'es' , 'id' , 'it' , 'pt' ],
  // Used when no locale matches
  defaultLocale: 'en'
});
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|ar|es|id|it|pt)/:path*']
};