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
    let onErrorMessage = '';
    const heading = 'Welcome to the home page';

    //Some initial mock data
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
      const ObjectHasData =
        formData.title.length &&
        formData.author.length &&
        formData.textContent.length;

      onErrorMessage = '';

      !!ObjectHasData &&
        cardData.push({
          author: formData.author,
          image: 'http://placekitten.com/250/100',
          textContent: formData.textContent,
          title: formData.title,
        });
    };

    return {
      cardData,
      heading,
      onClick,
    };
  };

  return {
    HomePageServiceModule,
  };
};

export default HomePageServiceFactory;
