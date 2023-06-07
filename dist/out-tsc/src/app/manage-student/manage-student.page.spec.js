import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ManageStudentPage } from './manage-student.page';
describe('ManageStudentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageStudentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ManageStudentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-student.page.spec.js.map