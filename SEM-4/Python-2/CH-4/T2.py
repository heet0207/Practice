from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error,mean_squared_error,r2_score
import pandas as pd # type: ignore
import numpy as np # type : ignore
import matplotlib.pyplot as plt # type: ignore
df = pd.read_csv('/home/heet/Practice/SEM-4/Python-2/CH-4/Ice_cream selling data.csv')
x = df[['Temperature (°C)']]
y = df[['Ice Cream Sales (units)']]

mae_list = []
mse_list = []
r2_list = []
random_states = range(1,43)
for states in random_states:
    x_train,x_test,y_train,y_test = train_test_split(x,y,test_size = 0.2,random_state = states)
    poly = PolynomialFeatures(degree= 2)
    x_poly_train =  poly.fit_transform(x_train)
    x_poly_test = poly.transform(x_test)
    
    model = LinearRegression()
    model.fit(x_poly_train,y_train)
    y_pred = model.predict(x_poly_test)
    
    mae = mean_absolute_error(y_test,y_pred)
    mse = mean_squared_error(y_test,y_pred)
    r2s = r2_score(y_test,y_pred)
    
    mse_list.append(mse)
    mae_list.append(mae)
    r2_list.append(r2s)

    print('random State : ',states)
    print('m s e : ',mse)
    print('m a e ',mae)
    print('r2 Score : ',r2s)
    
    
plt.plot(random_states,r2_list)
plt.show()