// import { GoogleTagManager } from '@next/third-parties/google'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'
import ThemeProvider from '@/ui/header/ThemeProvider'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* <GoogleTagManager gtmId='' /> */}

			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SkipToContent />
					<Announcement />
					<Header />
					<main id="main-content" tabIndex={-1}>
						{children}
					</main>
					<Footer />
					<Analytics />
					<SpeedInsights />
					<VisualEditingControls />
				</ThemeProvider>
			</body>
		</html>
	)
}
