"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    publisherContactSchema,
    type PublisherContactFormData,
    PUBLISHER_AD_FORMATS,
    PUBLISHER_INDUSTRIES,
    MONTHLY_USER_RANGES,
} from "./contactSchemas";
import {
    SuccessMessage,
    SubmitButton,
    MultiSelectField,
    CommentsField,
} from "./formFields";

export function PublisherContactForm() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<PublisherContactFormData>({
        resolver: zodResolver(publisherContactSchema),
        defaultValues: {
            email: "",
            adFormats: [],
            industries: [],
            monthlyUsers: [],
            comments: "",
        },
    });

    const onSubmit = async (data: PublisherContactFormData) => {
        setLoading(true);
        
        const submissionData = {
            email: data.email,
            adFormats: data.adFormats,
            industries: data.industries,
            monthlyUsers: data.monthlyUsers,
            ...(data.comments && data.comments.trim() ? { comments: data.comments } : {}),
        };
        
        console.log("Publisher Contact Form Data:", submissionData);
        
        await new Promise((r) => setTimeout(r, 1500));
        
        setLoading(false);
        setSuccess(true);
    };

    const handleReset = () => {
        form.reset();
        setSuccess(false);
    };

    if (success) {
        return <SuccessMessage onReset={handleReset} />;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Email address
                                <span className="text-primary ml-1">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                    className="h-10"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="adFormats"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Ad formats
                                <span className="text-primary ml-1">*</span>
                            </FormLabel>
                            <FormControl>
                                <MultiSelectField
                                    options={PUBLISHER_AD_FORMATS}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="industries"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Industries
                                <span className="text-primary ml-1">*</span>
                            </FormLabel>
                            <FormControl>
                                <MultiSelectField
                                    options={PUBLISHER_INDUSTRIES}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="monthlyUsers"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Monthly Active users
                                <span className="text-primary ml-1">*</span>
                            </FormLabel>
                            <FormControl>
                                <MultiSelectField
                                    options={MONTHLY_USER_RANGES}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Comments
                            </FormLabel>
                            <FormControl>
                                <CommentsField
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <SubmitButton loading={loading}>Submit</SubmitButton>
            </form>
        </Form>
    );
}
