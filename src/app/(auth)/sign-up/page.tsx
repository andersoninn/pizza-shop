'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Page() {
   const singUpForm = z.object({
      email: z.string().email(),
   });

   type SignUpForm = z.infer<typeof singUpForm>;

   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<SignUpForm>();

   async function handleSignIn(data: SignUpForm) {
      try {
         await new Promise((resolve) => setTimeout(resolve, 2000));

         // toast.success('Enviamos um link de autenticação para seu e-mail.', {
         //    action: {
         //       label: 'Reenviar',
         //       onClick: () => handleSignIn(data),
         //    },
         // });
      } catch {
         toast.error('Credenciais invalidas');
      }
   }

   return (
      <>
         <div className="p-8">
            <Button variant="ghost" className="absolute right-4 top-8">
               <Link href="/sign-in">Novo estavalecimento</Link>
            </Button>
            <div className="w-[350px] flex flex-col justify-center gap-6">
               <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                     Criar conta grátis
                  </h1>
                  <p className="text-sm text-muted-foreground">
                     Seja um parceiro e comece suas vendas!
                  </p>
                  <form
                     onSubmit={handleSubmit(handleSignIn)}
                     className="space-y-4"
                  >
                     <div className="space-y-2">
                        <Label htmlFor="email">Seu e-mail</Label>
                        <Input id="email" type="email" {...register('email')} />
                     </div>
                     <Button
                        disabled={isSubmitting}
                        className="w-full"
                        type="submit"
                     >
                        Finalizar cadastro
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}
