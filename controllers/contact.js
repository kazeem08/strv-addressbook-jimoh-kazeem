const ContactService = require("../services/contact");

module.exports = {
  async addContact(req, res) {
    try {
      req.body.userId = String(req.user.userId);
      const result = ContactService.addContact(req.body);

      return res.successResponse({
        code: 200,
        message: "Data fetched successfully",
        response: result,
      });
    } catch (e) {
      return res.errorResponse({
        message: "Internal server error",
      });
    }
  },
};
