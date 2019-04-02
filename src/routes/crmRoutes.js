import { runInNewContext } from "vm";

// here we create all the routes we need,
//in order to create a route, we'll create a function call "routes"
const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        /* -------- MiddleWare -----------
         middleWares are simply functions that have access to 
         the request and response object in out express application, 
         it can run their code there, it can make changes to the request response objects, 
         can end them, can call on other function and stack using next & etc.
         (we can anythings we want as middleWare in our endpoits, 
         it could also be at third-party library where you want to do sth special) */
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next();
    }, (req, res, next) =>{
        res.send('GET request successfull !!! ');
    })

    .post((req, res) => 
    res.send('POST request successfull !!! '));

    app.route('/contact/:contactId')
    .put((req, res) => 
    res.send('PUT request successfull !!! '))

    .delete((req, res) => 
    res.send('DELETE request successfull !!! '));
}

export default routes;
