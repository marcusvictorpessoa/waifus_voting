import { headers } from 'next/headers';
import Homepage from './homepage';

export default async function Home() {

  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || 'IP não identificado';
  const userAgent = headersList.get('user-agent') || 'Desconhecido';

  console.log(`[ACESSO HOME] IP: ${ip} | Device: ${userAgent}`);

  return <Homepage />;
}
