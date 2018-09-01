import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PresentationsComponent } from "./presentations/presentations.component"
import { AboutComponent } from "./about/about.component"

const routes: Routes = [
  {
    path: "presentations",
    component: PresentationsComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
