import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegisterStudentPage } from './register-student.page';
describe('RegisterStudentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterStudentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterStudentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=register-student.page.spec.js.map