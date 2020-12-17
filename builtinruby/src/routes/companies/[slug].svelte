<script context="module">
  import { findCompany, findJobsByCompanyName } from '../../resources'

  export async function preload({ params }) {
    const { slug } = params

    const company = findCompany(slug)
    const jobs = findJobsByCompanyName(company.title)

    if (!company) return this.error(404, 'COMPANY_NOT_FOUND')

    return { company: { ...company, jobs } }
  }
</script>

<script>
  import { Col, Row } from 'sveltestrap'

  export let company
</script>

<style lang="scss" global>
  @import '../../style/theme.scss';
</style>

<svelte:head>
  <title>{company.title} | Built in Ruby</title>
</svelte:head>

<section id="job" class="container">
  <Row class="mb-5">
    <Col>
      <h1 class="h2 mb-0">
        {company.title}
        <br />
        <small class="h5 lead">
          <i class="fas fa-map-marker-alt" aria-hidden="true" />
          {company.location}
        </small>
      </h1>
    </Col>
  </Row>
  <Row>
    <Col md={{ size: 8 }}>
      {@html company.html}

      <Row class="mt-5">
        <Col md="12">
          <h4 class="mb-4">Vagas publicadas pela empresa</h4>
        </Col>
        <Col>
          {#each company.jobs as job }
            <a
              href="/jobs/{ job.permalink }"
              title={ job.title }
              data-id={ job._id }
              class="card text-decoration-none text-dark mb-3 p-0">
              <div class="card-body">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    { job.title }
                  </h5>
                  <small><date title="{ job.posted_at}" class="timeago">
                      há 2 meses
                    </date></small>
                </div>
                <small>{ job.role } @ { job.company }</small>
                <div>
                  {#each job.tags as tag}
                    <span class="badge badge-secondary mr-1">{ tag }</span>
                  {/each}
                </div>
              </div>
            </a>
          {/each}
        </Col>
      </Row>
    </Col>
    <Col>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-clock"
                aria-hidden="true" />
              Fundada em</strong>
            <br />
            <date>{company.founded_at}</date>
          </li>
          <li class="list-group-item">
            <strong class="job-item-description"><i
                class="fas fa-user-astronaut fa-fw"
                aria-hidden="true" />
              Área de atuação</strong>
            <br />
            {company.category}
          </li>
          {#if company.blog}
            <li class="list-group-item">
              <strong class="job-item-description"><i
                  class="fas fa-blog fa-fw"
                  aria-hidden="true" />
                Blog</strong>
              <br />
              <a href={company.blog} target="_blank">{company.blog}</a>
            </li>
          {/if}
          {#if company.linkedin}
            <li class="list-group-item">
              <strong class="job-item-description"><i
                  class="fab fa-linkedin fa-fw"
                  aria-hidden="true" />
                LinkedIn</strong>
              <br />
              <a
                href="https://www.linkedin.com/company/{company.linkedin}/about/"
                target="_blank">@{company.linkedin}</a>
            </li>
          {/if}
          {#if company.github}
            <li class="list-group-item">
              <strong class="job-item-description"><i
                  class="fab fa-github fa-fw"
                  aria-hidden="true" />
                GitHub</strong>
              <br />
              <a
                href="https://github.com/{company.github}"
                target="_blank">@{company.github}</a>
            </li>
          {/if}
          {#if company.website}
            <li class="list-group-item">
              <strong class="job-item-description"><i
                  class="fas fa-window-maximize fa-fw"
                  aria-hidden="true" />
                Site</strong>
              <br />
              <a href={company.website} target="_blank">{company.website}</a>
            </li>
          {/if}
        </ul>
      </div>
    </Col>
  </Row>
</section>
