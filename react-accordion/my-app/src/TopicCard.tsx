import './TopicCard.css';
import Topic from './App';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type TopicCardProps = {
  handleClick: () => void;
  isOpen: boolean;
  topic: Topic;
};

export function TopicCard({ handleClick, topic, isOpen }: TopicCardProps) {
  return (
    <div
      id={topic.id.toString()}
      className="topicCard-container"
      onClick={handleClick}>
      <div className="title">
        <h2>{topic.title}</h2>
      </div>
      {isOpen && (
        <div className="content">
          <p>{topic.content}</p>
        </div>
      )}
    </div>
  );
}
