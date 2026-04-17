import pandas as pd # type: ignore
df = pd.read_csv('Ice_cream selling data.csv')
print(df)

x = df[['Temperature (°C)']]
y = df[['Ice Cream Sales (units)']]