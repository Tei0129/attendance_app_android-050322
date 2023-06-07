import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StudentsPage } from './students.page';
describe('StudentsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(StudentsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=students.page.spec.js.map