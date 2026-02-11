"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Mock toast hook
const useToast = () => ({
    toast: ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
        console.log(`[Toast ${variant || 'default'}]: ${title} - ${description}`);
        alert(`${title}\n${description}`);
    }
});

// Mock Supabase & Lovable client
const supabase = {
    auth: {
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
        getSession: async () => ({ data: { session: null } }),
        signInWithOtp: async ({ email }: { email: string }) => {
            console.log("Mock sign in with email:", email);
            return { error: null };
        }
    }
};

const lovable = {
    auth: {
        signInWithOAuth: async (provider: string) => {
            console.log("Mock sign in with provider:", provider);
            return { error: null };
        }
    }
}


const Login = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    // Removed useEffect for auth state change since we are mimicking it

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            const result = await lovable.auth.signInWithOAuth("google");

            if (result.error) {
                toast({
                    title: "Authentication Error",
                    description: "Failed to sign in with Google.",
                    variant: "destructive",
                });
            } else {
                // Simulate success
                setTimeout(() => {
                    toast({
                        title: "Success",
                        description: "Google login simulated.",
                    });
                    router.push("/");
                }, 1000);
            }
        } catch (error) {
            toast({
                title: "Authentication Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            const { error } = await supabase.auth.signInWithOtp({
                email
            });

            if (error) {
                toast({
                    title: "Error",
                    description: "Simulation error",
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Check your email",
                    description: "We've simulated sending a magic link to sign in.",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left side - Branding */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 via-background to-accent/10 flex-col justify-between p-12"
            >
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Adtext
                </Link>

                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-foreground">
                        Monetize your AI apps with native ads
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of publishers and advertisers using Adtext to reach engaged audiences through conversational AI.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-8">
                        <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-primary">500M+</div>
                            <div className="text-sm text-muted-foreground">Monthly impressions</div>
                        </div>
                        <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border">
                            <div className="text-2xl font-bold text-primary">10x</div>
                            <div className="text-sm text-muted-foreground">Higher engagement</div>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    © 2026 Adtext. All rights reserved.
                </p>
            </motion.div>

            {/* Right side - Login Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2 flex items-center justify-center p-8"
            >
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex justify-center">
                        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 12H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            Adtext
                        </Link>
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
                        <p className="text-muted-foreground">Sign in to your account to continue</p>
                    </div>

                    {/* Google Sign In */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full h-12 text-base font-medium"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                        </div>
                    </div>

                    {/* Email Sign In */}
                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send magic link"}
                        </Button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground">
                        By signing in, you agree to our{" "}
                        <Link href="/docs/privacy" className="text-primary hover:underline">
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/docs" className="text-primary hover:underline">
                            Terms of Service
                        </Link>
                    </p>

                    <div className="text-center">
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            ← Back to home
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;