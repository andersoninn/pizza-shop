import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1>Hello World!</h1>

         <Button>
            <Link href="/sign-up">Cadastro</Link>
         </Button>
         <Button>
            <Link href="/sign-in">Login</Link>
         </Button>
      </main>
   );
}
