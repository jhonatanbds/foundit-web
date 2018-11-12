import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Novo item encontrado</span>
        </div>
        <div class="input-group-prepend">
          <textarea
            placeholder="Titulo"
            type="text"
            class="form-control"
            aria-label="Item"
          />
        </div>
        <textarea
          placeholder="Descrição"
          class="form-control"
          aria-label="Novo item encontrado"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
