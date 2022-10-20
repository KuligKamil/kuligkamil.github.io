# YML Fullstack Developer

```python
flowers:
  - name: 'Tulip'
    age: 2
    color: 'yellow'
  - name: 'Rose'
    age: 3
    color: 'red'
```

```python
import os
from typing import List

import yaml
from pydantic import BaseModel


class Flower(BaseModel):
    name: str
    age: int
    color: str


class Garden(BaseModel):
    flowers: List[Flower]


with open(f'{os.getcwd()}/config.yml') as f:
    data = yaml.load(f, Loader=yaml.FullLoader)

garden = Garden(**data)
sum_ages: int = 0
for flower in garden.flowers:
    sum_ages = sum_ages + flower.age
print('sum_ages: ', sum_ages)
# sum_ages: 5
```
