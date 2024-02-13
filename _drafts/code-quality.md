# Code quality, toolset & best practices

“Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” — Abraham Lincoln

It's like sharpening a saw.

https://www.artofmanliness.com/character/habits/the-7-habits-sharpen-the-saw/


Remember, the perfect toolset and best practices can't be written once.
They're processes that need to be reviewed, adjusted, repeated, and reviewed, adjusted, repeated...

We should cultivate developer experience.

https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care/


each toolset & best practices has:
* documentation link (if it has one)
* repo link (if it has one)
* action link (if needed) to the "todo" task

toolset:
* env on Windows
  * WSL2
    * docs: https://learn.microsoft.com/en-us/windows/wsl/
  * pyenv - python version management
    * repo: https://github.com/pyenv/pyenv
  * pyenv-virtualenv - pyenv plugin that provides features to manage virtualenvs and conda environments for Python on UNIX-like systems.
    * repo: https://github.com/pyenv/pyenv-virtualenv
  * poetry - python packaging and dependency management
    * minimize amount of libraries - whenever code tends to be productionalized, libraries count need to be minimized.
    * todo: try on pycharm & vscode 
    * check alternative PDM https://pdm-project.org/latest/
* code formater, lineter & validation
  * ruff - extremely fast Python linter and code formatter, written in Rust
    * docs: https://docs.astral.sh/ruff/
    * repo: https://github.com/astral-sh/ruff
    * todo: try on pycharm & vscode
  * pre-commit
    * docs: https://pre-commit.com/
    * repo: https://github.com/pre-commit/pre-commit
    * todo: try on pycharm & vscode
  * type checking 
    * todo: decision which lib use, try on pycharm & vscode, present 
      * mypy - Optional Static Typing for Python
        * docs: https://mypy-lang.org/
        * repo: https://github.com/python/mypy
      * pyre - Performant type-checking for python.
        * docs: https://pyre-check.org/
        * repo: https://github.com/facebook/pyre-check
  * inlay hints - special markers that appear in the editor and provide you with additional information about your code
    * in vscode, Inlay Type Hints https://devblogs.microsoft.com/python/python-in-visual-studio-code-july-2022-release/#inlay-type-hints
    * in pycharm, Inlay Hints https://www.jetbrains.com/help/pycharm/inlay-hints.html#enable_inlay_hints
* ORM - Object Relational Mapping
  * SQLAlchemy - The Python SQL Toolkit and Object Relational Mapper
    * docs: https://www.sqlalchemy.org/
    * repo: https://github.com/sqlalchemy/sqlalchemy
  * SQLAlchemy + databricks https://docs.databricks.com/en/dev-tools/sqlalchemy.html#language-Cluster
* pytest - without tests, don't believe it works.
  * write unit test for business logic, if you can't write, please use ChatGPT.
* vscode/pycharm > jupyter/databricks notebook 
  * see not use variables
  * see more error & worning in code
  * faster working editor for code
  * better hints
  * option format on save
  * debbuging
  * versioning
  * extensive extensions, more versatility
  * try use vscode + jupyter, try code & add, commit on .py file
* mlflow 
 * docs: https://mlflow.org/docs/latest/index.html
 * repo: https://github.com/mlflow/mlflow 
* github actions
 * docs: https://docs.github.com/en/actions

## best practices:
* core best practices
  * name conventions 
    * use explicit function, methods, class & variables names
      * function/method:
        * bad: calculate()
        * good: calculate_tax(), calculate_area_of_circle()
      * class:
        * bad: Process
        * good: DataProcessor, PaymentHandler
      * variable:
        * bad: x, temp
        * good: customer_name, total_amount
    * don't use type name in name variable, always you use typing hint
      * bad: product_list
      * good: products: list
    * branch & commit convention
      * https://www.conventionalcommits.org/en/v1.0.0/
  * DRY - Don't Repeat Yourself
    * functions, best practies
    * make sure that repetitive code is wrapped to functions in needed
    * functions have arguments, get out with similar functions 
    * in case you see some if-ology write classes, methods use polimorphism
  * KISS - Keep It Simple Stupid
    * avoiding over-engineering 
      * implement only what is necessary to fulfill the current requirements 
      * avoid adding unnecessary complexity or features that may not be needed
      * example: maybe you don't need polimorphism now
    * modularity
      * break down complex tasks into smaller, modular components, making the code easier to understand, maintain, and test
      * example: maximize cohesion (one function, one class does one thing) 
    * clear and direct logic
      * write code in a straightforward, linear manner, avoiding convoluted logic or excessive nesting that can make the code difficult to follow
      * example: avoid nested functions
    * minimal dependencies
      * minimize dependencies between modules or components to reduce the risk of unexpected interactions and to make testing and maintenance easier
      * example: limit as much as possible usage of global variables
  * YAGNI - You Aren't Gonna Need It
    * [production] out nessesary comments
      * maybe variable names are not perfect, not fitting
    * [production] out not used it code 
      * if you pushed code, it's stay in github history
      * if you squash & merge, it's stay in github history
  * use inlay hints
    * in vscode, Inlay Type Hints https://devblogs.microsoft.com/python/python-in-visual-studio-code-july-2022-release/#inlay-type-hints
    * in pycharm, Inlay Hints https://www.jetbrains.com/help/pycharm/inlay-hints.html#enable_inlay_hints
  * use reformat code shorcuts, option format on save
    * vscode: Ctrl+Shift+I
    * pycharm: Ctrl + Alt + L
    * databricks: Ctr + Shift + F
  * write unit tests - writing unit test for buisness logic, if you can't writed please use ChatGPT
* define workflow, git flow
* error handling - best practices 
  * implement clear and concise error handling mechanisms to maintain code simplicity while ensuring robustness
  * use Pokemon Exception Handling, "Pokemon - gotta catch 'em all!!!"
* env - best practices
  * prepare clean and functional requirements.txt - tested on clear environment if it works correctly
  * add more in readme, how to start use it, how to start develop it
  * gitignore
  * limit & regularly clean config files usage (Don’t over-parameterize!)
* refactor code - best practices, TDD concept
  * TDD concept, pytest
  * first e2e test, if it's not enough do more, if you want to edit structure,
  * do integration for each endpoint 
    * by endpoint I mean some staff that we know what we give and what we get
  * now start refactor, try write code for
* functional programming - best practices
  * not only pandas
  * pandas
    * no 'for' in code
    * columns like pandas class (dataclass), enums, if name change, we will change in one place?
* OOP - Object-oriented programming 
  * with great power comes great responsibility
  * better not write OOP code than write it wrong
  * when use OOP, you need to use power of it, polymorphism, and design patterns
    * to find polymorphism find if-ology
      * not forget that could be overengineering
    * why we need main class? maybe we could do everything more functional?
    * easier to tests function if it's not on huge main class with a lot of attributes
    * easiet to tests function if haver clear IN and OUT
* SOLID code 
* Design Patterns
* python concepts, tips & tricks 
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

Your Developer Experience Expert, 

Kamil Kulig
