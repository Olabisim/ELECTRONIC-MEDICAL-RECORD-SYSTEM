const getMe = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      staff: req.staff,
    },
  });
};

export { getMe };
