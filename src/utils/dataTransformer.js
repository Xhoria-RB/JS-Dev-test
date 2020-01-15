module.exports = function dataTransformer(data) {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone
  }
}
