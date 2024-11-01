window.addEventListener("DOMContentLoaded", function () {
  let confirmationModal = $("#confirmationModal");
  if (confirmationModal.length > 0) {
    $(confirmationModal).addClass("custom--modal");
    $(confirmationModal).find(".close").remove();
    $(confirmationModal).addClass("p-4");
    $(confirmationModal).find(".modal-body").addClass("p-4");
    $(confirmationModal).find(".modal-header").append(`
                <span type="button" data-bs-dismiss="modal">
                    <i class="las la-times"></i>
                </span>
                `);
    $(confirmationModal)
      .find(".btn--primary")
      .addClass("btn--base")
      .removeClass("btn--primary");
  }
});
