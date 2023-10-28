
reptileListSize = 1;
//if the browser saves the previous elements
function addInputButtonFunctions(e) {
  var selections =
    " td > div.input-group > input.form-control,  td > select.form-select, td > div.boton-fotos  >button , td > div.boton-fotos > input";

  var rowParent = $(e.target).parent().parent().parent();
  if ($(e.target).is(":checked")) {
    rowParent.find(selections).prop("disabled", false);
  } else {
    rowParent.find(selections).prop("disabled", "disabled");
  }
}

$(".BotonSeleccionReptiles").on("click", addInputButtonFunctions);

function getReptileElementListHTML(reptileObject) {
  reptileListSize++;
  return $.parseHTML(`<tr class="dbItem">
          <th scope="row ">
            ${reptileObject.key}
            <div class="form-check">
              <input class="form-check-input  BotonSeleccionReptiles" type="checkbox" value="" />
            </div>
          </th>

          <td>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                value = ${reptileObject.name}
                placeholder= "Piton"
                aria-label="Python"
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td>
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                value = ${reptileObject.price}
                placeholder = "$4500"
                aria-label= "Precio" 
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td>
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                value = ${reptileObject.regularPrice}
                placeholder= "$7000"
                aria-label= "regularPrice"
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                value = "${reptileObject.genetics}"
                placeholder= "Yellow Belly, Banana, Cryptic"
                aria-label="python"
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td>
            <select class="form-select" aria-label="edad" disabled>
              <option value="Cria"  ${reptileObject.ageEnum[0]} selected>Cria</option>
              <option value="Juvenil" ${reptileObject.ageEnum[1]}>Juenil</option>
              <option value="Adulta" ${reptileObject.ageEnum[2]}>Adulta</option>
            </select>
          </td>

          <td>
            <select class="form-select" aria-label="sexo" disabled>
              <option value="Macho" ${reptileObject.gender[0]} selected>Macho</option>
              <option value="Hembra" ${reptileObject.gender[1]}>Hembra</option>
            </select>
          </td>

          <td>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                value = "${reptileObject.description}"
                placeholder= "Bonita piton de febrero  de este 23"
                aria-label="python"
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td class="d-flex align-items-center">
            <!-- ojo tienen que ser diferentes todos  -->
            <div
              id="carouselExampleControls${reptileListSize}"
              class="carousel slide imagen-admin"
              data-bs-ride="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="./images/1.jpg"
                    class="d-block w-100 imagen-admin"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./images/2.jpg"
                    class="d-block w-100 imagen-admin"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./images/3.jpg"
                    class="d-block w-100 imagen-admin"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls${reptileListSize}"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls${reptileListSize}"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="px-1 boton-fotos">
              <button type="button" class="btn btn-outline-danger" disabled>
                Eliminar
              </button>
            </div>

            <div class="px-1 boton-fotos">
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                disabled
              />
            </div>
          </td>
        </tr>`);
}

function insertarReptil(reptileObject) {
  var reptileHtml = getReptileElementListHTML(reptileObject);

  $(".ReptileList").append(reptileHtml);
  $($(reptileHtml).find(".BotonSeleccionReptiles")).on(
    "click",
    addInputButtonFunctions
  );
}

function logsmh(e) {
  console.log("JJJJj")
  insertarReptil(jajas);
}

var jajas = { key: "jun2", name: "Juan la vibora", price: 5000, regularPrice: 8000, genetics: "Het clown purpura", ageEnum: ["", "selected", "", ""], gender: ["", "selected", "", ""], description: "es juan la vibora" };
var jajas2 = { key: "jun2", name: "Juan la vibora", price: 5000, regularPrice: 8000, genetics: "Het clown purpura", ageEnum: "Cria", gender: "Macho", description: "es juan la vibora" };


insertarReptil(jajas);

function Reptile(arr) {
  this.name = arr[0];
  this.price = arr[1];
  this.regularPrice = arr[2];
  this.genetics = arr[3];
  this.ageEnum = arr[4];
  this.gender = arr[5];
  this.description = arr[6];

}
function readNewItem() {
  var myarr = []
  $(".nuevoItem .reptileGetInput ").each((e, a) => { myarr.push($(a).val()) })
  console.log(myarr)
  var inputs = $(".nuevoItem .reptileGetInput ")
  var myRep = new Reptile(myarr)
  console.log(myRep)


  // var lala = $(".nuevoItem :input").val()
  // console.log(lala)
  // console.log(lala[1])
}
$(".BotonActualizar").on("click", readNewItem)


