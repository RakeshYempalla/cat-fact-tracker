import sqlite3

DB_NAME = "cat_facts.db"

def connect_db():
    # connecting to SQLite DB and returning the connecting object to interact with DB
    return sqlite3.connect(DB_NAME)

def init_db():
    """
    Initializing the DB by creating the 'cat_facts' table if it doesn't already exist.
    The table contains:
    - id (auto-incrementing primary key)
    - fact (unique cat fact stored as text)
    - created_at (date the fact was inserted, default is current date)
    """
    # Connecting to the DB
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS cat_facts (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        fact TEXT UNIQUE,  
        created_at DATE DEFAULT (DATE('now'))  
    )
    """)
    
    conn.commit()
    conn.close()

def insert_fact(fact):
    """
    Inserting a new cat fact into the 'cat_facts' table.
    If the fact already exists (duplicate), it will be skipped.
    Parameters:fact (str)
    """
    conn = connect_db()
    cursor = conn.cursor()
    
    try:
        cursor.execute("INSERT INTO cat_facts (fact) VALUES (?)", (fact,))
        
        # Commit the transaction to the database
        conn.commit()
        print(f"Inserted: {fact}") 
    except sqlite3.IntegrityError:
        # If the fact is a duplicate (due to the UNIQUE constraint), print a message
        print(f"Skipped (duplicate): {fact}")
    finally:
        # Close the database connection after the operation
        conn.close()

def get_all_facts():
    """
    Fetches all cat facts from the 'cat_facts' table.
    
    Returns:list: A list of tuples containing all cat facts from the database.
    """
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM cat_facts")
    
    rows = cursor.fetchall()
    conn.close()
    
    return rows

def get_random_fact():
    """
    Fetches a random cat fact from the 'cat_facts' table.
    
    Returns:str: A randomly selected cat fact from the database. If no facts exist, returns None.
    """
 
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT fact FROM cat_facts ORDER BY RANDOM() LIMIT 1")
    
    result = cursor.fetchone()
    
    conn.close()
    
    return result[0] if result else None
