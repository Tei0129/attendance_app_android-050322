import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ParentconnectPage } from './parentconnect.page';
describe('ParentconnectPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParentconnectPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ParentconnectPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=parentconnect.page.spec.js.map