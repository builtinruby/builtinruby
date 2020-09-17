const timeagoSetup = () => {
  const { DateTime } = luxon;

  const elements = document.querySelectorAll('.timeago');
  elements.forEach((item) => {
    const dateValue = item.innerText;
    item.innerText = DateTime.fromISO(dateValue).setLocale('pt').toRelativeCalendar();
  });
};
