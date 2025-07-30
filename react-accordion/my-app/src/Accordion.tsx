import { TopicCard } from './TopicCard';
import Topic from './App';
import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = { listOfTopics: Topic[] };

export function Accordion({ listOfTopics }: AccordionProps) {
  const [topic, setTopic] = useState<Topic>();

  return (
    <div>
      {listOfTopics.map((singleTopic) => (
        <TopicCard
          key={singleTopic.id}
          isOpen={singleTopic.id === topic?.id}
          handleClick={() => setTopic(singleTopic)}
          topic={singleTopic}
        />
      ))}
    </div>
  );
}
