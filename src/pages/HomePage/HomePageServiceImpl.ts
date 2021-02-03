export type CardDataType = {
  image: string;
  title: string;
  author: string;
  textContent: string;
};

type CardDataTypeArray = {
  image: string;
  title: string;
  author: string;
  textContent: string;
}[];

interface HomePageServiceInterface {
  heading: string;
  content1: string;
  content2: string;
  cardData: CardDataTypeArray;
  onClick: () => void;
}

interface HomePageFactoryInterface {
  HomePageServiceModule: () => HomePageServiceInterface;
}

const HomePageServiceFactory = (): HomePageFactoryInterface => {
  const HomePageServiceModule = (): HomePageServiceInterface => {
    const heading = 'Welcome to the home page';
    const content1 =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ";
    const content2 =
      'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour';

    const cardData: CardDataTypeArray = [
      {
        author: 'Author 1',
        image: 'http://placekitten.com/200/300',
        textContent: 'The best card ever',
        title: 'Card Title 1',
      },
      {
        author: 'Author 2',
        image: 'http://placekitten.com/200/300',
        textContent: 'The best card ever',
        title: 'Card Title 2',
      },
      {
        author: 'Author 3',
        image: 'http://placekitten.com/200/300',
        textContent: 'The best card ever',
        title: 'Card Title 3',
      },
    ];

    const onClick = () => {
      console.log('Clicking');
    };

    return {
      cardData,
      content1,
      content2,
      heading,
      onClick,
    };
  };

  return {
    HomePageServiceModule,
  };
};

export default HomePageServiceFactory;
