<script>
  import {
    Button,
    Card,
    CardBody,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupButtonDropdown,
  } from 'sveltestrap'

  import Navbar from '../components/Navbar.svelte'
  import Cover from '../components/Cover.svelte'

  import rubyCoverImage from '../../static/ruby-cover.svg'
</script>

<style lang="scss" global>
  @import './style/global.scss';

  header {
    background-color: $cover-bg-color;
  }

  section#search {
    float: inline-start;

    .card {
      z-index: 100;
      margin-top: -100px;
      border-radius: 10px;
    }

    button {
      word-wrap: break-word;
    }
  }

  main {
    margin-top: 100px;
  }

  footer {
    margin-top: 100px;
    background-color: #f4f4f4;
    text-align: center;

    padding: 80px 0px;
  }

  .bg-ruby {
    background-color: $cover-bg-color;
  }
</style>

<svelte:head>
  <!-- link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" -->
  <script src="https://kit.fontawesome.com/ac647899b0.js" crossorigin="anonymous"></script>
</svelte:head>

<header>
  <Navbar />
  <Cover />

  <section id="search" class="container-fluid">
    <Row>
      <Col
        xl={{ size: 6, offset: 3 }}
        lg={{ size: 8, offset: 2 }}
        md={{ size: 8, offset: 2 }}
        sm="12"
        xs="12">
        <Card body color="light">
          <CardBody>
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input placeholder="Procurar por vaga..." block />
                  <InputGroupAddon addonType="append">
                      <Button color="dark">Buscar</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </section>
</header>

<main>
  <slot />
</main>

<footer>
  <Container>
    <h5>Built in Ruby</h5>
    <p>Construído com pela <small>&#10084;</small> comunidade Ruby</p>
  </Container>
</footer>