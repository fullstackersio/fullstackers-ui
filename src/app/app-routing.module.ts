import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PresentationsComponent } from "./presentations/presentations.component"

const routes: Routes = [
  {
    path: "presentations",
    component: PresentationsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
