import { VarDirective } from './ng-var.directive';

describe('NgVarDirective', () => {
  it('should create an instance', () => {
    const directive = new VarDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
