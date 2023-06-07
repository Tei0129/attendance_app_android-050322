import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader.component';
describe('LoaderComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=loader.component.spec.js.map