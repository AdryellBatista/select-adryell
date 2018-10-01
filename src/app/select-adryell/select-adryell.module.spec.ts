import { SelectAdryellModule } from './select-adryell.module';

describe('SelectAdryellModule', () => {
  let selectAdryellModule: SelectAdryellModule;

  beforeEach(() => {
    selectAdryellModule = new SelectAdryellModule();
  });

  it('should create an instance', () => {
    expect(selectAdryellModule).toBeTruthy();
  });
});
