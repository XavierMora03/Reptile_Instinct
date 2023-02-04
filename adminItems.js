// por si el navegador guarda coockies
//
var selecciones =
  " td > div.input-group > input.form-control,  td > select.form-select, td > div.px-3 >button";

$("tr.nuevoItem >  td > div.input-group > input.form-control").val("");
if ($(":checked")) {
  $(":checked").prop("checked", false);
  $(selecciones).prop("disabled", "disabled");
}

$("th > div.form-check > input.form-check-input").on("click", (e) => {
  var rowParent = $(e.target).parent().parent().parent();
  if ($(e.target).is(":checked")) {
    rowParent.find(selecciones).prop("disabled", false);
  } else {
    rowParent.find(selecciones).prop("disabled", "disabled");
  }
});
