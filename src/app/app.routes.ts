import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CarreraI } from './components/carrera-i/carrera-i';
import { ReporteResultados } from './components/reporte-resultados/reporte-resultados';

export const routes: Routes = [

    {path: "home", component: Home},
    {path:"Carrera", component:CarreraI},
{path: "ReporteR", component:ReporteResultados},
    
    {path: "", redirectTo: "home", pathMatch: "full"},
];
