import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditCalssPage } from './edit-calss.page';
describe('EditCalssPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditCalssPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(EditCalssPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-calss.page.spec.js.map