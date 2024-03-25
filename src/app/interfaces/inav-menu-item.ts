import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface INavMenuItem {
  faIcon: IconDefinition;
  visible?: boolean;
  label: string;
  tagline: string;
  url?: string;
  routerLink?:string;
  cssClass?: string;
}
