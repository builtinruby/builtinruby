<script context="module">
  import { companies } from '../../resources'

  export function preload() {
    return { companies }
	}
</script>

<script>
  import { Col, Row } from 'sveltestrap'

  export let companies
</script>

<style lang="scss" global>
  @import '../../style/theme.scss';
</style>

<svelte:head>
  <title>Empresas | Built in Ruby</title>
</svelte:head>

<section id="job" class="container">
  <Row class="mb-5">
    <Col>
      <h1 class="h2 mb-0">
        Empresas
        <br />
        <small class="h5 lead">
          Lista de algumas empresas que tem Ruby na sua stack e utilizam esta plataforma para contar um pouquinho da sua cultura
        </small>
      </h1>
    </Col>
  </Row>

  <Row>
    <Col>
      <Row>
        <Col>
          {#each companies as company }
            <a
              href="/companies/{ company.permalink }"
              title={ company.title }
              data-id={ company._id }
              class="card text-decoration-none text-dark mb-3 p-0">
              <div class="card-body">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    { company.title }
                  </h5>
                  <small><date title="{ company.posted_at}" class="timeago">
                      há 2 meses
                    </date></small>
                </div>
                <small>{ company.location }</small>
              </div>
            </a>
          {/each}
        </Col>
      </Row>
    </Col>
  </Row>
</section>
