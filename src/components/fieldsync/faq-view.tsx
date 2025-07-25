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
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  return (
    <div className="faq-view">
      {questions.map((question) => (
        <div key={question.id} className="faq-item">
          <h2
            className="faq-question"
 onClick={() => {
              const newOpenQuestions = new Set(openQuestions);
              if (newOpenQuestions.has(question.id)) {
                newOpenQuestions.delete(question.id);
              } else {
                newOpenQuestions.add(question.id);
              }
              setOpenQuestions(newOpenQuestions);
            }}
          >
            {question.question}
          </h2>
          {openQuestions.has(question.id) && (
            <p className="faq-answer">{question.answer}</p>
 )}
        </div>
      ))}
    </div>
  );
};
