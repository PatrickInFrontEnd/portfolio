const getImageName = node => node.relativePath.split("_")[0] || null

export { getImageName }
