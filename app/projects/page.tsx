import AllProjects from "./AllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Browse the portfolio projects of Atharv Chinchkar. A collection of web applications, AI tools, and full-stack solutions.",
};

export default function ProjectsPage() {
    return (
        <AllProjects />
    )
}