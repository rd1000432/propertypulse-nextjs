import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

// Get user from the session
export const getSessionUser = async () => {
  // get server session
  const session = await getServerSession(authOptions);

  // check it
  if (!session || !session.user) {
    return null;
  }
  // retutn user and user id
  return {
    user: session.user,
    userId: session.user.id,
  };
};
