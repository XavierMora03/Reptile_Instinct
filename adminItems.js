// por si el navegador guarda coockies
$("tr.nuevoItem >  td > div.input-group > input.form-control").val("");
if ($(":checked")) {
  $(":checked").prop("checked", false);
  $(
    " td > div.input-group > input.form-control,  td > select.form-select"
  ).prop("disabled", "disabled");
}

$("th > div.form-check > input.form-check-input").on("click", (e) => {
  var rowParent = $(e.target).parent().parent().parent();
  if ($(e.target).is(":checked")) {
    rowParent
      .find(
        " td > div.input-group > input.form-control,  td > select.form-select"
      )
      .prop("disabled", false);
  } else {
    rowParent
      .find(
        " td > div.input-group > input.form-control,  td > select.form-select"
      )
      .prop("disabled", "disabled");
    console.log("noooo checada");
  }
});
