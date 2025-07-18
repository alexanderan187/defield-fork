"use client"

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is Defield?",
    answer:
      "Defield is a tool that helps you sync your local development environment with your remote environment.",
  },
  {
    id: 2,
    question: "How do I use Defield?",
    answer:
      "You can use Defield by installing the CLI and then running the `defield sync` command.",
  },
];

export const FAQView = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="faq-view">
      {questions.map((question) => (
        <div key={question.id} className="faq-item">
          <h2
            onClick={() => setOpenId(openId === question.id ? null : question.id)}
            style={{ cursor: "pointer" }}
          >
            {question.question}
          </h2>
          {openId === question.id && <p>{question.answer}</p>}
        </div>
      ))}
    </div>
  );
};
