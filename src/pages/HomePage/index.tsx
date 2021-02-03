import Card from '../../components/Card/card';
import App from '../../app/angularApp';
import HomePageService from './homePageService';
import { CardDataType } from './HomePageServiceImpl';
//@ts-ignore
import reactIndexHtml from '../../reactApp/index.html';
import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';

HomePageService;

App.directive('card', [
  function (scope, element, attrs, ctrl) {
    return {
      restrict: 'AE',
      template: reactIndexHtml,
      scope: {
        image: '@',
        title: '@',
        author: '@',
        textContent: '@',
      },
      controller: 'homePageController',
      controllerAs: 'hpCtrl',
      link: function (scope, elem, attrs, ctrl) {
        const reactApp = document.querySelector('#reactApp');

        scope.$watch(
          'title',
          function (newValue, oldValue) {
            if (angular.isDefined(newValue)) {
              ReactDOM.render(
                ctrl.cardData &&
                  ctrl.cardData.map(
                    (card: CardDataType, idx: number) =>
                      !!card && (
                        <Card
                          author={card.author}
                          text={card.textContent}
                          title={card.title}
                          image={card.image}
                          key={`${card.title}_${idx}`}
                        />
                      )
                  ),
                reactApp
              );
            }
          },
          true
        );
      },
    };
  },
]);

const HomePageController = App.controller('homePageController', [
  '$scope',
  'homePageService',
  function ($scope, homePageService) {
    const { heading, cardData, onClick } = homePageService;

    this.heading = heading;

    this.cardData = cardData;

    this.onClick = onClick;
  },
]);

export default HomePageController;
