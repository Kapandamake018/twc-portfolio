import { CoinsIcon, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import React from "react";





export const ContactSection = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const { toast } = useToast();

    const onSubmit = async (data) => {
        // Add this console.log to see what data we're sending
        console.log('Sending email with data:', {
            from_name: data.from_name,
            reply_to: data.reply_to,
            message: data.message
        });

        try {
            // Create template parameters object
            const templateParams = {
                from_name: data.from_name,
                reply_to: data.reply_to,
                message: data.message,
                to_name: 'Thomas' // Add recipient name
            };

            // Initialize EmailJS with your public key
            emailjs.init("bR3iIwVBLd2Ty7LqN");

            const result = await emailjs.send(
                "service_3n8ufhq",
                "template_62l05iu",
                templateParams
            );

            console.log('Email sent:', result); // For debugging

            if (result.status === 200) {
                toast({
                    title: "Success!",
                    description: "Your message has been sent successfully.",
                });
                reset();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (<section id="contact"
     className="py-24 px-4 relative bg-secondary/30">
        <div className="contsainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below!
        </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                </h3>

            <div className="space-y-6 justify-center">
                {/* Email */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                            href="mailto:kapandathomas0@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            kapandathomas0@gmail.com
                        </a>
                    </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                            href="tel:+260964841383"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            0964841383
                        </a>
                    </div>
                </div>
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        {/* WhatsApp SVG icon */}
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <g>
                                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.23-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-medium">WhatsApp</h4>
                        <a
                            href="https://wa.me/260964841383"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-6 justify-center">
                    <a
                        href="https://www.linkedin.com/in/tumbikani-kapandamake-775276325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Boph32yozT16HwGTnrswdUg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20">
                            <Linkedin className="w-7 h-7 text-primary" />
                        </span>
                    </a>
                    <a
                        href="https://www.instagram.com/mrplusaplus?igsh=MXV2MmIyZzV1YTJsNQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20">
                            <Instagram className="w-7 h-7 text-primary" />
                        </span>
                    </a>
                </div>
            </div>
            </div>


            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6"> Send A Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium"> Your Name</label>
                        <input type="text"
                            id="name"
                            {...register("from_name", { required: "Name is required" })}
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Thomas Kapanda.." />

                            {errors.from_name && <span className="text-red-500 text-sm">{errors.from_name.message}</span>}

                    </div>
                                        <div>
                        <label htmlFor="email" className="block text-sm mb-2 font-medium"> Your Email</label>
                        <input type="email"
                            id="email"
                            {...register("reply_to", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                            }
                        })}
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="your@email.com"
                        />

                        {errors.reply_to && <span className="text-red-500 text-sm">{errors.reply_to.message}</span>}

                    </div>
                                        <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium"> Your Message</label>
                        <textarea  
                        id="message" 
                        {...register("message", { required: "Message is required" })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-32"
                        placeholder="Your message here..."/>

                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    </div>
                    <button type="submit"
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                        {isSubmitting ? "Sending...": "Send Message"}
                    <Send size={16}/>
                    </button>
                </form>


            </div>
        </div>
        </div> 
       
        
    </section>
    );
}