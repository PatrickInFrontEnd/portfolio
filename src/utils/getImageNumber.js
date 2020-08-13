const getImageNumber = string => {
  const stringID = string
    .split("_")
    .filter((el, i, arr) => i === arr.length - 1)
    .join("")
    .split(".")
    .filter((el, i, arr) => i === 0)
    .join("")

  return parseInt(stringID) || undefined
}
export { getImageNumber }
