import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private renderer: Renderer2;
  private colorSchemeSubject = new Subject<string>();
  public colorScheme$: Observable<string> = this.colorSchemeSubject.asObservable();
  private colorScheme: string;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.colorScheme = this.getColorScheme();
  }

  updateColorScheme(scheme: string) {
    this.colorScheme = scheme;
    localStorage.setItem("colorScheme", scheme);
    const darkModeOn = scheme === "dark";
    const html = document.getElementsByTagName("html")[0];
    if (darkModeOn) {
      this.renderer.addClass(html, "dark");
    } else {
      this.renderer.removeClass(html, "dark");
    }
    this.colorSchemeSubject.next(scheme);
  }

  getColorScheme() {
    const savedScheme = localStorage.getItem("colorScheme");
    if (savedScheme) {
      this.colorScheme = savedScheme;
    } else {
      this.colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return this.colorScheme;
  }
}
