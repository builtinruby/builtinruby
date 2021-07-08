import _ from 'lodash'
import all from '../../data/jobs/*.md'

const transform = ({ filename, html, metadata }) => {
  const date = new Date(metadata.posted_at)
  const permalink = filename.replace(/\.md$/, '')

  return { ...metadata, filename, html, permalink, date }
}

export const jobs = _.chain(all).map(transform).orderBy('date', 'desc').value()

export const findJob = (permalink) => _.find(jobs, { permalink })

export const findJobsByCompanyName = (company) => _.filter(jobs, { company })
