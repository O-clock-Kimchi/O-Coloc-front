import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

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
        <AccordionItem value="item-1">
          <AccordionTrigger>Comment fonctionne CoHabit ?</AccordionTrigger>
          <AccordionContent>Yes, it is working fine.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Est-ce que l&rsquo;application est gratuite ?
          </AccordionTrigger>
          <AccordionContent>Yes, it is working fine.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Pourquoi vous utilisez pas Sqitch ?
          </AccordionTrigger>
          <AccordionContent>Yes, it is working fine.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>To Be Or Not To Be?</AccordionTrigger>
          <AccordionContent>Yes, it is working fine.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default QuestionsSection;
