import TestLib from '../../src/test-lib';

describe('TestLib', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(TestLib, 'greet');
      TestLib.greet();
    });

    it('should have been run once', () => {
      expect(TestLib.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(TestLib.greet).to.have.always.returned('bom dia, amigo');
    });
  });
});
