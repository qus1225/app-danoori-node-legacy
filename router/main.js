module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index')
  });
  app.get('/rooms/flower',function(req,res){
    res.render('rooms/flower')
  });
}