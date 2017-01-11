function noop() {
  return null;
}

// you can add whatever you wanna handle
require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;