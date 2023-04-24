<script>
  import { Container, Button, Row, Col } from 'sveltestrap'

  import rubyCoverImage from '../../static/ruby-cover.svg'
</script>

<style lang="scss">
  @import './style/theme';

  section#cover {
    min-height: 500px;

    h1.cover-title {
      font-family: 'Open Sans' sans-serif;
      font-weight: 100;
      font-size: 3.8rem;
      line-height: 4.2rem;
      letter-spacing: -0.005em;

      color: $light;

      margin: 100px auto 20px auto;
    }

    img.cover-image {
      margin-top: 40px;
      height: 14rem;
    }
  }
</style>

<section id="cover">
  <Container>
    <Row>
      <Col xs="12" md="7">
        <h1 class="cover-title">Descubra onde<br />será seu próximo tour</h1>
        <a role="button" class="btn btn-outline-light" href="/jobs">— ver todas as vagas</a>
      </Col>
      <Col xs="12" md="5" class="text-center">
        <img class="cover-image" src={rubyCoverImage} alt="" />
      </Col>
    </Row>
  </Container>
</section>

