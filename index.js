export const swedish_ssn_regex =
  /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/

export default function (ajv) {
  ajv.addFormat('swedish-ssn', {
    type: 'string',
    errors: true,
    validate: (data) => swedish_ssn_regex.test(data),
  })
}
