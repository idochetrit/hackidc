export function handleError(err, res) {
  console.warn(`ERROR: ${err}, ${err.stack}`);
  const errorMsg =
    process.env.NODE_ENV === "production"
      ? "Something wrong..."
      : `Error occured: ${err}, See logs...`;
  return res.status(500).send(errorMsg);
}

export function handleNotFound(err, res) {
  console.warn(`NA: ${err}`);
  return res.status(404).send(`not found: ${err}`);
}

export function handleUnauthorize(err, res) {
  console.warn(`NA: ${err}`);
  return res.status(401).send(`Unauthorize: ${err}`);
}
