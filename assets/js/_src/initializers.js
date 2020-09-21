const timeagoSetup = () => {
  const { DateTime } = luxon;

  const elements = document.querySelectorAll('.timeago');
  elements.forEach((item) => {
    const dateValue = item.innerText;
    item.innerText = DateTime.fromISO(dateValue).setLocale('pt').toRelativeCalendar();
  });
};

const tailWritterSetup = () => {
  tail.writer.strings.register('pt_BR', {
    chars:          "Caracteres",
    lines:          "Linhas",
    words:          "Palavras",

    // Markups
    bbcode:         "BBCode",
    markdown:       "Markdown",
    textile:        "Textile",

    // Actions
    about:          "Sobre",
    aboutDevelop:   "Desenvolvido por $1",
    aboutDesc1:     "escrito em JavaScript Vanila",
    aboutDesc2:     "publicado sub a licença MIT",
    aboutDesign:    "Desenhado por $1",
    aboutLink1:     "Repositório no GitHub",
    aboutLink2:     "Documentação",
    aboutLink3:     "Demonstração",
    aboutLink4:     "Reportar Bug",
    fullscreen:     "Alternar Tela Cheia",
    indent:         "Indentar",
    markup:         "Alterar Markup",
    modeWrite:      "Escrever",
    modePreview:    "Visualizar",
    outdent:        "Desindentar",
    preview:        "Mudar Visualização",
    previewEmpty:   "Não ha nada para ser visualizado ainda!",

    // Debug
    errorAction:    "A ação passada é desconhecida!",
    errorMarkup:    "O markup passado não existe!",

    // Markups
    acronym:        "Acrônimo",
    big:            "Grande",
    bold:           "Negrito",
    center:         "Paragrafo centralizado",
    cite:           "Citação",
    code:           "Código em linha",
    codeblock:      "Bloco de Código",
    color:          "Cor do Texto",
    definition:     "Definir Lista",
    emphasize:      "Enfatizar",
    email:          "E-mail",
    emailAddress:   "Endereço de E-mail",
    emailButton:    "Adicionar Link para E-mail",
    emailTitle:     "Titulo do E-mail",
    font:           "Tipo da Fonte",
    header:         "Titulo",
    headers:        "Títulos",
    hr:             "Linha Horizontal",
    image:          "Imagem",
    imageButton:    "Adicionar Imagem",
    imageTitle:     "Titulo da Imagem",
    imageURL:       "URL da Imagem",
    italic:         "Itálico",
    justify:        "Justificar paragrafo",
    left:           "Paragrafo a esquerda",
    link:           "Hiperlink",
    linkNewTab:     "Abrir Link em nova Aba",
    linkButton:     "Adicionar Link",
    linkTitle:      "Titulo do Link",
    linkURL:        "URL do Link",
    listOrdered:    "Lista Ordenada",
    listUnordered:  "Lista Desordenada",
    listChecked:    "Lista Marcada",
    listUnchecked:  "Lista Desmarcada",
    pre:            "Texto Pré-formatado",
    quote:          "Citação",
    right:          "Paragrafo a direita",
    size:           "Tamanho do Texto",
    small:          "Pequeno",
    span:           "Span",
    strikethrough:  "Taxado",
    strong:         "Negrito",
    sub:            "Subscript",
    sup:            "Superscript",
    table:          "Tabela",
    tableButton:    "Adicionar Tabela",
    tableHeader:    "Adicionar Cabeçalho da Tabela",
    tableFooter:    "Adicionar Rodapé da Tabela",
    tableCols:      "Colunas",
    tableRows:      "Linhas",
    underline:      "Sublinhar"
  });
};

App.setup = () => {
  const { debug } = App.config;
  if(debug) console.debug('Setting up application...');

  timeagoSetup();
  tailWritterSetup();
};
