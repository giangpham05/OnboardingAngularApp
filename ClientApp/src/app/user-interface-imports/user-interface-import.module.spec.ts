import { UserInterfaceImportModule } from './user-interface-import.module';

describe('UserInterfaceImportModule', () => {
  let userInterfaceImportModule: UserInterfaceImportModule;

  beforeEach(() => {
    userInterfaceImportModule = new UserInterfaceImportModule();
  });

  it('should create an instance', () => {
    expect(userInterfaceImportModule).toBeTruthy();
  });
});
