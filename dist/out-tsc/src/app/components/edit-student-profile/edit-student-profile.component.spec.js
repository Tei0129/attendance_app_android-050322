import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditStudentProfileComponent } from './edit-student-profile.component';
describe('EditStudentProfileComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditStudentProfileComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EditStudentProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-student-profile.component.spec.js.map