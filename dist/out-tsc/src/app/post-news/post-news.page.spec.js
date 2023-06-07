import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PostNewsPage } from './post-news.page';
describe('PostNewsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostNewsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PostNewsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=post-news.page.spec.js.map