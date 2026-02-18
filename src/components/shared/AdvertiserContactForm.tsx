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
    advertiserContactSchema,
    type AdvertiserContactFormData,
    ADVERTISER_INDUSTRIES,
} from "./contactSchemas";
import {
    SuccessMessage,
    SubmitButton,
    MultiSelectField,
    CommentsField,
    PhoneInputField,
} from "./formFields";

export function AdvertiserContactForm() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<AdvertiserContactFormData>({
        resolver: zodResolver(advertiserContactSchema),
        defaultValues: {
            email: "",
            phone: "",
            industries: [],
            comments: "",
        },
    });

    const onSubmit = async (data: AdvertiserContactFormData) => {
        setLoading(true);
        
        const submissionData = {
            email: data.email,
            industries: data.industries,
            ...(data.phone && data.phone.trim() ? { phone: data.phone } : {}),
            ...(data.comments && data.comments.trim() ? { comments: data.comments } : {}),
        };
        
        console.log("Advertiser Contact Form Data:", submissionData);
        
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                Phone number
                                <span className="text-muted-foreground ml-1 text-xs font-normal">(optional)</span>
                            </FormLabel>
                            <FormControl>
                                <PhoneInputField
                                    value={field.value || ""}
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
                                Industry
                                <span className="text-primary ml-1">*</span>
                            </FormLabel>
                            <FormControl>
                                <MultiSelectField
                                    options={ADVERTISER_INDUSTRIES}
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
