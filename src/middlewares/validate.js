export const validate = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      if (source === "query" || source === "params") {
        req[source] = { ...req[source] };
      }
      const data = schema.parse(req[source]);
      req[source] = data;

      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.errors || error.message,
      });
    }
  };
};
