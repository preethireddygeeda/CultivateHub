def recommend_crop(data):
    if (data['nitrogen'] < 120 and data['phosphorus'] < 60 and data['potassium'] < 40 and
        data['temperature'] < 25 and data['humidity'] < 60 and data['ph'] == 6 and data['rainfall'] < 800):
        return 'Wheat'
    elif (data['nitrogen'] < 100 and data['phosphorus'] < 50 and data['potassium'] < 40 and
          data['temperature'] < 30 and data['humidity'] < 80 and 5 <= data['ph'] <= 7 and data['rainfall'] < 2000):
        return 'Rice'
    elif (data['nitrogen'] < 100 and data['phosphorus'] < 60 and data['potassium'] < 50 and
          data['temperature'] < 27 and data['humidity'] < 60 and 5.5 <= data['ph'] <= 7 and data['rainfall'] < 800):
        return 'Maize'
    elif (data['nitrogen'] < 20 and data['phosphorus'] < 50 and data['potassium'] < 30 and
          data['temperature'] < 30 and data['humidity'] < 70 and 6 <= data['ph'] <= 7.5 and data['rainfall'] < 700):
        return 'Soybean'
    elif (data['nitrogen'] < 80 and data['phosphorus'] < 40 and data['potassium'] < 40 and
          data['temperature'] < 35 and data['humidity'] < 70 and 5.8 <= data['ph'] <= 8 and data['rainfall'] < 800):
        return 'Cotton'
    elif (data['nitrogen'] < 150 and data['phosphorus'] < 80 and data['potassium'] < 100 and
          data['temperature'] < 30 and data['humidity'] < 80 and 6 <= data['ph'] <= 7.5 and data['rainfall'] < 1600):
        return 'Sugarcane'
    elif (data['nitrogen'] < 120 and data['phosphorus'] < 60 and data['potassium'] < 50 and
          data['temperature'] < 27 and data['humidity'] < 70 and 6 <= data['ph'] <= 6.8 and data['rainfall'] < 1000):
        return 'Tomato'
    elif (data['nitrogen'] < 140 and data['phosphorus'] < 50 and data['potassium'] < 120 and
          data['temperature'] < 20 and data['humidity'] < 70 and 5 <= data['ph'] <= 6.5 and data['rainfall'] < 700):
        return 'Potato'
    elif (data['nitrogen'] < 100 and data['phosphorus'] < 50 and data['potassium'] < 80 and
          data['temperature'] < 21 and data['humidity'] < 70 and 6 <= data['ph'] <= 6.8 and data['rainfall'] < 600):
        return 'Carrot'
    elif (data['nitrogen'] < 180 and data['phosphorus'] < 60 and data['potassium'] < 120 and
          data['temperature'] < 20 and data['humidity'] < 80 and 6 <= data['ph'] <= 6.8 and data['rainfall'] < 700):
        return 'Cabbage'
    elif (data['nitrogen'] < 80 and data['phosphorus'] < 40 and data['potassium'] < 50 and
          data['temperature'] < 24 and data['humidity'] < 70 and 6 <= data['ph'] <= 7 and data['rainfall'] < 700):
        return 'Onion'
    elif (data['nitrogen'] < 100 and data['phosphorus'] < 50 and data['potassium'] < 70 and
          data['temperature'] < 30 and data['humidity'] < 70 and 6 <= data['ph'] <= 6.8 and data['rainfall'] < 800):
        return 'Pepper'
    elif (data['nitrogen'] < 120 and data['phosphorus'] < 60 and data['potassium'] < 80 and
          data['temperature'] < 30 and data['humidity'] < 70 and 6 <= data['ph'] <= 7 and data['rainfall'] < 600):
        return 'Cucumber'
    else:
        return 'peas'

