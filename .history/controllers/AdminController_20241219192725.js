class AdminController {
  static donations(req, res) {
    mo
    res.render("admin/dashboard", { page: "donations" });
  }

  static feedback(req, res) {
    res.render("admin/dashboard", { page: "feedback" });
  }
}

module.exports = AdminController;