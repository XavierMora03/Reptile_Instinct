// por si el navegador guarda coockies
reptileListSize = 1;
function addInputButtonFunctions(e) {
	var selecciones =
		" td > div.input-group > input.form-control,  td > select.form-select, td > div.boton-fotos  >button , td > div.boton-fotos > input";

	var rowParent = $(e.target).parent().parent().parent();
	if ($(e.target).is(":checked")) {
		rowParent.find(selecciones).prop("disabled", false);
	} else {
		rowParent.find(selecciones).prop("disabled", "disabled");
	}
}
$(".BotonSeleccionReptiles").on("click", addInputButtonFunctions);

function getReptileElementListHTML(objetoReptil) {
	reptileListSize++;
	return $.parseHTML(`<tr class="dbItem">
          <th scope="row ">
            1
            <div class="form-check">
              <input class="form-check-input  BotonSeleccionReptiles" type="checkbox" value="" />
            </div>
          </th>

          <td>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder= ${objetoReptil.nombre}
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
                placeholder="$4500"
                aria-label="Precio"
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
                placeholder="$6000"
                aria-label="PrecioR"
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
                placeholder="Yellow Belly, Banana, Cryptic"
                aria-label="python"
                aria-describedby="basic-addon1"
                disabled
              />
            </div>
          </td>
          <td>
            <select class="form-select" aria-label="edad" disabled>
              <option value="Cria" selected>Cria</option>
              <option value="Juvenil">Juenil</option>
              <option value="Adulta">Adulta</option>
            </select>
          </td>

          <td>
            <select class="form-select" aria-label="sexo" disabled>
              <option value="Macho" selected>Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </td>

          <td>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="piton febrero 22 traida bonito patron"
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

function insertarReptil(objetoReptil) {
	var reptileHtml = getReptileElementListHTML(objetoReptil);

	$(".ReptileList").append(reptileHtml);
	$($(reptileHtml).find(".BotonSeleccionReptiles")).on(
		"click",
		addInputButtonFunctions
	);
}

var jajas = { nombre: "jaja" };

insertarReptil(jajas);
