import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderModalPage } from './calender-modal.page';

describe('CalenderModalPage', () => {
  let component: CalenderModalPage;
  let fixture: ComponentFixture<CalenderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
