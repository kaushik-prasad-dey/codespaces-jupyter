# Real Estate Price Prediction
This end to end data science project is step by step process of how to build a real estate price prediction web application using html5, python, flask, bootstrap and deployment in AWS ec2. 

## Problem Statement
Before purchsing home any potential buyer thinks and looking for the location( where the flat, house is situated ), the property size ( 2 bhk, 3 bhk ), any schools and hospitals are near in that location, is there any parks, restaurants are present or not everything. And the most important factor is price.
So, we are predicting the home price in Bangalore location with various ML algoritham.

## Dataset
https://www.kaggle.com/amitabhajoy/bengaluru-house-price-data
## Programming Language
Python (Flask Framework)

Html5

JavaScript

Bootstrap

## Notebook with ML implementation
Linear regression 
To check the accuracy of Linear regression Model using K-fold cross Validation method

## Model Exporter
Pickle
```
import pickle
with open('/kaggle/working/banglore_home_prices_model.pickle','wb') as my_model:
     pickle.dump(lr_clf,my_model)
```

## Development environment
Visual Studio Code
Github Code space

## Deployment
Aws Ec2 instance with nginx


## Project Screenshots
![image](https://github.com/kaushik-prasad-dey/house_price_prediction_app/assets/109330283/004a8c78-eb6d-4df8-b369-ee4ccb2c48e0)

## For backend with python
*******Commands for creating conda virtual environment*******
```
conda create -n venv python=3.9 -y [new directory] 
conda create -p venv python=3.9 -y [present directory]
```

*******activate the environment*******
```
conda activate venv/
```

*******added dependecies*******

flask 

pandas 

numpy 

seaborn 

*******install python dependencies from requirment.txt*******
```
pip install -r requirements.txt
```

*******install and activate ipykernel inside python project*******
```
pip install ipykernel
```

*******Flask server Default port*******
```
http://localhost:5000/
```

*******Project High-Level architecture*******


![Production_deployment](https://github.com/kaushik-prasad-dey/house_price_prediction_app/assets/109330283/7cb0ed42-223a-420f-bc0a-0b1cda4ccbf6)

## For Frontend with Node

*******Node Express Generator for Creating Boilerplate*******
```
npm install -g express-generator
```
*******Change the directory*******
```
cd bangalore-house-price-prediction-app
```
*******Install npm packages*******
```
npm install
```
*******Run npm packages*******
```
set DEBUG=bangalore-house-price-prediction-app:* & npm start
```
*******Install consolidate and swig package*******
```
npm install consolidate
npm install swig
```
*******For setup HTML engine in your app.js*******
```
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
```
*******Default Port*******
```
http://localhost:3000/
```

## Api checking through postman

#### GET API Call

![screenshots_for_get_location_names](https://github.com/kaushik-prasad-dey/house_price_prediction_app/assets/109330283/71d37b7d-bd77-4646-ac3a-c5eae254be5b)

#### POST API Call
![screenshots_for_predict_home_price](https://github.com/kaushik-prasad-dey/house_price_prediction_app/assets/109330283/4d0fc881-11bc-4a8d-9ff6-80564ad36aad)


## Deploy application to cloud (AWS EC2)

Create an EC2 instance using amazon console, also in security group add a rule to allow HTTP incoming traffic.(0.0.0.0)
Now connect to your instance using the below commands.
```
ssh -i "<custom-key-pair>.pem" ubuntu<public-ip>.ap-south-1.compute.amazonaws.com
```
## Installing nginx setup in ubuntu
 1. *******nginx setup commands for ec2 instance*******
     ```
     sudo apt-get update
     sudo apt-get install nginx
     ```
2. *******Enable nginx service commands*******
    ```
     $ sudo service nginx enable
    ```
3. *******Check nginx status*******
     ```
     sudo service nginx status
     ```
4. *******To check the current directory*******
      ```
      pwd
      ```
5. *******change to nginx directory********
      ```
       cd /etc/nginx/
      ```
6. *******to look into the conf files in nginx server********
      ```
      nginx.conf
      ```
7. *******start,stop and restart commands*******
      ```
      sudo service nginx start
      sudo service nginx stop
      sudo service nginx restart      
      ```

## Project Video Demo
sss
