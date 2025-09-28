import { CoinsIcon, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
 





export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.", 
            });    
            setIsSubmitting(false);       
        }, 1500);
    }

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
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:kapandathomas0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            kapandathomas0@gmail.com
                        </a>
                    </div>
                </div>
                                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+260964841383" className="text-muted-foreground hover:text-primary transition-colors">
                            0964841383
                        </a>
                    </div>
                </div>
                                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <CoinsIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="kapandathomas0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            kapandathomas0@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex psace-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/tumbikani-kapandamake-775276325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Boph32yozT16HwGTnrswdUg%3D%3D" 
                    target="_blank">
                        <Linkedin/>
                    </a>
                        <a href="https://www.instagram.com/mrplusaplus?igsh=MXV2MmIyZzV1YTJsNQ=="
                        target="_blank" >
                        <Instagram/>
                    </a>

                </div>
            </div>
            </div>


            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6"> Send A Message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium"> Your Name</label>
                        <input type="text" 
                        id="name" 
                        name="name"
                         required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Thomas Kapanda.."/>

                    </div>
                                        <div>
                        <label htmlFor="email" className="block text-sm mb-2 font-medium"> Your Email</label>
                        <input type="email" 
                        id="email" 
                        name="email"
                         required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="ttk123@gmail.com"/>

                    </div>
                                        <div>
                        <label htmlFor="name" className="block text-sm mb-2 font-medium"> Your Message</label>
                        <textarea  
                        id="message" 
                        name="message"
                         required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Hi There, Hello!"/>

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