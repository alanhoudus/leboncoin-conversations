function timestampToDate(timestamp) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(timestamp * 1000).toLocaleTimeString('fr-FR', options);
  console.log(date);
  return date;
}

export default timestampToDate;
