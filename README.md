Pre-requisites\
Python 3.7 and above, and pip

Steps to set up:
1. Clone this repository onto your device.
2. ```cd``` into the cloned folder & open up a terminal.
3. Run ```py -m pip install -r requirements.txt``` or ```python -m pip install -r requirements.txt```, this will install packages needed to set up the server.
4. ```cd``` into the server folder
5. Run ```py -m uvicorn main:app --reload``` or ```python -m uvicorn main:app --reload```

The backend is up and running, you can check out the API documentation at

```http://127.0.0.1:8000/docs```