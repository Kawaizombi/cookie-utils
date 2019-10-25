import { Attrs, Jar } from './@types';

function buildAttributeString(attrs: Attrs) {
  if(attrs.expires instanceof Date) {
    attrs.expires = attrs.expires.toUTCString();
  }

  return Object.entries(attrs).reduce((accumulator, [key, value]) => {
    accumulator += `; ${key}=${value}`;

    return accumulator;
  }, '');
}

export function getCookieJar() {
  const cookies = document.cookie.split('; ');
  return cookies.reduce((jar: Jar, cookie) => {
    const [name, value] = cookie.split('=');

    jar[name] = value;

    return jar;
  }, {});
}

export function getCookie(name: string) {
  const jar = getCookieJar();

  return jar[name];
}

export function setCookie(name: string, value: string, attrs: Attrs = {}) {
  const attributes = buildAttributeString(attrs);

  document.cookie = `${name}=${value}${attributes}`;
}

export function removeCookie(name: string) {
  setCookie(name, '', new Date(0));
}
