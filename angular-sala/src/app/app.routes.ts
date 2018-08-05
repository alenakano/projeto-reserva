import { 
    RouterModule, 
    Routes
} from '@angular/router';

import { PagesHomeComponent } from './pages/pages-home.component';
import { PagesManipulacaoComponent } from './pages/pages-manipulacao.component';
import { PagesCadastroComponent } from './pages/pages-cadastro.component';
import { PagesSituacaoComponent} from './pages/pages-situacao.component';


const appRoutes: Routes = [
    { path: '', component: PagesHomeComponent },
    { path: 'situacao', component: PagesSituacaoComponent },
    { path: 'reserva', component: PagesManipulacaoComponent },
    { path: 'cadastro', component: PagesSituacaoComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);