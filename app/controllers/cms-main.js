import api from "../services/cms-api.js";
import Products from "../models/cms-product.js";

const getElmId = (id) => document.getElementById(id);

const renderListProduct = (data) => {
  let content = "";
  data.forEach((product, index) => {
    content += `
      <tr class="bg-white border-b">
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${
          index + 1
        }</td>
        <td class="px-6 py-4">${product.name}</td>
        <td class="px-6 py-4">${product.price}</td>
        <td class="px-6 py-4">
            <img src="${product.img}" width="60"/>
        </td>
        <td class="px-6 py-4">${product.desc}</td>
        <td class="px-6 py-4">
          <button
            onclick="handleEdit('${product.id}')"
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Edit
          </button>
          <button
            onclick="handleDelete('${product.id}')"
            class="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });
  getElmId("tbListProduct").innerHTML = content;
};

const getListProduct = () => {
  const promise = api.fetchData();
  promise
    .then((result) => {
      renderListProduct(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getListProduct();

const handleDelete = (id) => {
  const promise = api.deleteDataById(id);
  promise
    .then((result) => {
      alert(`Delete product name: ${result.data.name} success!`);
      getListProduct();
    })
    .catch((error) => {
      console.log(error);
    });
};
window.handleDelete = handleDelete;

getElmId("btnAdd").addEventListener("click", () => {
  // Update title modal
  getElmId("title_modal").innerHTML = "Add Phone Management";
});

const handleAdd = () => {
  // Lấy value input
  const name = getElmId("name").value;
  const price = getElmId("price").value;
  const screen = getElmId("screen").value;
  const backCam = getElmId("backCam").value;
  const frontCam = getElmId("frontCam").value;
  const img = getElmId("img").value;
  const desc = getElmId("desc").value;
  const type = getElmId("type").value;
  // Tạo object product
  const product = new Products(
    "",
    name,
    price,
    screen,
    backCam,
    frontCam,
    img,
    desc,
    type
  );
  // call api add product
  const promise = api.addData(product);
  promise
    .then((result) => {
      alert(`Add product name: ${result.data.name} success!`);
      // Render list product
      getListProduct();
      // Close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch((error) => {
      console.log(error);
    });
};
window.handleAdd = handleAdd;

const handleEdit = (id) => {
  // Update title modal
  getElmId("title_modal").innerHTML = "Edit Phone Management";
  // Call api get product by id
  const promise = api.getDataById(id);
  // getElmId("crud-modal").classList.remove("hidden");
  // const modal = document.querySelector("dialog");
  // modal.setAttribute("role", "dialog");
  // modal.showModal();

  promise
    .then((result) => {
      const { data } = result;
      console.log(data);

      // Dom tới các thẻ input gán giá trị
      getElmId("name").value = data.name;
      getElmId("price").value = data.price;
      getElmId("screen").value = data.screen;
      getElmId("backCam").value = data.backCam;
      getElmId("frontCam").value = data.frontCam;
      getElmId("img").value = data.img;
      getElmId("desc").value = data.desc;
      getElmId("type").value = data.type;
    })
    .catch((error) => {
      console.log(error);
    });
};
window.handleEdit = handleEdit;
