import { FAQView } from "@/components/fieldsync/faq-view";// Assuming you have a component for each FAQ item
import "@/app/globals.css"; // Import your CSS file

export default function FAQPage() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
    <FAQView />
    </div>
  );
}
