import type { Metadata } from 'next'
import { inter } from '@/fonts'
import '@/styles/globals.scss'

export const metadata: Metadata = {
    title: 'Parmenion Charistos',
    description: "A developer's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
