import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      textColor: string;
      subText: string;
      email: string;
      card: string;
    };
  }
}
