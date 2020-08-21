const isAnObject = val =>
  val !== null && !Array.isArray(val) && typeof val === "object"

export { isAnObject }
