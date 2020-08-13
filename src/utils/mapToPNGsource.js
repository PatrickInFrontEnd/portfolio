import { getImageNumber } from "./getImageNumber"

const mapToPNGSource = ({ node }) => ({
  src: node.childImageSharp.fluid.src || node.childImageSharp.fixed.src,
  relativePath: node.relativePath,
  id: getImageNumber(node.relativePath),
})

export { mapToPNGSource }
