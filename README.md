# Cookie-utils

Utils for get, set and delete cookie files

# How to

```typescript
import { getCookie, setCookie, removeCookie } from '.';

// Create cookie with named test with value 1337 that will expire in 1 minute
setCookie('test', '1337', {
  expires: new Date(Date.now() + (1000 * 60)),
});

getCookie('test'); // returns '1337'

removeCookie('test'); // remove test cookie
```
