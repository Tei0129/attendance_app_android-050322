import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SearchStudentPage } from './search-student.page';
describe('SearchStudentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchStudentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchStudentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-student.page.spec.js.map