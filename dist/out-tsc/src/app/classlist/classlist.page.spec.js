import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ClasslistPage } from './classlist.page';
describe('ClasslistPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClasslistPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ClasslistPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=classlist.page.spec.js.map