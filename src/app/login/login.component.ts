import { Component, Inject, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { IconDefinition, faChevronRight, faSpinnerThird, faSteeringWheel, faTire, faTools, faTruckContainer } from "@fortawesome/pro-regular-svg-icons";
import { INavMenuItem } from "../interfaces/inav-menu-item";
import { ENVIRONMENT } from "../shared/environment.token";
import { Environment } from "../shared/environment.type";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  faSpinner: IconDefinition = faSpinnerThird;
  faSteeringWheel: IconDefinition = faSteeringWheel;
  faChevronRight = faChevronRight;
  faTruckContainer = faTruckContainer;
  faTire = faTire;
  faTools = faTools;
  portalItems: INavMenuItem[] = [];

  constructor(
    @Inject(ENVIRONMENT) private environment: Environment,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router) {}

    ngOnInit(): void {

      this.portalItems = [
        { faIcon: faSteeringWheel, label: "Driver", tagline: "Log your job now", url: this.environment.portalUrls.driver, visible: true },
        { faIcon: faTruckContainer, label: "Fleet or Depot Manager", tagline: "Log jobs, reporting and fleet management", url: this.environment.portalUrls.customer, visible: true, cssClass: "truck" },
        { faIcon: faTools, label: "Service Provider", tagline: "Deploy your jobs", url: this.environment.portalUrls.serviceProvider, visible: true },
        { faIcon: faTire, label: "Casing Agent", tagline: "Manage your casing", url: this.environment.portalUrls.casing, visible: true },
      ];

      this.titleService.setTitle('Portal Login - Direct Tyre Management Ltd');
      this.metaTagService.updateTag(
        { name: 'description', content: 'Direct tyre management portal login' },
      );
    }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  handleClick(item: INavMenuItem): void {
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    } else if (item.url) {
      window.location.href = item.url;
    }
  }
}
