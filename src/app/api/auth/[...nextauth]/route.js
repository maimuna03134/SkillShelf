import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Mock users for read-only access
const MOCK_USERS = {
  'admin@skillshelf.com': {
    id: 'mock-admin',
    email: 'admin@skillshelf.com',
    password: 'admin123',
    name: 'Mock Admin',
    role: 'admin',
    isMock: true
  },
  'user@skillshelf.com': {
    id: 'mock-user',
    email: 'user@skillshelf.com',
    password: 'user123',
    name: 'Mock User',
    role: 'user',
    isMock: true
  }
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check mock users first
        const mockUser = MOCK_USERS[credentials.email];
        if (mockUser && mockUser.password === credentials.password) {
          return {
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name,
            role: mockUser.role,
            isMock: true
          };
        }

        // Check real users from backend
        try {
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });

          if (response.ok) {
            const user = await response.json();
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              isMock: false
            };
          }
        } catch (error) {
          console.error('Backend auth error:', error);
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.isMock = user.isMock;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.isMock = token.isMock;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
