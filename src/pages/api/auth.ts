// Create a new file at: src/pages/api/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from 'next-auth/middleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // This will handle the OAuth flow
  return withAuth(req, res, {
    providers: [
      {
        id: 'github',
        name: 'GitHub',
        type: 'oauth',
        version: '2.0',
        scope: 'repo',
        params: { grant_type: 'authorization_code' },
        accessTokenUrl: 'https://github.com/login/oauth/access_token',
        requestTokenUrl: 'https://github.com/login/oauth/authorize',
        authorizationUrl: 'https://github.com/login/oauth/authorize?scope=repo',
        profileUrl: 'https://api.github.com/user',
        async profile(profile) {
          return {
            id: profile.id,
            name: profile.name || profile.login,
            email: profile.email,
            image: profile.avatar_url,
          };
        },
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    ],
    secret: process.env.SECRET,
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.accessToken = user.accessToken;
        }
        return token;
      },
      async session(session, token) {
        session.accessToken = token.accessToken;
        return session;
      },
    },
  });
}