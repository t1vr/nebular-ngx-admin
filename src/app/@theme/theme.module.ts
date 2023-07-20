import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbMenuModule, NbUserModule, NbActionsModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule, DEFAULT_THEME, COSMIC_THEME, DARK_THEME } from "@nebular/theme";
import { FooterComponent } from "./components/footer/footer.component";
import { OneColumnLayoutComponent } from "./layouts/one-column/one-column.layout";
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe } from "./pipes";
import { HeaderComponent } from "./components/header/header.component";

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];


const nbThemeModule: any = NbThemeModule.forRoot(
  {
    name: 'default',
  },
  [DEFAULT_THEME, COSMIC_THEME, DARK_THEME],
);

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...nbThemeModule.providers,
      ],
    };
  }
}