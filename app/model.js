export function changePage(pageID, subPageID) {
  if (subPageID == undefined) {
    $.get(`../pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        alert("Page cannot be found. Please check your URL.");
      }
    });
  } else {
    $.get(`../pages/${pageID}/${subPageID}.html`, function (data) {
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        alert("Page cannot be found. Please check your URL.");
      }
    });
  }
}
