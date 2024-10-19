import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    interface AskedQuestion {
        faqId: string;
        title: string;
        body: string;
    }

    const quest: AskedQuestion[] = [
        {
            faqId: "item-1",
            title: "What services does Octane provide?",
            body: `Octane provides a comprehensive range of software solutions, including custom app development, web
                   development, and technology consulting. We specialize in building high-quality, user-friendly apps
                   and websites tailored to meet the unique needs of businesses across various industries. Our
                   services cover everything from initial concept and design to development, deployment, and ongoing
                   support, ensuring your digital products are optimized for success.`,
        },
        {
            faqId: "item-2",
            title: "How does Octane ensure the quality of its services?",
            body: `Octane ensures the quality of its services by adhering to the core 8 principles of software
                   development. We prioritize understanding your needs and designing software that aligns with your
                   business goals, emphasizing usability, scalability, and performance. Our agile, iterative
                   development process allows for continuous refinement, while rigorous testing at every stage helps
                   us identify and address issues early. Comprehensive documentation ensures clarity and consistency
                   throughout development and beyond. We foster close collaboration with clients, involving them in
                   key decisions to ensure the final product meets expectations. Security is a top priority, with
                   industry-standard practices implemented to protect your data. Even after launch, our commitment to
                   quality continues with ongoing support and updates to keep your software performing at its best.`,
        },
        {
            faqId: "item-3",
            title: "How can I contact Octane for support or inquiries?",
            body: `Reach out to us via email at innovationsoctane@gmail.com.`,
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row items-start justify-evenly lg:pt-8 lg:min-h-fit bg-pri-dark lg:px-32">
            <div className="lg:w-2/4 ">
                <span className="text-transparent font-inter font-bold bg-clip-text bg-gradient-to-r from-[#00BA6C] to-[#3050ee]">
                    FAQ
                </span>
                <h1 className="text-white text-4xl font-semibold lg:my-1 font-inter">
                    Get all your questions <br /> answered here!
                </h1>
                <p className="text-[1.1rem] text-white/90 text-left font-inter">
                    or ping us through our support email to learn more.
                </p>
            </div>
            <div className="w-full lg:w-2/4 relative">
                <Accordion className="lg:absolute right-0 left-0 font-inter" type="single" collapsible>
                    {quest.map((value, key) => {
                        return (
                            <AccordionItem key={key} value={value.faqId}>
                                <AccordionTrigger>{value.title}</AccordionTrigger>
                                <AccordionContent>{value.body}</AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
