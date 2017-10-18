import { transform } from '../src/standalone-module';

describe('transform test', () => {
  it('transform exists', () => {
    expect(typeof transform).toEqual('function');
  });
  it('transform works! yay', async () => {
    var code = await transform({
      moduleName: 'mymodule',
      modulePath: __dirname + '/fixtures/test-module'
    });
    expect(code).toBeTruthy();
    expect(eval(code)).toEqual({
      a: 1,
      b: 'something amazing!'
    });
  });
});
