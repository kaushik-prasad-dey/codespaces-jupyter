#### Node Express Generator for Creating Boilerplate
npm install -g express-generator
#### Change the directory
cd bangalore-house-price-prediction-app
#### install npm packages
npm install
#### run npm packages
set DEBUG=bangalore-house-price-prediction-app:* & npm start

#### install consolidate and swig package
npm install consolidate
npm install swig

#### For setup HTML engine in your app.js
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
