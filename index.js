function superbowlWin (array) {
  let record = array.find(function(r) { return r.result === "W" })
  if (record) {
    return record.year
  }
}
