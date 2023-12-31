import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import "@/styles/globals.css"
export function generateStaticParams() {
  return [{locale: 'uz'}, {locale: 'ru'}];
}
 
export default async function RootLayout({children, params: {locale}}:any) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <head>
        <title>WEE BUILD</title>
        <meta name="description" content="WEE BUILD - repairing website made with next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}