const INTERVALS = [
  { label: 'ano', plural: 'anos', seconds: 31536000 },
  { label: 'mês', plural: 'meses', seconds: 2592000 },
  { label: 'dia', plural: 'dias', seconds: 86400 },
  { label: 'hora', plural: 'horas', seconds: 3600 },
  { label: 'minuto', plural: 'minutos', seconds: 60 },
  { label: 'segundo', plural: 'segundos', seconds: 0 },
]

export const datetimeAgo = (date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const interval = INTERVALS.find((item) => item.seconds < seconds)

  const count = Math.floor(seconds / interval.seconds)
  return `${count} ${count !== 1 ? interval.plural : interval.label}`
}
