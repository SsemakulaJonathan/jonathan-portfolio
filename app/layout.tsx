import './globals.css'
import { Manrope, Noto_Sans } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto-sans' })

export const metadata = {
  title: 'Jonathan Ssemakula',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSans.variable}`}>
      <body>
        <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden font-sans">
          {children}
        </div>
      </body>
    </html>
  )
}
