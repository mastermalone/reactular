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
  onClick: ({ author, textContent, title }: CardDataType) => void;
}

interface HomePageFactoryInterface {
  HomePageServiceModule: () => HomePageServiceInterface;
}

/**
 * @since 1.0.0
 * @module HomePageServiceFactory
 * @description Provides vanilla JavaScript driven functionality
 * to an Angular service, (Actually a factory)
 * @returns {Function} HomePageServiceModule
 */
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
        image: 'http://placekitten.com/250/100',
        textContent: 'The best card ever',
        title: 'Card Title 1',
      },
      {
        author: 'Author 2',
        image: 'http://placekitten.com/250/100',
        textContent: 'The best card ever',
        title: 'Card Title 2',
      },
      {
        author: 'Author 3',
        image: 'http://placekitten.com/250/100',
        textContent: 'The best card ever',
        title: 'Card Title 3',
      },
    ];

    const onClick = (formData: CardDataType) => {
      const ObjectHasData = Object.keys(formData).length > 0;
      cardData.push({
        author: formData.author,
        image: 'http://placekitten.com/250/100',
        textContent: formData.textContent,
        title: formData.title,
      });

      console.log('the new data', cardData);
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
