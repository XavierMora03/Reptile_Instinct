// por si el navegador guarda coockies
var selecciones =
  " td > div.input-group > input.form-control,  td > select.form-select, td > div.boton-fotos  >button , td > div.boton-fotos > input";

var disableAlldata =
  " tr.dbItem td > div.input-group > input.form-control,tr.dbItem > td > select.form-select, td > div.boton-fotos  >button , ";

("tr.dbItem > td > div.boton-fotos > input");

var limpiarTexto =
  "tr >  td > div.input-group > input.form-control , td > div.px-2 > input";
$(limpiarTexto).val("");

if ($(":checked")) {
  $(":checked").prop("checked", false);
  $(disableAlldata).prop("disabled", "disabled");
}

$("th > div.form-check > input.form-check-input").on("click", (e) => {
  var rowParent = $(e.target).parent().parent().parent();
  if ($(e.target).is(":checked")) {
    rowParent.find(selecciones).prop("disabled", false);
  } else {
    rowParent.find(selecciones).prop("disabled", "disabled");
  }
});
