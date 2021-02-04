import Card from '../../components/Card/card';
import App from '../../app/angularApp';
import HomePageService from './homePageService';
import { CardDataType } from './HomePageServiceImpl';
//@ts-ignore
import reactIndexHtml from '../../reactApp/index.html';
import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './homepage.module.scss';

HomePageService;

/**
 * @since 1.0.0
 * @module HomePageController
 * @description This sets up the HomePageController and the
 * Card Directive which is used to render the React Card component
 * within scope.$watch().  If the cardData array values change, the
 * update will be reflected and the Virtual DOM from React will update
 * with the new values from the cardData array.
 */
App.directive('card', [
  function () {
    return {
      restrict: 'AE',
      template: reactIndexHtml,
      scope: {
        data: '@',
      },
      controller: 'homePageController',
      controllerAs: 'hpCtrl',
      link: function (scope, elem, attrs, ctrl) {
        /**
         * We load in the simple html that contains a div where
         * we load in the React Card component
         */
        const reactApp = document.querySelector('#reactApp');

        scope.$watch(
          'data',
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

/**
 * @description
 * This controller is very basica and lets the homePageService
 * do all the talking with regards to data updates and any events
 * that we might want to listen to
 */
const HomePageController = App.controller('homePageController', [
  '$scope',
  'homePageService',
  function ($scope, homePageService) {
    const { heading, cardData, onClick } = homePageService;

    //Form model which is used to add new cards to the page
    $scope.form = {
      author: '',
      textContent: '',
      title: '',
    };

    this.heading = heading;

    this.cardData = cardData;

    this.onClick = onClick;

    this.styles = styles;
  },
]);

export default HomePageController;
