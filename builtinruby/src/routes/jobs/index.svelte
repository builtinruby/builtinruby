<script context="module">
  import { jobs } from '../../resources'

  export function preload() {
    return { jobs }
  }
</script>

<script>
  import { Col, Row } from 'sveltestrap'

  export let jobs
</script>

<style lang="scss" global>
  @import '../../style/theme.scss';
</style>

<svelte:head>
  <title>Vagas | Built in Ruby</title>
</svelte:head>

<section id="jobs" class="container">
  <Row class="mb-5">
    <Col>
      <h1 class="h2 mb-0">Vagas <br /> <small class="h5 lead" /></h1>
    </Col>
  </Row>

  <Row>
    <Col>
      <Row>
        <Col>
          {#each jobs as job}
            <a
              href="/jobs/{job.permalink}"
              title={job.title}
              data-id={job._id}
              class="card text-decoration-none text-dark mb-3 p-0">
              <div class="card-body">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{job.title}</h5>
                  <small><date title={job.posted_at} class="timeago">
                      há 2 meses
                    </date></small>
                </div>
                <small>{job.role} @ {job.company}</small>
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
  </Row>
</section>
