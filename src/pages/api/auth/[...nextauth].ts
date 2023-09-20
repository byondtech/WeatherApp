import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers/index";

export const authOptions: NextAuthOptions = {
    
    providers: [
        GoogleProvider ({
            clientId: process.env.NEXT_GOOGLE_ID as string,
            clientSecret: process.env.NEXT_GOOGLE_SECRET as string
        })
    ] as Provider[],
    secret:process.env.SECRET,
    theme: {
        colorScheme: "dark",
      },
      callbacks: {
        
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        },
      },
}
export default NextAuth(authOptions)
