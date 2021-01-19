import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseCarPage } from './choose-car.page';

describe('ChooseCarPage', () => {
  let component: ChooseCarPage;
  let fixture: ComponentFixture<ChooseCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
