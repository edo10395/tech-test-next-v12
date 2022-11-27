import { getSession } from 'next-auth/react';

export const requiredAuth = async (context, cb) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/unauthenticated',
        permanent: false,
      },
    };
  }
  // return cb({ session });
  return cb({ session });
};
