import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth";


export const options = {
  debug: true,
  session: {
    strategy: 'jwt'
  },

  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile){
        let user = 'normal';

        if(profile.email === process.env.MY_EMAIL){
            user = 'admin'
        }

        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
          roles: user
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },

  callbacks: {
    async jwt({token, user}){
      if(user){
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          roles: user.roles
        }
      }
      return token;
    },

    async session({session, token}){
      if(token){
        session.user = token.user;
      }

      return session;
    }
  }
}

