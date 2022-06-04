export default (fn) => {
  return (req, res, next) => {
    //   catches whatever error
    fn(req, res, next).catch((err) => next(err));
  };
};
