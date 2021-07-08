import _ from 'lodash'
import all from '../../data/companies/*.md'

const transform = ({ filename, html, metadata }) => {
  const date = new Date(metadata.posted_at)
  const permalink = filename.replace(/\.md$/, '')

  return { ...metadata, filename, html, permalink, date }
}

export const companies = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export const findCompany = (permalink) => _.find(companies, { permalink })

export const findCompanyByName = (name) => _.find(companies, { title: name })
