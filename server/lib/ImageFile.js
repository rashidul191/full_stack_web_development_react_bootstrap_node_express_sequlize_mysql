const fs = require("fs");
const path = require("path");

class ImageFile {
  constructor(folder = "") {
    this.folder = folder;
  }

  store(file) {
    if (!file) return null;
    return this.folder ? `${this.folder}/${file.filename}` : file.filename;
  }

  delete(filePath) {
    if (!filePath) return;

    const fullPath = path.join(process.cwd(), "public", "uploads", filePath);

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  update(oldPath, file) {
    if (!file) return oldPath;
    this.delete(oldPath);
    return this.store(file);
  }

  url(filePath, fallback = "images/no-image.png") {
    return filePath ? `/uploads/${filePath}` : `/${fallback}`;
  }
}

module.exports = ImageFile;
