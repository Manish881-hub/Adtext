"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
    companyName: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    industry: z.string().min(1, {
        message: "Please select an industry.",
    }),
    website: z.string().url({
        message: "Please enter a valid URL.",
    }),
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export default function AdvertiserSignupPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            website: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, type: 'advertiser' }),
            });

            if (response.ok) {
                toast.success("Account created successfully!");
                setSuccess(true);
            } else {
                const data = await response.json();
                toast.error(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Network error.");
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center">
                <Card className="w-full max-w-lg bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center py-12">
                    <CardContent className="space-y-6">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <CardTitle className="text-2xl">Campaign Account Created</CardTitle>
                        <CardDescription className="text-lg">
                            We've sent a confirmation link to your email address.
                            <br />
                            Your ad dashboard is getting ready!
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-20 flex justify-center">
            <Card className="w-full max-w-lg bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Create your advertiser account</CardTitle>
                    <CardDescription>Reach high-intent audiences AI conversations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Acme Inc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Industry</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select industry" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="saas">SaaS / B2B</SelectItem>
                                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                                <SelectItem value="finance">Finance</SelectItem>
                                                <SelectItem value="media">Media & Entertainment</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://company.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Work Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@company.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-10 text-base font-bold shadow-lg shadow-primary/20" disabled={loading}>
                                {loading ? "Creating account..." : "Start Campaign"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-center text-sm text-neutral-500">
                    Already have an account? <span className="text-primary hover:underline ml-1 cursor-pointer">Log in</span>
                </CardFooter>
            </Card>
        </div>
    );
}
