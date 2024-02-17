# Importing necessary libraries and modules
import nltk
from newspaper import Article 
import openai

# Downloading the 'punkt' resource for NLTK
nltk.download('punkt')

# Function to extract the summary of an article from a given URL using newspaper module
def get_summary(url):
    # Creating an Article object using the provided URL
    article = Article(url)
    article.download()
    article.parse()
    article.nlp()
    
    # Extracting and returning the summary of the article
    article_summary = article.summary 
    return article_summary 

# Function to interact with the GPT-3 model using OpenAI API
def gpt3(text):
    # Setting the OpenAI API key
    openai.api_key = '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'
    
    # Generating a response using the GPT-3 model
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=text,
        temperature=0.7,
        max_tokens=2000,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=1
    )
    
    # Extracting and printing the content of the GPT-3 response
    content = response.choices[0].text
    print(content)
    return content

# Function to perform fact-checking based on the email header using GPT-3
def fact_check(text_piece):
    # Setting the topic for fact-checking
    topic = text_piece
    
    # Generating a GPT-3 prompt for fact-checking
    query = f"Based on the email header provided {topic} detect what email fraud it is. In a single word, tell if it is spam or not and give the category of spam. Give the IP address of the sender and the location of that IP."
    
    # Using the gpt3 function to get a response for fact-checking
    gpt3(query)

# Example usage: Fact-checking an article summary from a URL
fact_check(get_summary("https://www.inquirer.com/opinion/commentary/republicans-tennessee-expulsion-anti-democracy-20230409.html"))