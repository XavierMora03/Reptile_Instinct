// por si el navegador guarda coockies
var selecciones =
  " td > div.input-group > input.form-control,  td > select.form-select, td > div.boton-fotos  >button , td > div.boton-fotos > input";

function disableItems() {
  var itemsToDisable =
    " tr.dbItem > td > div.input-group > input.form-control,tr.dbItem >  td > select.form-select,tr.dbItem > td > div.boton-fotos  >button ,tr.dbItem > td > div.boton-fotos > input";
  $(itemsToDisable).prop("disabled", "disabled");
}
disableItems();
$(
  "tr >  td > div.input-group > input.form-control , td > div.px-2 > input"
).val("");

if ($(":checked")) {
  $(":checked").prop("checked", false);
  console.log($(":checked"));
}

$("th > div.form-check > input.form-check-input").on("click", (e) => {
  console.log("se presiono pai");
  var rowParent = $(e.target).parent().parent().parent();
  if ($(e.target).is(":checked")) {
    rowParent.find(selecciones).prop("disabled", false);
  } else {
    rowParent.find(selecciones).prop("disabled", "disabled");
  }
});
