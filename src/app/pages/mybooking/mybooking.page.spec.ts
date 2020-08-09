import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybookingPage } from './mybooking.page';

describe('MybookingPage', () => {
  let component: MybookingPage;
  let fixture: ComponentFixture<MybookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
