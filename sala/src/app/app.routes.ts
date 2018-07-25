import { 
    RouterModule, 
    Routes
} from '@angular/router';

import { PagesHomeComponent } from './pages/pages-home.component';
import { PagesLoginComponent} from './pages/pages-login.component';
import { PagesReservaComponent } from './pages/pages-reserva.component';
import { PagesSituacaoComponent} from './pages/pages-situacao.component';


const appRoutes: Routes = [
    { path: '', component: PagesHomeComponent },
    { path: 'situacao', component: PagesSituacaoComponent },
    { path: 'reserva', component: PagesLoginComponent },
    { path: 'administracao', component: PagesReservaComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);