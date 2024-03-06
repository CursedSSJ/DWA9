export class PreviewComponent {
  constructor({ author, image, title, id }) {
    this.author = author;
    this.image = image;
    this.title = title;
    this.id = id;
  }

  createImageElement() {
    const imageElement = document.createElement("img");
    imageElement.classList.add("preview__image");
    imageElement.src = this.image;
    imageElement.alt = this.title;
    return imageElement;
  }

  createTitleElement() {
    const titleElement = document.createElement("h2");
    titleElement.classList.add("preview__title");
    titleElement.textContent = this.title;
    return titleElement;
  }

  createAuthorElement() {
    const authorElement = document.createElement("p");
    authorElement.classList.add("preview__author");
    authorElement.textContent = this.author;
    return authorElement;
  }

  createInfoContainer() {
    const previewInfoContainer = document.createElement("div");
    previewInfoContainer.classList.add("preview__info");
    previewInfoContainer.appendChild(this.createTitleElement());
    previewInfoContainer.appendChild(this.createAuthorElement());
    return previewInfoContainer;
  }

  render() {
    const previewContainer = document.createElement("div");
    previewContainer.classList.add("preview");
    previewContainer.dataset.bookId = this.id;

    previewContainer.appendChild(this.createImageElement());
    previewContainer.appendChild(this.createInfoContainer());

    return previewContainer;
  }
}
