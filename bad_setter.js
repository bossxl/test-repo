var a = request.params("username");
var inputname = a;
user.find({ip: '127.0.0.1'}, function(err, docs){
  var doc = docs[0];
  doc.update({name: inputname});
})