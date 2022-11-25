import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../prisma/db";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        //find user di db
        const tblUser = await db.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        //cek user ada di db
        if (tblUser) {
          if (tblUser.password == credentials.password) {
            return tblUser;
          }
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
