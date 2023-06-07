import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegisterTeacherPage } from './register-teacher.page';
describe('RegisterTeacherPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterTeacherPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterTeacherPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=register-teacher.page.spec.js.map