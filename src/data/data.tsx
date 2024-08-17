interface TeamMember {
    empId: string;
    firstName: string;
    lastName: string;
    role: string;
    socialLinks: string[];
    image: string;
}
const teamOctane: TeamMember[] = [
    {
        empId: "FS-ASH-1515",
        firstName: "Ashwin",
        lastName: "KV",
        role: "Founder, Octane Company",
        socialLinks: ["https://www.github.com", "https://www.github.com"],
        image: "/images/team-octane/ashwin-kv.png",
    },
    {
        empId: "FS-DAR-1515",
        firstName: "Darshan",
        lastName: "Dinesh MP",
        role: "Founder, Octane Company",
        socialLinks: ["https://www.github.com", "https://www.github.com"],
        image: "/images/team-octane/darshan-dinesh.png",
    },
    {
        empId: "FS-DEL-1515",
        firstName: "Delbin",
        lastName: "George",
        role: "Founder, Octane Company",
        socialLinks: ["https://www.github.com", "https://www.github.com"],
        image: "/images/team-octane/delbin-george.png",
    },
    {
        empId: "FS-RIC-1515",
        firstName: "Richu",
        lastName: "Sony",
        role: "Founder, Octane Company",
        socialLinks: ["https://www.github.com", "https://www.github.com"],
        image: "/images/team-octane/richu-sony.png",
    },
    {
        empId: "FS-SHA-1515",
        firstName: "Sharan",
        lastName: "Kumar",
        role: "Founder, Octane Company",
        socialLinks: ["https://www.github.com", "https://www.github.com"],
        image: "/images/team-octane/sharan-kumar.png",
    },
];

export default teamOctane;
