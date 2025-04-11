from fastapi import FastAPI, HTTPException
from backend.db import init_db, insert_fact, get_all_facts, get_random_fact
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize FastAPI app
app = FastAPI()

# Enable CORS to allow frontend access from different origins (e.g., React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database and create tables if not exist
init_db()

# Pydantic model for validating POST request body
class CatFact(BaseModel):
    fact: str

# Endpoint: Get all stored cat facts (returns only the fact text)
@app.get("/catfacts")
def get_cat_facts():
    facts = get_all_facts()
    fact_list = [fact[1] for fact in facts]  # Extract only the 'fact' column from each DB row
    return {"cat_facts": fact_list}

# Endpoint: Get one random cat fact
@app.get("/catfacts/random")
def get_random_cat_facts():
    fact = get_random_fact()
    if fact:
        return {"fact": fact}
    return {"result": "No cat fact available"}

# Endpoint: Add a new cat fact to the database
@app.post("/catfacts")
def add_cat_fact(cat_fact: CatFact):
    try:
        insert_fact(cat_fact.fact)
        return {"result": "Cat fact added successfully"}
    except Exception as e:
        # Raise a 422 error if insertion fails (e.g., duplicate fact)
        raise HTTPException(status_code=422, detail=f"Failed to add cat fact: {str(e)}")
