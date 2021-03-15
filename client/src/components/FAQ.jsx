import React from "react";
import FAQs from "./FAQs";
const data = [
  {
    question: "Who is it for?",
    answer:
      "Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.",
  },
  {
    question: "Who is it for?",
    answer:
      "Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.",
  },
  {
    question: "Does AltCampus help me get a job?",
    answer:
      "Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.",
  },
  {
    question: "How does the entire process work?",
    answer: "You can read about it here - How it works.",
  },
  {
    question: "Is this course self-paced or batched?",
    answer:
      "This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.",
  },
  {
    question: "Do I get to interact with mentors live?",
    answer:
      "Yes, every working day mentors in all modules hold live, office hour sessions where you can ask your doubts and work on problems you are facing.",
  },
  {
    question: " How can I interact with other students in the community?",
    answer:
      "Our custom platform helps you match with your peers and we have a private Slack group where you can interact with peers and get live help from mentors.",
  },
  {
    question: " I am based outside India, can I still enrol in this course?",
    answer:
      "Yes. You can enrol in it no matter where you are from. If need be, mentors hold office hours two times in 24 hours to accomodate all timezones.",
  },
  {
    question: " Can I get a demo before I signup?",
    answer: "Yes, please pick a slot with one of our co-founders here",
  },
];

function FAQ() {
  return (
    <div className="pt-8">
      <div className="App">
        {data.map((item) => (
          <FAQs question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
