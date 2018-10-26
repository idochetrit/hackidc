export function handleError(err, res) {
  console.warn(`ERROR: ${err}`);
  return res.status(500).send(`Error occured: ${err}`);
}

export function handleNotFound(err, res) {
  console.warn(`NA: ${err}`);
  return res.status(404).send(`not found: ${err}`);
}
