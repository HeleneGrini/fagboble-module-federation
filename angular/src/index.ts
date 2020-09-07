import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js";

import { AppModule } from "./app.module";

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
