const template = document.createElement("template");
template.innerHTML = `
<div class="preview">
  <img class="preview__image" src=""/>
  <div class="preview__info">
    <h2 class="preview__title"></h2>
    <p class="preview__author"></p>
  </div>
</div>
`;

export class PreviewComponent {
  constructor({ author, image, title, id }) {
    this.author = author;
    this.image = image;
    this.title = title;
    this.id = id;
    this.element = this.create();
  }

  create() {
    const node = template.content.cloneNode(true);
    node.querySelector(".preview__image").src = this.image;
    node.querySelector(".preview__image").alt = this.title;
    node.querySelector(".preview__title").textContent = this.title;
    node.querySelector(".preview__author").textContent = this.author;
    const wrapper = document.createElement("div");
    wrapper.appendChild(node);
    wrapper.dataset.bookId = this.id;
    return wrapper;
  }

  render() {
    return this.element;
  }
}
