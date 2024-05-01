import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { connectToDB } from "@/app/lib/util";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";

async function login(credentials) {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("Wrong Credentials");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Wrong Credentials");
    console.log(user);
    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export const authOptions = {
  pages: {
    singIn: "/login",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.first_name;
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.first_name;
        session.user.email = token.email;
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
