import { TestBed } from '@angular/core/testing';
import { EmpleadoService } from './empleado.service';
describe('EmpleadoService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmpleadoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=empleado.service.spec.js.map