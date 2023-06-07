import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditStudentProfilePage } from './edit-student-profile.page';
describe('EditStudentProfilePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditStudentProfilePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EditStudentProfilePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-student-profile.page.spec.js.map