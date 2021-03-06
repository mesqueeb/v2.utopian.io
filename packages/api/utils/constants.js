const Joi = require('joi')

const licenses = ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bs1-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']

const validation = {
  username: Joi.string().trim().lowercase().required().min(3).max(32).regex(/^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/)
}

module.exports = {
  licenses,
  validation
}