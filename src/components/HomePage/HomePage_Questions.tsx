import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

import questionsList from '../../../data/faq.json';

function QuestionsSection() {
  return (
    <section>
      <h2
        id="faq-menu"
        className="section-title text-center text-4xl mt-12 mb-6 text-eden-800"
      >
        Foire aux questions
      </h2>
      <p className="section-subtitle text-lg text-center mb-12">
        Vos questions. Nos réponses.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {questionsList.map((question) => (
          <AccordionItem key={question.id} value={`question-${question.id}`}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>{question.response}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default QuestionsSection;
