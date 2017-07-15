module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index')
  });
  app.get('/rooms/flower',function(req,res){
    res.render('rooms/flower')
  });
  app.get('/rooms/moon',function(req,res){
    res.render('rooms/moon')
  });
  app.get('/rooms/mountain',function(req,res){
    res.render('rooms/mountain')
  });
  app.get('/rooms/star',function(req,res){
    res.render('rooms/star')
  });

}