export type Styles = {
  'author': string;
  'card': string;
  'card-content': string;
  'title': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
