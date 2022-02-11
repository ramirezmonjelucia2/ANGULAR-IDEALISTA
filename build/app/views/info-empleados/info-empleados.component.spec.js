import { TestBed } from '@angular/core/testing';
import { InfoEmpleadosComponent } from './info-empleados.component';
describe('InfoEmpleadosComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoEmpleadosComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(InfoEmpleadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=info-empleados.component.spec.js.map