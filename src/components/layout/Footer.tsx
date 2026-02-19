import Link from "next/link";


export function Footer() {
    return (
        <footer className="py-8 px-6 lg:px-12 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Adtext
                </Link>

                <nav className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6 text-sm text-muted-foreground">
                    <Link href="/publishers" className="hover:text-foreground transition-colors">Publishers</Link>
                    <Link href="/advertisers" className="hover:text-foreground transition-colors">Advertisers</Link>
                    <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                    <a href="mailto:adtextus@gmail.com" className="hover:text-foreground transition-colors">Get in touch</a>
                </nav>
            </div>
        </footer>
    );
}