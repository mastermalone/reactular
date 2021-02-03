import withHooks from '../../common/withHooks';
import CardTemplate from './cardTemplate';

export interface CardInterface {
  author: string;
  image?: string;
  title: string;
  text: string;
}

const Card = withHooks(
  CardTemplate,
  ({ author, text, title, image }: CardInterface) => {
    console.log('author', author);
    return {
      author,
      text,
      title,
      image,
    };
  }
);

export default Card;
