import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CreateClassPage } from './create-class.page';
describe('CreateClassPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateClassPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateClassPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-class.page.spec.js.map