import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SendmessagePage } from './sendmessage.page';
describe('SendmessagePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SendmessagePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SendmessagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sendmessage.page.spec.js.map