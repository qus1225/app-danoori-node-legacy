module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index')
  });

  app.get('/reservation',function(req,res){
    res.render('reservation')
  });

  app.get('/rooms/landscapes',function(req,res){
    res.render('rooms/landscapes')
  });
  app.get('/rooms/facilities',function(req,res){
    res.render('rooms/facilities')
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