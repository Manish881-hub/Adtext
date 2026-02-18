"use client"

import { motion } from "framer-motion";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Adtext Privacy Policy
                    </h1>
                    <p className="text-muted-foreground mb-12">Last modified: February 2026</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            This Privacy Policy ("Privacy Policy") explains how we collect, use, disclose, and safeguard your information when our customers including advertisers and publishers ("you" or "your" or "Customer") visit our websites including adtext.org ("Websites") or use any of the services including our platform to generate contextual ads (collectively referred to as the "Services") provided by <strong>Adtext Inc.</strong> ("Company", "we", "our", and "us").
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            We generate contextual ads using large language models and integrate them into chatbot and LLM (Large Language Model) applications. We do this by using contextual data, such as messages in user conversations, character persona, high level session metadata (e.g. time of the day, country code etc.) or previous interactions with our ads.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            <strong>If you are a user of an application monetised via Adtext ads (Targeted End User), please see Section 13 of this Privacy Policy.</strong>
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            By accessing or using our Services, you agree to this Privacy Policy. We will notify you when we update this Privacy Policy. All capitalized terms in this Privacy Policy are defined in the Terms of Service found on our Website.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect About You</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We collect several types of information from and about you when you use our Services, including:
                            </p>

                            <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Account information:</strong> When you create an account with us we will collect personal information such as your name, email address and avatar.</li>
                                <li><strong>Payment information:</strong> When you pay for any of the Services we will collect your address, bank information and payment method.</li>
                                <li><strong>Communication information:</strong> When you contact our support team, we may collect any Personal Information that you choose to share with us as part of our communication.</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground">Non-Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Browser and Device Data:</strong> We collect information about your device type, browser type, operating system, screen resolution, and language settings.</li>
                                <li><strong>Usage Data:</strong> We collect information about your interactions with the Services, including pages viewed, links clicked, and time spent on pages.</li>
                                <li><strong>Location Data:</strong> We may collect information about your general geographic location based on your IP address.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use the information we collect about you for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>To provide and maintain our Services</li>
                                <li>To process transactions and send related information</li>
                                <li>To send administrative information, such as updates, security alerts, and support messages</li>
                                <li>To respond to your comments, questions, and requests</li>
                                <li>To analyze usage patterns and improve our Services</li>
                                <li>To detect, prevent, and address technical issues and fraud</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing and Disclosure</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may share your information in the following situations:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf.</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our assets.</li>
                                <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational security measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">5. Data Retention</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your information for as long as your account is active or as needed to provide you Services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">6. Your Rights and Choices</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                                <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">7. Cookies and Tracking Technologies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">8. Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">9. International Data Transfers</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last modified" date.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Email:</strong> adtextus@gmail.com<br />
                                <strong>Address:</strong> Adtext Inc., Delaware, United States
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">12. California Privacy Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                California residents have specific rights regarding their personal information under the California Consumer Privacy Act (CCPA). These include the right to know, delete, and opt-out of the sale of personal information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">13. Information for Targeted End Users</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you are a user of an application that displays Adtext ads, please note that we may collect and process contextual data from your interactions to provide relevant advertising. This includes conversation context, session metadata, and interaction patterns with ads. We do not collect or store personally identifiable information from end users.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;