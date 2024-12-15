import 'tsarch/dist/jest';
import {filesOfProject} from 'tsarch';

describe('core module', () => {
  jest.setTimeout(60000);

  it('should be independent from infrastructure', async () => {
    const rule = filesOfProject().inFolder('core').shouldNot().dependOnFiles().inFolder('infrastructure');

    expect(rule).toPassAsync();
  });

  describe('naming conventions', () => {
    it('entities should follow naming convention', async () => {
      const rule = filesOfProject().inFolder('entities').should().matchPattern('.*entity\.ts');

      expect(rule).toPassAsync();
    });

    it('gateways should follow naming convention', async () => {
      const rule = filesOfProject().inFolder('gateways').should().matchPattern('.*gateway\.ts');

      expect(rule).toPassAsync();
    });

    it('repositories should follow naming convention', async () => {
      const rule = filesOfProject().inFolder('repositories').should().matchPattern('.*repository\.ts');

      expect(rule).toPassAsync();
    });

    it('services should follow naming convention', async () => {
      const rule = filesOfProject().inFolder('services').should().matchPattern('.*service\.ts');

      expect(rule).toPassAsync();
    });

    it('usecases should follow naming convention', async () => {
      const rule = filesOfProject().inFolder('usecases').should().matchPattern('.*usecase\.ts');

      expect(rule).toPassAsync();
    });
  });

  describe('dependency checks', () => {
    it('entities should not depend on repositories, services and usecases', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*entity\.ts')
        .shouldNot()
        .dependOnFiles()
        .matchingPattern('.*service\.ts|.*repository\.ts|.*usecase\.ts');

      expect(rule).toPassAsync();
    });

    it('gateways should not depend on repositories, services and usecases', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*gateway\.ts')
        .shouldNot()
        .dependOnFiles()
        .matchingPattern('.*service\.ts|.*usecase\.ts|.*repository\.ts');

      expect(rule).toPassAsync();
    });

    it('repositories should not depend on services, usecases and gateways', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*repository\.ts')
        .shouldNot()
        .dependOnFiles()
        .matchingPattern('.*service\.ts|.*usecase\.ts|.*gateway\.ts');

      expect(rule).toPassAsync();
    });

    it('services should not depend on usecases', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*service\.ts')
        .shouldNot()
        .dependOnFiles()
        .matchingPattern('.*usecase\.ts');

      expect(rule).toPassAsync();
    });

    it('usecases should not depend on usecases', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*usecase\.ts')
        .shouldNot()
        .dependOnFiles()
        .matchingPattern('.*usecase\.ts');

      expect(rule).toPassAsync();
    });
  });
});
