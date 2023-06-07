import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SchoolRegistrationPage } from './school-registration.page';
describe('SchoolRegistrationPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SchoolRegistrationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SchoolRegistrationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=school-registration.page.spec.js.map