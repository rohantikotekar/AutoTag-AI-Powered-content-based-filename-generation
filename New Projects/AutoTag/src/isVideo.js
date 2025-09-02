// checks if its a video

module.exports = ({ ext }) => {
  const videoTypes = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.webm']
  return videoTypes.includes(ext.toLowerCase())
}
