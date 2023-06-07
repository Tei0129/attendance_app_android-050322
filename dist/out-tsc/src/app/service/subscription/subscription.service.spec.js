import { TestBed } from '@angular/core/testing';
import { SubscriptionService } from './subscription.service';
describe('SubscriptionService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SubscriptionService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=subscription.service.spec.js.map