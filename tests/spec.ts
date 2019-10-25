import { getCookie, removeCookie, setCookie } from '../src';

describe('cookie-util', () => {
  beforeEach(() => {
    document.cookie = 'test=228';
  });

  it('should set cookie', () => {
    setCookie('test', '1337');
    expect(document.cookie).toEqual('test=1337');
  });

  it('should get cookie', () => {
    expect(getCookie('test')).toEqual('228');
  });

  it('should remove cookie', () => {
    removeCookie('test');
    expect(document.cookie).toEqual('');
  });
});
