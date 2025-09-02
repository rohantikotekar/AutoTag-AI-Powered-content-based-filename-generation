// checks if a given file is an image

module.exports = ({ ext }) => {
  const imageTypes = ['.jpg', '.jpeg', '.png', '.bmp', '.tif', '.tiff']
  return imageTypes.includes(ext)
}
