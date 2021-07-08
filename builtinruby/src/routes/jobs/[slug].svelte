<script context="module">
  import { findJob, findCompanyByName } from '../../resources'

  export async function preload({ params }) {
    const { slug } = params

    const job = findJob(slug)
    const company = findCompanyByName(job.company)

    if (job == null) return this.error(404, 'JOB_NOT_FOUND')

    return {
      job: {
        ...job,
        company: company || job.company,
      },
    }
  }
</script>

<script>
  import _ from 'lodash'
  import { Col, Row } from 'sveltestrap'

  const slugify = (value) => _.kebabCase(value)

  export let job
</script>

<style lang="scss" global>
  @import '../../style/theme.scss';
</style>

<svelte:head>
  <title>{job.title} | Built in Ruby</title>
</svelte:head>

<section id="job" class="container">
  <Row class="mb-5">
    <Col>
      <h1 class="h2 mb-0">
        {job.title}
        <br />
        <small class="h5 lead">{job.role}
          @
          {#if job.company.title != null}
            <a
              href="/companies/{slugify(job.company.title)}">{job.company.title}</a>
          {:else}{job.company}{/if}
        </small>
      </h1>
    </Col>
  </Row>
  <Row>
    <Col md={{ size: 8 }}>
      {@html job.html}
    </Col>
    <Col>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-clock fa-fw"
                aria-hidden="true" />
              Vaga publicada</strong>
            <br />
            <date class="timeago" title={job.created_at}>há 2 meses</date>
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-user-astronaut fa-fw"
                aria-hidden="true" />
              Área de atuação</strong>
            <br />
            {job.role}
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-user-friends fa-fw"
                aria-hidden="true" />
              Nível</strong>
            <br />
            {job.level}
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-chalkboard-teacher fa-fw"
                aria-hidden="true" />
              Contratação</strong>
            <br />
            {job.employment_term}
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-money-check-alt fa-fw"
                aria-hidden="true" />
              Pretenção</strong>
            <br />
            {job.pay_rate}
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-map-marker-alt fa-fw"
                aria-hidden="true" />
              Local</strong>
            <br />
            Remoto
          </li>
          {#if job.website}
            <li class="list-group-item">
              <strong class="job-item-description"><i
                  class="fas fa-window-maximize fa-fw"
                  aria-hidden="true" />
                Site</strong>
              <br />
              <a href={job.website} target="_blank">{job.website}</a>
            </li>
          {/if}
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-tags fa-fw"
                aria-hidden="true" />
              Tags</strong>
            <br />

            {#each job.tags as tag}
              <span class="badge badge-danger mr-1">{tag}</span>
            {/each}
          </li>
        </ul>
      </div>
    </Col>
  </Row>
</section>
