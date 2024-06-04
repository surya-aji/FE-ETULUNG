import { NextResponse } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(middleware: any) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, ["admin", "user"])