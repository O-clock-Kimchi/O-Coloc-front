// import UI components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

// import custom elements
import questionsList from '../../../data/faq.json';

function QuestionsSection() {
  return (
    <div className="min-h-screen w-full px-0 mx-0 mb-16 bg-cover bg-no-repeat bg-center bg-[url('/Backgrounds/faq-banner-switch.svg')]">
      <section className="px-6 text-jet-50">
        <h2
          id="faq-menu"
          className="section-title text-center text-4xl mt-3 mb-2 text-jet-50"
        >
          Foire aux questions
        </h2>
        <p className="section-subtitle text-lg text-center text-jet-50">
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
    </div>
  );
}

export default QuestionsSection;
