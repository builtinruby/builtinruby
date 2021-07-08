<script>
  import { Button, Card, Container, Col, Row } from 'sveltestrap'
  import { jobs, companies } from '../resources'
</script>

<style lang="scss" global>
  @import './style/theme';

  $primary-color: #4c4c4c;

  section#last-jobs {
    h1 {
      text-align: center;

      font-family: 'Open Sans' sans-serif;
      font-weight: 200;
      font-size: 3rem;

      color: $primary-color;

      margin-bottom: 60px;
    }
  }

  section#last-companies {
    margin-top: 100px;

    h1 {
      text-align: center;

      font-family: 'Open Sans' sans-serif;
      font-weight: 200;
      font-size: 3rem;

      color: $primary-color;

      margin-bottom: 60px;
    }
  }

  .job-list-item {
    color: $primary-color !important;

    date {
      font-size: 0.8rem;
    }
  }

  .btn-items-list {
    padding: 5px 60px;
  }
</style>

<svelte:head>
  <title>Built in Ruby</title>
</svelte:head>

<section id="last-jobs">
  <Container>
    <h1>Ultimas Vagas Publicadas</h1>

    <Row>
      {#each jobs as job}
        <Col md="12" class="mb-4">
          <a
            class="job-list-item"
            href="/jobs/{job.permalink}"
            title={job.title}
            data-id={job.id}>
            <Card body color="light">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{job.title}</h5>
                <date title={job.createdAt} class="timeago">há 2 meses</date>
              </div>
              <small>{job.role} @ {job.company}</small>
              <div>
                {#each job.tags as tag}
                  <span class="badge badge-secondary mr-2">{tag}</span>
                {/each}
              </div>
            </Card>
          </a>
        </Col>
      {/each}

      <Col md="12" class="text-center">
        <Button outline color="danger" size="sm" class="btn-items-list">
          Todas as vagas
        </Button>
      </Col>
    </Row>
  </Container>
</section>

<section id="last-companies">
  <Container>
    <h1>Ultimas Empresas Cadastradas</h1>

    <Row>
      {#each companies as company}
        <Col md="6" class="mb-4">
          <a
            class="job-list-item"
            href="/companies/{company.permalink}"
            title={company.title}
            data-id={company._id}>
            <Card body color="light">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{company.title}</h5>
                <date title={company.createdAt} class="timeago">há 2 meses</date>
              </div>
              <small>{company.location}</small>
            </Card>
          </a>
        </Col>
      {/each}

      <Col md="12" class="text-center">
        <Button outline color="danger" size="sm" class="btn-items-list">
          Todas as empresas
        </Button>
      </Col>
    </Row>
  </Container>
</section>

