<script>
  import {
    Badge,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'sveltestrap'

  import logo from '../../static/logo-light.svg'

  let isOpen = false
  const handleUpdate = (event) => (isOpen = event.detail.isOpen)

  /* export let segment */
</script>

<style lang="scss" global>
  .badge-beta {
    font-size: 0.4em !important;
    margin-left: -4px;
  }
</style>

<Navbar color="ruby" dark expand="md">
  <Container>
    <NavbarBrand href="/">
      <img src={logo} alt="Built in Ruby" />
      <Badge color="light" class="badge-beta">beta</Badge>
    </NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink href="/about">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/companies">Empresas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/jobs">Vagas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/events">Eventos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/jobs/create">Publicar Vagas</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Container>
</Navbar>
