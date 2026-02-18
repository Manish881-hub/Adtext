"use client";

import { z } from "zod";

export const publisherContactSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter a valid email address"),
    adFormats: z.array(z.string()).min(1, "Select at least one ad format"),
    industries: z.array(z.string()).min(1, "Select at least one industry"),
    monthlyUsers: z.array(z.string()).min(1, "Select at least one range"),
    comments: z.string().max(500).optional(),
});

export type PublisherContactFormData = z.infer<typeof publisherContactSchema>;

export const advertiserContactSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter a valid email address"),
    phone: z.string().optional(),
    industries: z.array(z.string()).min(1, "Select at least one industry"),
    comments: z.string().max(500).optional(),
});

export type AdvertiserContactFormData = z.infer<typeof advertiserContactSchema>;

export const PUBLISHER_AD_FORMATS = [ "Inline", "Products Carousel", "Banner", "NextQuestion"] as const;
export const PUBLISHER_INDUSTRIES = ["E-commerce", "Finance", "Gaming", "Health", "Travel", "Tech", "Crypto", "Other"] as const;
export const ADVERTISER_INDUSTRIES = ["E-commerce", "Finance", "Gaming", "Health", "Travel", "Tech", "Crypto", "Other"] as const;
export const MONTHLY_USER_RANGES = ["Under 10K", "10K–100K", "100K–500K", "500K–1M", "1M+"] as const;

export const COUNTRY_CODES = [
    { code: "+1", flag: "🇺🇸", label: "US" },
    { code: "+44", flag: "🇬🇧", label: "GB" },
    { code: "+49", flag: "🇩🇪", label: "DE" },
    { code: "+33", flag: "🇫🇷", label: "FR" },
    { code: "+81", flag: "🇯🇵", label: "JP" },
    { code: "+86", flag: "🇨🇳", label: "CN" },
    { code: "+91", flag: "🇮🇳", label: "IN" },
    { code: "+55", flag: "🇧🇷", label: "BR" },
    { code: "+7", flag: "🇷🇺", label: "RU" },
    { code: "+61", flag: "🇦🇺", label: "AU" },
    { code: "+82", flag: "🇰🇷", label: "KR" },
    { code: "+34", flag: "🇪🇸", label: "ES" },
    { code: "+39", flag: "🇮🇹", label: "IT" },
    { code: "+31", flag: "🇳🇱", label: "NL" },
    { code: "+46", flag: "🇸🇪", label: "SE" },
] as const;
