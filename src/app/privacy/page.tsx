import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";

export const metadata: Metadata = {
  title: "Privacy | TechSaws",
  description:
    "TechSaws privacy information for website visitors and project inquiries.",
};

export default function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="Privacy"
      title="How TechSaws handles website and inquiry information."
      description="We collect only the information needed to respond to inquiries, discuss projects, and operate this website responsibly."
      cards={[
        {
          title: "Information you provide",
          text: "When you submit an inquiry, we may receive your name, email, company, message, and project details.",
        },
        {
          title: "How we use it",
          text: "We use inquiry information to respond, plan conversations, prepare proposals, and support agreed project work.",
        },
        {
          title: "Third-party tools",
          text: "Website hosting, analytics, forms, email, and project tools may process limited data under their own policies.",
        },
        {
          title: "Your choices",
          text: "You can contact us to update, correct, or request removal of information shared through website inquiries.",
        },
      ]}
    />
  );
}
