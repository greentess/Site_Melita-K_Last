import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CatalogPageComponent } from './components/pages/catalog-page/catalog-page.component';

import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';

import { MainInfoComponent } from './components/pages/main-info/main-info.component';

import { BaseComponent } from './components/pages/basic/base.component';


import { AboutCompanyComponent } from './components/pages/company-about/about-company.component';
import { DilersComponent } from './components/pages/dilers/dilers.component';
import { CompanyAviaComponent } from './components/pages/company-avia/company-avia.component';
import { CompanyKnivesComponent } from './components/pages/company-knives/company-knives.component';
import { CompanyMetalComponent } from './components/pages/company-metal/company-metal.component';
import { MainInfoMetalComponent } from './components/pages/main-info-metal/main-info-metal.component';
import { MainInfoAviaComponent } from './components/pages/main-info-avia/main-info-avia.component';

import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { MainStartPageComponent } from './components/pages/main-start-page/main-start-page.component';
import { PredCatalogComponent } from './components/pages/pred-catalog/pred-catalog.component';
const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "start"
	},

  {
		path: "start",
		component: StartPageComponent,
		children: [
			{
				path: '',
				component: MainStartPageComponent,
			},
			{
        path:'contacts', component: ContactsComponent
			},
      {
        path:'about-company',component:AboutCompanyComponent
			},
			{
        path:'company-knives', component: CompanyKnivesComponent
			},
			{
        path:'company-avia',component:CompanyAviaComponent
			},
			{
        path:'company-metal',component:CompanyMetalComponent
			},
			{
        path:'mainpage-metal',component:MainInfoMetalComponent
			},
			{
        path:'mainpage-avia',component:MainInfoAviaComponent
			}

    ]
	},

	{
		path: "home",
		component: BaseComponent,
		children: [
			{
				path: '',
				component: MainInfoComponent,
			},
      {
        path:'search/:searchTerm',
        component:CatalogPageComponent
			},
			{
        path:'item/:id',
        component:ItemPageComponent
			},
			{
        path:'mainpage',
        component:MainInfoComponent
			},
			{
        path:'catalog',
        component:CatalogPageComponent
			},
      {
        path:'tag/:tag',component:CatalogPageComponent
			},
      {
        path:'catalog/:tag',component:PredCatalogComponent
			},
			{
        path:'contacts', component: ContactsComponent
			},
			
      {
        path:'about-company',component:AboutCompanyComponent
			},
			{
        path:'company-knives', component: CompanyKnivesComponent
			},
			{
        path:'company-avia',component:CompanyAviaComponent
			},
      {
        path:'company-metal',component:CompanyMetalComponent
			},
      {
        path:'dilers',component:DilersComponent
			}

		]
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
