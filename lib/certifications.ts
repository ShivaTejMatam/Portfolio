export interface Certification {
    title: string;
    issuedBy: string;
    issueDate: string;
    certificatePdf?: string; 
    description: string;
}

export const certifications: Certification[] = [
    {
        title: "Full Stack Web Development Certification",
        issuedBy: "Tap Academy",  
        issueDate: " January 2025",     
        certificatePdf: "/certificates/Full_Stack.pdf",
        description: "Completed intensive 6-month full-stack development program covering modern web technologies and best practices. " +
                    "Practiced industry-standard development workflows including Git version control and Agile methodologies to build and deploy web applications.",
    }
];