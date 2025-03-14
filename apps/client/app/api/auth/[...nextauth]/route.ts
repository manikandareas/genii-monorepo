import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!response.ok) {
            return null;
          }

          const data = await response.json();

          if (!data.token || !data.user) {
            return null;
          }

          // Return the user object with the token
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            image: data.user.image,
            token: data.token,
            isAdmin: data.user.is_admin,
            isAlreadyOnboard: data.user.is_already_onboard,
            username: data.user.username,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.token = user.token;
        token.isAdmin = user.isAdmin;
        token.isAlreadyOnboard = user.isAlreadyOnboard;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.token = token.token as string;
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.isAlreadyOnboard = token.isAlreadyOnboard as boolean;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
});

export { handler as GET, handler as POST };
