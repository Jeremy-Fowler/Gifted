export class Giphy {
  constructor (data) {
    this.url = data.images.original.url
    this.tag = data.title
    this.id = data.id
  }
}