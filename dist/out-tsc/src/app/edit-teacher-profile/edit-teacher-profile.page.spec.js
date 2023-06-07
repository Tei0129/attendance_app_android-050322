import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditTeacherProfilePage } from './edit-teacher-profile.page';
describe('EditTeacherProfilePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditTeacherProfilePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EditTeacherProfilePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-teacher-profile.page.spec.js.map