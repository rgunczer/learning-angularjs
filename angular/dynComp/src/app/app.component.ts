import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';
import { CompOneComponent  } from './comp-one/comp-one.component';
import { DynService } from './dyn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynComp';
  text = '';
  comps: any[] = [];

  @ViewChild('container', { read: ViewContainerRef}) container;

  constructor(
    private dyn: DynService,
    private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.dyn.setContainer(this.container);
  }

  loadOne() {
    // console.log('click');
    // const factory = this.resolver.resolveComponentFactory(CompOneComponent);
    // const compRef = this.container.createComponent(factory);
    // (<CompOneComponent>compRef.instance).text = 'Jancsi';
    // this.comps.push(compRef);
    this.dyn.create(this.text);
  }

  closeLast() {
    // if (this.comps.length > 0) {
    //   const compRef = this.comps.splice(-1, 1)[0];
    //   compRef.destroy();
    // }
    this.dyn.destroy();
  }

}
