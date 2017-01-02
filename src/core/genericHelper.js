function isStringAndNotEmpty (value) {
  return typeof value === 'string' && value.length > 0
}

export default {
  isStringAndNotEmpty: isStringAndNotEmpty
}
