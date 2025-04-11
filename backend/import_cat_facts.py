# backend/import_cat_facts.py
import requests
from db import insert_fact  # Importing the function to insert facts from db.py

# API endpoint to fetch a random cat fact
url = "https://catfact.ninja/fact"

# Fetch 5 random cat facts from the API
for _ in range(5):
    response = requests.get(url)
    
    if response.status_code == 200:
        fact = response.json().get("fact")
        
        if fact:
            print(f"Inserting fact: {fact}")  # Debug: Print the fact before inserting
            insert_fact(fact)  # Insert the fact into the DB
        else:
            print("No 'fact' field found in the response.")
    else:
        print(f"Failed to fetch a cat fact. Status Code: {response.status_code}")
