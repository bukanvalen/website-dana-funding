class AdminController {
  static donations(req, res) {
    res.render("admin/dashboard", { page: "donations" });
  }

  static feedback {
    res.render
  }
}

module.exports = AdminController;