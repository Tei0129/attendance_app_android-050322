import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ManageTeacherPage } from './manage-teacher.page';
describe('ManageTeacherPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageTeacherPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ManageTeacherPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-teacher.page.spec.js.map