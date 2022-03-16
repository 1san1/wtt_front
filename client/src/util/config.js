/* eslint-disable max-len */

const env = {
  'www.waterthetrees.com': 'prod',
  'waterthetrees.com': 'prod',
  'dev.waterthetrees.com': 'dev',
  'blue.waterthetrees.com': 'blue',
  localhost: 'localserver',
}[window.location.hostname];

const mapboxAccessTokens = {
  // key: 'pk.eyJ1IjoiMTAwa3RyZWVzIiwiYSI6ImNrNzFqdWFpeDA2cDQzbnF3amtoM2xrdzQifQ.XEXk0ePKHFgN8rp1YHNn4w'
  prod: 'pk.eyJ1IjoiMTAwa3RyZWVzIiwiYSI6ImNrY3lmcWVqcDA5ZDYyenFpdG13bWdrOHYifQ.6er3tXeahhVUtgiu_pqWFw',
  dev: 'sk.eyJ1Ijoid2F0ZXJ0aGV0cmVlcyIsImEiOiJja3ljanlpZHQwYndoMzFtbzR3eWlybDI3In0.L2QhSIz4X2WIQ23QoQgVTQ',
  blue: 'pk.eyJ1IjoiMTAwa3RyZWVzIiwiYSI6ImNramQxdzV6ZTEwN2YzMXFxZG9rbHdjYTIifQ.wuXVYDeQ7WRqALu-RZxPMg',
  localold: 'pk.eyJ1IjoiMTAwa3RyZWVzIiwiYSI6ImNrNzFqdWFpeDA2cDQzbnF3amtoM2xrdzQifQ.XEXk0ePKHFgN8rp1YHNn4w',
  localserver: 'pk.eyJ1Ijoid2F0ZXJ0aGV0cmVlcyIsImEiOiJja3MyOWpnMXowZndqMnVwazcycGRibGk3In0.dDso0u-ApDzqxRiX9bmwOw',
};
const mapboxAccessToken = mapboxAccessTokens[env];

const auth0 = {
  prod: {
    domain: 'trees.us.auth0.com',
    clientId: 'rUv8qhefpscOANXBfanD0fwSjTMz2ZpW',
  },
  dev: {
    domain: 'treesdev.us.auth0.com',
    clientId: 'GSTMeD1fU2WftUUr0ac73Okss75q8qCr',
  },
  blue: {
    domain: 'treesdev.us.auth0.com',
    clientId: 'GSTMeD1fU2WftUUr0ac73Okss75q8qCr',
  },
  localserver: {
    domain: 'treesdev.us.auth0.com',
    clientId: 'GSTMeD1fU2WftUUr0ac73Okss75q8qCr',
  },
}[env];

export {
  env, mapboxAccessToken, mapboxAccessTokens, auth0,
};
