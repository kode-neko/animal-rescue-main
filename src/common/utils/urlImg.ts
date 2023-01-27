function urlImg(imgPath: string): string {
  return new URL(imgPath, import.meta.url).href
}

export default urlImg;