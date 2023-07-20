import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { NbMenuModule } from "@nebular/theme";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { PagesComponent } from "./pages.component";


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
