### Video---1 --- Topic--- Introduction to Retrieval Augmented Generation (RAG)

* **[What are RAG Applications?]:** RAG stands for Retrieval Augmented Generation. The speaker explains that one of the most powerful applications enabled by large language models is sophisticated question and answering chatbots. While standard models answer based on their trained datasets, RAG allows you to feed an external source of data to the large language model specifically for your company or organization, adding more intelligence and context without needing to fine-tune the model.
* **[Two Main Parts of RAG]:** The section is split into two important parts: extraction and indexing, and retrieval and generation.
* **[Extraction and Indexing Process]:** This involves reading from external files (like a PDF) and splitting them into multiple chunks. The speaker explains that splitting is necessary because models have a context window limit. For example, the Llama 3.2 model supports up to 128K tokens. If a document has a long length of data, passing it all at once will make the model "struggle to find the information" and the context window might not match the actual question. Smaller chunks make it easier to find similarities.
* **[Embedding the Chunks]:** After splitting, the chunks are embedded into vectors. This means converting the text into a vector dimension. This can be done using various large language models (like Azure, Google, AWS, Hugging Face, Llama, etc.).
* **[Storing in a Database]:** The embedded vectors are stored in a database. The speaker notes these can be vector-based databases like FAISS, Chroma, or Azure Cosmos DB. FAISS stands for Facebook AI Similarity Search, which can search in sets of vectors that do not even fit in RAM. The course will use Chroma because it is an AI-native, open-source vector database licensed under Apache 2.0, allowing free usage and featuring delta ID filtering and async operations.
* **[Retrieval and Generation Process]:** Once stored, the data is retrieved from the database and used for question and answering, combining the power of the stored data with the local large language model running in Ollama.

### Video---2 --- Topic--- Extracting Data from PDF Files

* **[Document Sources]:** The speaker introduces three specific PDF files (research papers) placed in the "section five of Rag with document" folder: "Attention is all you need" (about the transformer model), "Testing and evaluating large language models" (covering factual correctness, non-toxicity, and logical reasoning), and a paper on catastrophic forgetting in LLMs (how models lose context during continual fine-tuning).
* **[Document Loaders in Langchain]:** To read and extract PDFs, the speaker explores Langchain's document loaders. Examples given include the CSV loader, the web loader (for web scraping), the unstructured package, and third-party tools like Hyper Browser, which can run headless browsers and automatically solve captchas for automated workflows.
* **[Setting up the PyPDF Loader]:** For this project, the speaker uses the PyPDF loader. They install it by running pip install pypdf in the terminal.
* **[Coding the Extraction]:** The code starts by importing the loader: from langchain_community.document_loaders import PyPDFLoader. The speaker defines paths for the three PDFs and places them in an array called pdf_files. A loop iterates through the files, calling the PyPDFLoader for each, and stores the loaded pages into a master documents array.
* **[Extraction Results]:** After running the load method, the speaker prints the length of the documents array, revealing that 253 total pages were extracted from the three files. Printing the first document object shows metadata such as the source file name, page number, total pages (15), and the raw page_content.

### Video---3 --- Topic--- Splitting Text into Chunks

* **[Using Text Splitters]:** To handle the gigantic 253-page document, the speaker uses Langchain’s text splitters to break it into smaller chunks with indexes. They specifically use the Recursive character text splitter.
* **[Configuring the Splitter]:** The speaker initializes the splitter by setting chunk_size to 1000 characters and chunk_overlap to 200.
* **[The Purpose of Chunk Overlap]:** The speaker uses an analogy to explain the overlap: when text is split into chunks of 1000, the next chunk starts at 1001. However, during splitting, there are chances you may "lose some of the text from exact position where it is starting." An overlap of 200 ensures duplicate characters exist across two chunks, providing the large language model with more context to understand that "this is the continuation of the actual context that it is working with."
* **[Splitting the Documents]:** The start_index is set to true to track the starting position. The code text_splitter.split_documents(documents) is executed to perform the split.
* **[Split Results]:** Printing the length of the resulting array shows that the original document has been divided into 640 different splits (or chunks), each containing up to 1000 characters of data.

### Video---4 --- Topic--- Embedding the Text Data

* **[Embedding Configuration]:** The speaker converts the text representation into vector representation using Ollama embeddings with the Llama 3.2 model.
* **[Testing the Embeddings]:** To demonstrate how the vector looks, the speaker creates vector_1 by calling embeddings.embed_query() on the page content of the very first split (index 0). They create vector_2 using the page content of the second split (index 1).
* **[Asserting Vector Lengths]:** The speaker runs an assertion (assert len(vector_1) == len(vector_2)) to prove that both vectors have the exact same length, regardless of the text chunk's exact content. The assertion passes, confirming the embedding model successfully standardizes the vector dimensions for storage.

### Video---5 --- Topic--- Storing Vectors in Chroma Database

* **[Vector Stores Overview]:** The goal is to store the embedded vectors into a vector database to perform similarity searches later. The speaker reiterates options like In-memory, Astra DB, FAISS, Milvus, and SQL Server, but proceeds with Chroma.
* **[Installing and Setting Up Chroma]:** The speaker installs the package using pip install langchain-chroma. They then set up the Chroma vector store in code.
* **[Configuring Persistent Storage]:** The speaker defines the vector store using parameters: a collection_name of "documents", the embedding_function defined earlier, and a persist_directory named "./chroma_langchain_db". This persistent directory is crucial because the embedding process takes significant time (around 3 minutes and 24 seconds, blowing the Mac's fan) and uses heavy machine resources. Saving it locally means the code doesn't have to be rerun every single time.
* **[Fixing the Loading Error]:** Initially, the speaker tries to pass the split documents directly using a documents argument, resulting in an "unexpected keyword" error. They correct this by using the Chroma.from_documents method, passing the split documents and changing the parameter name to embedding. Upon running, a local directory named chroma_langchain_db is immediately created, successfully saving the vector format data.

### Video---6 --- Topic--- Retrieving from the Persistent Data Store

* **[Understanding Similarity Search]:** The speaker explains that retrieval relies on similarity search, specifically powered by the cosine search algorithm used by the vector store database.
* **[Loading the Persistent Database]:** To avoid running the heavy embedding process again, the speaker loads the local database using Chroma(persist_directory="./chroma_langchain_db", embedding_function=embeddings).
* **[Performing a Similarity Search]:** The speaker tests the database by calling similarity_search with the query "what are types of llm testing" and setting k=3 to get the top three similarities.
* **[Analyzing Search Results]:** The response returns Document objects with IDs and metadata. The metadata reveals the author, creation date, and the source file. For the testing query, the vector store correctly pulls from three different PDF sources (LLM forgetting, Attention, and Testing/Evaluating).
* **[Isolating a Specific Query]:** The speaker asks "what is bias testing?". The vector store successfully isolates this to a single document, the "testing and evaluation LLM.pdf". Printing the page_content of the result shows it pulls from "chapter 60 logical reasoning correctness".
* **[Updating the Architectural Diagram]:** The speaker updates their explanation diagram to clarify that a user's question goes to the large language model, but the model in turn retrieves answers from the data store to get the required context before giving the final response.
* **[Checking Similarity Scores]:** The speaker demonstrates the similarity_search_with_score method. Asking the bias testing question returns a document along with a specific similarity score, giving confidence that the exact required data was found.

### Video---7 --- Topic--- Using Retrievers in Langchain

* **[What is a Retriever?]:** The speaker introduces the Retriever, an interface that returns a document given an unstructured query. It is described as "more general than a vector store" because it doesn't need to store documents—it only returns them. Retrievers can be created from vector stores but also include external sources like Wikipedia or Amazon Kendra.
* **[The Purpose of Retrievers]:** The main benefit is providing a "streamlined interface" for data retrieval. If a developer decides to switch their vector store from Chroma to FAISS tomorrow, the retriever ensures a "smooth transitioning" because all data stores implement this interface. The existing retrieval code will still work seamlessly.
* **[Creating the Retriever]:** The speaker creates a retriever from the vector store using the as_retriever method. They set the search_type to "similarity" and pass search_kwargs with k set to 1.
* **[Batch Retrieving]:** The speaker tests the retriever using the batch method, passing an array of three questions: "what is bias measurement", "how to test human safety against LLM", and "how LLM forgets the context". The retriever successfully processes the batch and returns the correct PDF source document for each respective question.

### Video---8 --- Topic--- Manual Document Retrieval and Prompting

* **[Goal of Manual Retrieval]:** The speaker demonstrates how to manually ask the LLM to query data from the vector store and formulate a response based on correct context.
* **[Retrieving and Formatting Documents]:** The speaker asks the query "explain how the position wise feed forward network calculation works". They use retriever.get_relevant_documents() to fetch the documents. To create a single block of context text for the LLM, they join the page contents of the retrieved documents using \n\n.join().
* **[Creating the Prompt Template]:** The speaker imports ChatPromptTemplate and creates a prompt instructing the LLM: "You are an AI assistant. You're going to use the following context to answer the question correctly... If you don't know the answer, just tell I don't know." The template includes {context} and {question} placeholders.
* **[Building and Invoking the Chain]:** A chain is created connecting the prompt template, the LLM, and a string output parser. The chain is invoked by passing the joined context text and the query.
* **[Fixing a Prompt Error]:** An error occurs stating "Missing input value prompt". The speaker realizes they accidentally imported ChatMessagePromptTemplate instead of ChatPromptTemplate. After fixing the import, the code runs perfectly.
* **[Testing Model Responses]:** When asked a complex question about bias on social datasets not present in the specific context, the LLM correctly answers that the provided context does not have the information. When asked "how to test translation in LLM", the model successfully provides a structured approach extracted directly from the context documents.

### Video---9 --- Topic--- Using Langchain Hub for Prompts

* **[Introduction to Langchain Hub]:** Instead of manually writing long, complex prompts, the speaker introduces Langchain Hub. This acts as a repository for third-party, community-created prompts (e.g., text-to-SQL prompts with few-shot examples).
* **[Pulling a RAG Prompt]:** The speaker finds a popular RAG prompt that has been downloaded 21.8 million times. They import the hub module via from langchain import hub.
* **[Implementing the Hub Prompt]:** The manual prompt code is replaced with a single line: prompt = hub.pull("rlm/rag-prompt"). Because this pulled prompt also uses {context} and {question} variables, it integrates perfectly with the existing invocation logic. Running the code yields the correct response, proving it's an efficient alternative to manual prompt engineering.

### Video---10 --- Topic--- Using RetrievalQA Chain

* **[Introduction to RetrievalQA]:** The speaker shows another method to retrieve information using Langchain's chains module. They import RetrievalQA.
* **[Setting up the QA Chain]:** They create a chain using RetrievalQA.from_chain_type(). They pass the LLM, the retriever, and set return_source_documents=True to visually track where the data is coming from.
* **[Fixing a Typo]:** The speaker encounters an error because they typed return_source_document instead of documents.
* **[Testing the QA Chain]:** The speaker invokes the chain with the query "what is training data and batching size". Initially, the LLM says the content isn't provided. The speaker slightly rewrites the query to "what is training data and batching", and the LLM successfully pulls the definition from the "Attention is all you need" paper.
* **[Checking Source Documents]:** The code iterates through the response's source_documents and prints doc.metadata.get("source", "unknown"), verifying exactly which PDF provided the answer.
* **[Manual vs. Chain Approaches]:** The speaker concludes by comparing the two methods. While RetrievalQA is the standard and correct way for most actions, the manual retrieval method (shown in Video 8) provides "finer control" over the query. For example, in the manual prompt, you can easily add specific instructions like "also summarize the results", giving the developer higher control over the LLM's final output format.

**Double‑check steps performed:**

* [x] Read entire transcript thoroughly.
* [x] Extracted rich, contextual details for every subtopic (definitions, examples, exact phrasing).
* [x] Confirmed no external knowledge or invented topics added.
* [x] Preserved exact chronological order.
* [x] Followed output format (Markdown, correct headers/bullets).

I have deeply rechecked and confirm this skeleton matches the provided transcript exactly.