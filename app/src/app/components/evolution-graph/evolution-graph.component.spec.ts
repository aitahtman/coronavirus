import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionGraphComponent } from './evolution-graph.component';

describe('EvolutionGraphComponent', () => {
  let component: EvolutionGraphComponent;
  let fixture: ComponentFixture<EvolutionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
