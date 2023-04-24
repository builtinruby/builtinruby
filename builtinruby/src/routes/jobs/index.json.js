import { jobs } from '../../resources'

const contents = JSON.stringify(
  jobs.map((job) => ({
    title: job.title,
    slug: job.permalink,
  }))
)

export const get = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(contents)
}