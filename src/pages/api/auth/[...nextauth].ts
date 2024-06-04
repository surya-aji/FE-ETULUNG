import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth/next";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response: any = await fetch("http://localhost:3001/api/users/login", {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await response.json();
        console.log(user)
        if (user && user.message === 'success') {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user } : any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.access_token = user.token;
      }
      console.log(token);
      return token;
    },
    async session({ session, token }: any) {
      if (token && "email" in token) {
        session.user.email = token.email
      }
      if ("name" in token) {
        session.user.name = token.name
      }
      if ("phone" in token) {
        session.user.phone = token.phone
      }
      if ("role" in token) {
        session.user.role = token.role
      }
      if ("access_token" in token) {
        session.user.access_token = token.access_token
      }
      console.log(session.user.access_token);
      return session;
    },
  },

  pages: {
    signIn: "/auth",
  },
};
export default NextAuth(authOptions);
