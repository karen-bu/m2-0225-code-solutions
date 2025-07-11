import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = [
  '/starry-sky.jpeg',
  '/cool-car.jpg',
  'cool-kitty.jpg',
  'san-jose-sharks.jpg',
  'secretary-bird.jpg',
];
const captions = [
  'A Beautiful Image of Space',
  'A Shiny Car Like A Movie Villain Would Drive',
  'A Cat With More Swag Than Me',
  'The San Jose Sharks Demonstrating Their Usual Level of Competence',
  'A Bird That Is More Beautiful Than Me',
];

const descriptions = [
  'I learned from doing my Front End Project, which had a space theme, that there exists a planet out there that takes 1 million years to orbit its host star. That gave me an existential crisis that if I am being honest I still have not gotten over. Space is so cool',
  'This car looks very cool and shiny but can you imagine the insurance payment on this thing. Can you imagine the maintainence you need to do. How much you would need to spend on gas. You would get so many speeding tickets because the cops would be too jealous. I will stick with my basic Honda Civic, thank you very much.',
  "Whenever I see weird stock photos like this, I always wonder who took them. Who has a cat patient enough to have glasses put on its face? What is this cat's name? Is it living a good life? This is a photo that would do numbers back in the 2012 hipster era of the internet.",
  'This is Marc-Edouard Vlasic of the San Jose Sharks NHL team trying and failing to keep a puck from going into an empty net, and is a great metaphor for how this team generally plays hockey. Though I should not be mean to him because I am also a defenseman and also a complete pylon.',
  'This is a secretary bird, scientific name Saggitarius serpentarius. I saw it in a display at the Museum of Natural History and downloaded a photo immediately because I was very inspired to draw it because it looks so sick. This bird literally stomps cobras to death with its feet. It is so beautiful and so death metal.',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
