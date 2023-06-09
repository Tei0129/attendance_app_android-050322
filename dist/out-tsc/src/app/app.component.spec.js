import { __awaiter } from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;
    beforeEach(async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: StatusBar, useValue: statusBarSpy },
                { provide: SplashScreen, useValue: splashScreenSpy },
                { provide: Platform, useValue: platformSpy },
            ],
            imports: [RouterTestingModule.withRoutes([])],
        }).compileComponents();
    }));
    it('should create the app', () => __awaiter(void 0, void 0, void 0, function* () {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should initialize the app', () => __awaiter(void 0, void 0, void 0, function* () {
        TestBed.createComponent(AppComponent);
        expect(platformSpy.ready).toHaveBeenCalled();
        yield platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
    }));
    it('should have menu labels', () => __awaiter(void 0, void 0, void 0, function* () {
        const fixture = yield TestBed.createComponent(AppComponent);
        yield fixture.detectChanges();
        const app = fixture.nativeElement;
        const menuItems = app.querySelectorAll('ion-label');
        expect(menuItems.length).toEqual(12);
        expect(menuItems[0].textContent).toContain('Inbox');
        expect(menuItems[1].textContent).toContain('Outbox');
    }));
    it('should have urls', () => __awaiter(void 0, void 0, void 0, function* () {
        const fixture = yield TestBed.createComponent(AppComponent);
        yield fixture.detectChanges();
        const app = fixture.nativeElement;
        const menuItems = app.querySelectorAll('ion-item');
        expect(menuItems.length).toEqual(12);
        expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/folder/Inbox');
        expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/folder/Outbox');
    }));
});
//# sourceMappingURL=app.component.spec.js.map