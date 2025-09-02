// this module deletes the temporary files created by the system while renaming user's files.

const fs = require('fs')
const path = require('path')

const deleteDirectory = ({ folderPath }) => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectory({ folderPath: curPath }) // recursive call
      } else {
        fs.unlinkSync(curPath) // deletes file
      }
    })
    fs.rmdirSync(folderPath)
  }
}

module.exports = deleteDirectory
