import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import { connectToDB } from "../../../lib/util";
import {User} from "../../../lib/models";


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
        token.course = user.course;
        token.Subscription = user.Subscription;
        token.state = user.state;
        token.phone = user.phone;
        token.dob = user.dob;
        token.gender = user.gender;
        token.bio = user.bio;
        token.refers = user.refers;
        token.refercode = user.refercode;
        token.social = user.social;



      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.id = token.id;
        session.course = token.course;
        session.Subscription = token.Subscription;
        session.state = token.state;
        session.phone = token.phone;
        session.dob = token.dob;
        session.gender = token.gender;
        session.bio = token.bio;
        session.refercode = token.refercode;
        session.refers = token.refers;
        session.social = token.social;

      }
      return session;
    },
  },
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 2 minutes in seconds
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
