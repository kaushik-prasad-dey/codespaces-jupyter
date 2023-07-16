import json
import pickle as my_pickle
import numpy as np
## declare three global variables
__locations=None
__data_columns=None
__modelb=None


def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index>=0:
        x[loc_index] = 1

    return round(__modelb.predict([x])[0],2)

def get_location_names():
    return __locations

def load_all_location_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __locations
    with open("./backend/artifacts/Json/columns.json",'r')as my_json:
        __data_columns=json.load(my_json)['data_columns']
        __locations = __data_columns[3:]

    global __modelb
    with open("./backend/artifacts/model/banglore_home_prices_model.pickle","rb") as prediction_model:
        __modelb=my_pickle.load(prediction_model)
        print("loading saved artifacts...done")

if __name__=="__main__":
    load_all_location_artifacts()
    print(get_location_names())
    print(get_estimated_price('1st Phase JP Nagar',1000, 3, 3))
    print(get_estimated_price('1st Phase JP Nagar', 1000, 2, 2))
    print(get_estimated_price('Kalhalli', 1000, 2, 2))
    print(get_estimated_price('Ejipura', 1000, 2, 2))