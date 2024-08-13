import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Dont automatically select the last Google Account that was used
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in
    async singIn({ profile }) {
      // 1. Connect to the database
      // 2. Check if user exists
      // 3. if not, create user
      // 4. Return true to allow sign in
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      //1. Get the user from the database
      //2. Assign user id from the session
      //3. Return session
    },
  },
};
