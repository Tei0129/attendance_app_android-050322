import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StudentDetailPage } from './student-detail.page';
describe('StudentDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(StudentDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-detail.page.spec.js.map