import { getImage } from "gatsby-plugin-image"
import { getImageNumber } from "./getImageNumber"

const mapToPNGSource = ({ node }) => ({
  image: getImage(node.childImageSharp),
  relativePath: node.relativePath,
  id: getImageNumber(node.relativePath),
})

export { mapToPNGSource }
