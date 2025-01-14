function datetimeShort(timeStr) {
  const timeDate = new Date(timeStr);
  const formattedDateStr = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(timeDate));

  return formattedDateStr;
}

export default datetimeShort;
