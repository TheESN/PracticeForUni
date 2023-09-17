const express = require('express'); //Line 1
const app = express(); //Line 2

const clientRouter = require('./lab2_routes/client.routes');
const applicationRouter = require('./lab2_routes/application.routes');
const serviceRouter = require('./lab2_routes/service.routes');

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.json());
app.use('lab2_client', clientRouter);
app.use('lab2_application', applicationRouter);
app.use('lab2_service', serviceRouter);

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'I AM GONNA MAKE AN ANNOUNCEMENT' }); //Line 10
}); //Line 11

app.get('/lab1_1/:a', (req, res) => { 
    res.send({ express: 'Parameter is set to ' + req.params.a }); 
  }); 

  app.get('/lab1_2', (req, res) => { 
    var answer1 = 0;
    var answer2 = 0;
    if (req.query.a == 0){
        res.send({express: 'No answer'});
    }
    else{
        var d = req.query.b * req.query.b - 4 * req.query.a * req.query.c;
        if (d < 0){
            res.send({express: 'No answer'});
        }
        else{
            answer1 = (-req.query.b + Math.sqrt(d)) / (2 * req.query.a);
            answer2 = (-req.query.b - Math.sqrt(d)) / (2 * req.query.a);

            if (answer1 === answer2) {
                res.send({express: 'Answer is ' + answer1});
            }
            else{
                res.send({express: 'Answers are ' + answer1 + ' and ' + answer2});
            }
        }
    }
  }); 

  app.get('/date', (req, res) => { 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday'];
    var d = new Date(req.query.date);
    var n = d.getDay();
    res.send({ express: days[n] }); 
  }); 

  app.get('/fib/:num', (req, res) => { 
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;

    if (req.params.num == 0){
        res.send({ express: 0 }); 
    }
    else if(req.params.num == 1){
        res.send({ express: 1 }); 
    }
    else{
        for (var i = 1; i < req.params.num; i++){
            if (n3 != 0){
                n1 = n2;
                n2 = n3;
            }
            n3 = n1 + n2;
        }
    }
    res.send({ express: n3 }); 
  }); 

  app.get('/reg/:num', (req, res) => { 
    var regions = [
        'null',
        'Республика Адыгея',
        'Республика Башкортостан',
        'Республика Бурятия',
        'Республика Алтай',
        'Республика Дагестан',
        'Республика Ингушетия',
        'Кабардино-Балкарская Республика',
        'Республика Калмыкия',
        'Карачаево-Черкесская Республика',
        'Республика Карелия',
        'Республика Коми',
        'Республика Марий Эл',
        'Республика Мордовия',
        'Республика Саха-Якутия',
        'Республика Северная Осетия-Алания',
        'Республика Татарстан',
        'Республика Тыва',
        'Удмуртская Республика',
        'Республика Хакасия',
        'Республика Чечня',
        'Чувашская Республика',
        'Алтайский край',
        'Краснодарский край',
        'Красноярский край',
        'Приморский край',
        'Ставропольский край',
        'Хабаровский край',
        'Амурская область',
        'Архангельская область',
        'Астраханская область',
        'Белгородская область',
        'Брянская область',
        'Владимирская область',
        'Волгоградская область',
        'Вологодская область',
        'Воронежская область',
        'Ивановская область',
        'Иркутская область',
        'Калининградская область',
        'Калужская область',
        'Камчатская область',
        'Кемеровская область',
        'Кировская область',
        'Костромская область',
        'Курганская область',
        'Курская область',
        'Ленинградская область',
        'Липецкая область',
        'Магаданская область',
        'Московская область',
        'Мурманская область',
        'Нижегородская область',
        'Новгородская область',
        'Новосибирская область',
        'Омская область',
        'Оренбургская область',
        'Орловская область',
        'Пензенская область',
        'Пермский край',
        'Псковская оласть',
        'Ростовская область',
        'Рязанская область',
        'Самарская область',
        'Саратовская область',
        'Сахалинская область',
        'Свердловская область',
        'Смоленская область',
        'Тамбовская область',
        'Тверская область',
        'Томская область',
        'Тульская область',
        'Тюменская область',
        'Ульяновская область',
        'Челябинская область',
        'Читинская область',
        'Ярославская область',
        'Москва',
        'Санкт-Петербург',
        'Еврейская авт. область',
        'Агинский Бурятский авт. округ',
        'Коми-Пермяцкий авт. округ',
        'Корякский авт. округ',
        'Ненецкий авт. округ',
        'Таймырский авт. округ',
        'Усть-Ордынский Бурятский авт. окр.',
        'Ханты-Мансийский авт. округ - Югра',
        'Чукотский авт. округ',
        'Эвенкийский авт. округ',
        'Ямало-Ненецкий авт. округ',
        'Московская область',
        'null',
        'null',
        'Краснодарский край',
        'null',
        'Чеченская республика',
        'Свердловская область',
        'null',
        'Санкт-Петербург',
        'Москва'
    ];
    res.send({ express: regions[req.params.num] }); 
  }); 

  app.get('/client', (req, res) => {
    
  }); 