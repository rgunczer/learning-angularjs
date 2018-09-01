import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';

@Injectable({
  providedIn: 'root'
})
export class DynService {
  comps: any[] = [];
  container: any;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {
  }

  setContainer(container: any) {
    this.container = container;
  }

  create(text: string) {
    const factory = this.resolver.resolveComponentFactory(CompOneComponent);
    const compRef = this.container.createComponent(factory);
    (<CompOneComponent>compRef.instance).text = text;
    this.comps.push(compRef);
  }

  destroy() {
    if (this.comps.length > 0) {
      const compRef = this.comps.splice(-1, 1)[0];
      compRef.destroy();
    }
  }

}
