const fs = require('fs-extra')
const path = require('path')

module.exports = (on, config) => {
  const env = config.env.name || 'development'
  const file = path.resolve('.', 'cypress.env.json')

  if (fs.existsSync(file)) {
    const envConfig = fs.readJsonSync(file)[env]
    config.env = Object.assign(config.env, envConfig)
  }

  return config
}
