# Code quality
  * identify & define the fundamental truths
    * domain
    * undestand problem
    * benefit
    * limits
    * infrastacture
    * tools
  * breaking down problems to their core
    * what pattern to use? first what kind of problem is this in the core what kind of things are we dealing with
  * reassemble elements innovatively
  * validate assumptions regularly
  * focus on simplicity and functionality


* Follow the PEP8 rules (PEP8, pep8 guidelines) - before sharing with others, make sure code is formatted.
  * on pycharm shorcuts 
  * vscode on save
  * maybe PEP8 is only good at the beginign
* DRY - Don't Repeat Yourself
  * Make sure that repetitive code is wrapped to functions in needed
  * functions have arguments!, delete similar functions, maybe if, maybe go to OOP, polymorphism  
* KISS - Keep It Simple Stupid
  * Example: fist try write functional code, than in case you see some if-ology write classes & methods.

* Minimize amount of libraries - whenever code tends to be productionalized, libraries count need to be minimized.
* Avoid - Limit as much as possible usage of global variables 

* Use explicit function/methods & variables names
* Avoid nested functions
* Maximize cohesion (one function, one class does one thing) 

* Add I/O Datatypes into function/methods (? typing?)
* Add description on scope/purpose and for the different input params for the function/methods ( dissagree )

* Wherever possible, minimize Jupyter notebooks usage. 
* Limit & regularly clean Config files usage (Don’t over-parameterize!)
* Prepare clean and functional requirements.txt - tested on clear environment if it works correctly

* add more in readme, how to start use it, how to start develop it

* refactor code for production 
  * first e2e test, if it's not enough do more, if you want to edit structure,
  * do integration for each endpoint 
    * by endpoint I mean some staff that we know what we give and what we get
  * now start refactor, try write code for 

* always frist try functional programming, if you see if-ology go for OOP. polimorphism
  
* when use OOP, you need to use power of it, polymorphism, and design patterns
  * to find polymorphism find if-ology
    * not forget that could be overengineering,  
  * why we need main class? maybe we could do everything more functional?
  * easier to tests function if it's not on huge main class with a lot of attributes
  * easiet to tests function if haver clear in and out
* not SOLID code

  
* add linter & code formatter like ruff
  * solve many MY struggles to look at this code XD NAZI coder XD
* get out of for's in pandas part of code

* start to use Pokemon Exception Handling, "Pokemon - gotta catch 'em all!!!" 
* are comments necessary? 
  * maybe sometimes, maybe variable names are not perfect, not fitting
  * maybe add typing, mypy? alternative
    * in vscode, Inlay Type Hints https://devblogs.microsoft.com/python/python-in-visual-studio-code-july-2022-release/#inlay-type-hints
    * in pycharm, Inlay Hints https://www.jetbrains.com/help/pycharm/inlay-hints.html#enable_inlay_hints
* don't use "from super_fantstic_lib import *"
* prove_is_not_None_is_unessesary


```python

def prove_is_not_None_is_unessesary(argument):

  print(argument, type(argument))
  
  if argument:
  
    print("Not None")
  
  else:
  
    print("None")

  
  if argument is not None:
  
    print("Not None")
  
  else:
  
    print("None")


my_social_life = None

prove_is_not_None_is_unessesary(my_social_life)


lucky_number = 7 

prove_is_not_None_is_unessesary(lucky_number)

```
## Pandas
* functional programming
* columns like pandas class, enums, if name change, we will change in one place?
* not big fun of argument in some pandas function, inplace=True
## ideas
* maybe start to use ORM like SQLAlchemy? 