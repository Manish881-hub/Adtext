"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
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
// import { useRouter } from "next/navigation"; // Not used in success state change

const formSchema = z.object({
    appName: z.string().min(2, {
        message: "App name must be at least 2 characters.",
    }),
    appType: z.string().min(1, {
        message: "Please select an app type.",
    }),
    url: z.string().url({
        message: "Please enter a valid URL.",
    }),
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export default function SignupPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            appName: "",
            url: "",
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
                body: JSON.stringify(values),
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
                        <CardTitle className="text-2xl">Check your email</CardTitle>
                        <CardDescription className="text-lg">
                            We've sent a confirmation link to your email address.
                            <br />
                            The publisher dashboard is coming soon!
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
                    <CardTitle className="text-2xl">Create your publisher account</CardTitle>
                    <CardDescription>Start monetizing your AI app in minutes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                            <FormField
                                control={form.control}
                                name="appName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>App Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="My AI App" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="appType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>App Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="chat">Chat App</SelectItem>
                                                <SelectItem value="image">Image Generation</SelectItem>
                                                <SelectItem value="search">AI Search</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="url"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website / App URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://myapp.com" {...field} />
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
                                        <FormLabel>Email</FormLabel>
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
                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 h-10 text-base" disabled={loading}>
                                {loading ? "Creating account..." : "Create account"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-center text-sm text-neutral-500">
                    Already have an account? <span className="text-indigo-600 hover:underline ml-1 cursor-pointer">Log in</span>
                </CardFooter>
            </Card>
        </div>
    );
}
