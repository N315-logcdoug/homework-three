import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];
  console.log(subPageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(pageID);
    }
    MODEL.changePage(pageID, subPageID);
  }
}

function initApp() {
  $(window).on("hashchange", route);
}

$(document).ready(function () {
  route();
  initApp();
});
