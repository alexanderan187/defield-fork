import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { AuthProvider } from '@/components/auth-provider';
import { SessionProvider } from '@/components/session-provider';
import { CoachProvider } from '@/components/coach-provider';

export const metadata: Metadata = {
  title: 'FieldSync',
  description: 'Streamline your team practice session management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <AuthProvider>
          <CoachProvider>
            <SessionProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  {children}
                </main>
              </div>
              <Toaster />
            </SessionProvider>
          </CoachProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
