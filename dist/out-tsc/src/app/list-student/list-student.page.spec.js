import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListStudentPage } from './list-student.page';
describe('ListStudentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListStudentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ListStudentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-student.page.spec.js.map