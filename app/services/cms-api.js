class Api {
  fetchData() {
    const promise = axios({
      url: "https://6756aa03c0a427baf949beca.mockapi.io/api/Products",
      method: "GET",
    });
    return promise;
  }

  getDataById(id) {
    const promise = axios({
      url: `https://6756aa03c0a427baf949beca.mockapi.io/api/Products/${id}`,
      method: "GET",
    });
    return promise;
  }

  addData(product) {
    const promise = axios({
      url: "https://6756aa03c0a427baf949beca.mockapi.io/api/Products",
      method: "POST",
      data: product,
    });
    return promise;
  }

  updateData(product) {
    const promise = axios({
      url: `https://6756aa03c0a427baf949beca.mockapi.io/api/Products/${product.id}`,
      method: "PUT",
      data: product,
    });
  }

  deleteDataById(id) {
    const promise = axios({
      url: `https://6756aa03c0a427baf949beca.mockapi.io/api/Products/${id}`,
      method: "DELETE",
    });
    return promise;
  }
}

export default new Api();
