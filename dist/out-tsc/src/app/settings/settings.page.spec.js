import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
describe('SettingsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SettingsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=settings.page.spec.js.map