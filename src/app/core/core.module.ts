import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { routeAnimations } from './animations/route.animations';

export { routeAnimations };

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule]
})
export class CoreModule {}
