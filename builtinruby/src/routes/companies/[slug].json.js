import _ from 'lodash'
import { companies } from '../../resources'

const lookup = new Map()
_.map(companies, (company) => {
  lookup.set(company.permalink, JSON.stringify(company))
})

export const get = (req, res, next) => {
  const { permalink } = req.params

  if (lookup.has(permalink)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(lookup.get(permalink))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
