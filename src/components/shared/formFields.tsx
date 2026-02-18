"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import type { Value } from "react-phone-number-input";

export function SuccessMessage({ onReset }: { onReset: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-20 text-center"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5"
            >
                <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                >
                    <Check className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </motion.div>
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Message received!</h3>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
                Thanks for reaching out. Our team will be in touch within 1–2 business days.
            </p>
            <button
                type="button"
                onClick={onReset}
                className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
            >
                Submit another response
            </button>
        </motion.div>
    );
}

export function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
    return (
        <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-card",
                "transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            )}
        >
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                    </motion.span>
                ) : (
                    <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

interface MultiSelectFieldProps {
    options: readonly string[];
    value: string[];
    onChange: (val: string[]) => void;
}

export function MultiSelectField({ options, value, onChange }: MultiSelectFieldProps) {
    const toggle = (opt: string) => {
        onChange(
            value.includes(opt)
                ? value.filter((s) => s !== opt)
                : [...value, opt]
        );
    };

    return (
        <div className="flex flex-wrap gap-2">
            {options.map((opt) => {
                const active = value.includes(opt);
                return (
                    <motion.button
                        key={opt}
                        type="button"
                        onClick={() => toggle(opt)}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 select-none",
                            active
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-card text-foreground border-border hover:border-primary/50 hover:text-primary"
                        )}
                        aria-pressed={active}
                    >
                        {opt}
                    </motion.button>
                );
            })}
        </div>
    );
}

interface SelectFieldProps {
    value: string;
    onChange: (v: string) => void;
    options: readonly string[];
    placeholder: string;
}

export function SelectField({ value, onChange, options, placeholder }: SelectFieldProps) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    "w-full appearance-none bg-card text-foreground border rounded-lg px-4 py-2.5 text-sm pr-10",
                    "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all border-border"
                )}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
    );
}

interface CountryCodeSelectorProps {
    value: string;
    onChange: (code: string) => void;
}

export function CountryCodeSelector({ value, onChange }: CountryCodeSelectorProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const COUNTRY_CODES = [
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
    
    const selectedCountry = COUNTRY_CODES.find((c) => c.code === value) ?? COUNTRY_CODES[0];

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={cn(
                    "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-2.5 text-sm font-medium",
                    "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all whitespace-nowrap"
                )}
            >
                <span>{selectedCountry.flag}</span>
                <span className="text-foreground">{selectedCountry.code}</span>
                <ChevronDown className={cn("w-3.5 h-3.5 text-muted-foreground transition-transform", open && "rotate-180")} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 top-full mt-1 left-0 bg-card border border-border rounded-lg shadow-lg overflow-y-auto max-h-48 min-w-[120px]"
                    >
                        {COUNTRY_CODES.map((c) => (
                            <button
                                key={c.code}
                                type="button"
                                onClick={() => { onChange(c.code); setOpen(false); }}
                                className={cn(
                                    "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors text-left",
                                    value === c.code && "text-primary font-medium"
                                )}
                            >
                                <span>{c.flag}</span>
                                <span>{c.label}</span>
                                <span className="ml-auto text-muted-foreground">{c.code}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface CommentsFieldProps {
    value: string;
    onChange: (v: string) => void;
    maxLength?: number;
}

export function CommentsField({ value, onChange, maxLength = 500 }: CommentsFieldProps) {
    const remaining = maxLength - value.length;
    return (
        <div>
            <textarea
                value={value}
                onChange={(e) => {
                    if (e.target.value.length <= maxLength) onChange(e.target.value);
                }}
                placeholder="Tell us more about your needs..."
                rows={4}
                className={cn(
                    "w-full bg-card text-foreground border rounded-lg px-4 py-3 text-sm resize-y",
                    "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all",
                    "placeholder:text-muted-foreground min-h-[100px] max-h-[300px] border-border"
                )}
            />
            <p className={cn("text-xs mt-1 text-right tabular-nums", remaining < 50 ? "text-destructive" : "text-muted-foreground")}>
                {remaining} characters remaining
            </p>
        </div>
    );
}

interface PhoneInputFieldProps {
    value: string;
    onChange: (v: string) => void;
}

export function PhoneInputField({ value, onChange }: PhoneInputFieldProps) {
    return (
        <PhoneInput
            placeholder="Enter phone number (optional)"
            value={value || undefined}
            onChange={(v) => onChange(v || "")}
            defaultCountry="US"
            international
            countryCallingCodeEditable={false}
            className="w-full"
            style={
                {
                    "--PhoneInputCountryFlag-height": "1.5em",
                } as React.CSSProperties
            }
        />
    );
}
