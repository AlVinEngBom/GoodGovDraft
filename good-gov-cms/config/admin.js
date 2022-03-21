module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25247e26d50491f9d90f17498a78daee'),
  },
});
