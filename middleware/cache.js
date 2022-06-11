const getExpeditiousCache = require('express-expeditious');

const cache = getExpeditiousCache({
    namespace: 'expresscache',
    defaultTtl: '1 minute'
});

module.exports = {cache};