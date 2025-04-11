from fastapi import FastAPI,HTTPException
from backend.db import init_db,insert_fact,get_all_facts,get_random_fact
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

#intialize FastApi app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials =True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

init_db()
class CatFact(BaseModel):
    fact: str

@app.get("/catfacts")
def get_cat_facts():
    facts = get_all_facts()
    # extract only the fact text (index 1 in each row)
    fact_list = [fact[1] for fact in facts]
    return {"cat_facts": fact_list}


@app.get("/catfacts/random")
def get_random_cat_facts():
    fact = get_random_fact()
    if fact:
        return{"fact":fact}
    else:
        return{"result":"No cat fact available"}

@app.post("/catfacts")
def add_cat_fact(cat_fact: CatFact):  
    try:
        insert_fact(cat_fact.fact) 
        return {"result": "Cat fact added successfully"}
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Failed to add cat fact: {str(e)}")
