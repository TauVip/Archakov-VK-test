export default {
  addColumn: name => ({
    type: 'COLUMNS:ADD',
    payload: name
  })
}
