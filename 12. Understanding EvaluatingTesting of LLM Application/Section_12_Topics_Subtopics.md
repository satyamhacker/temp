### Video---1 --- Topic--- Evaluation of Large Language Models

* **[Introduction to LLM Evaluation]:** The section begins by introducing the testing and evaluation of large language models (LLMs). The speaker explains that LLMs are typically evaluated using standardized datasets designed to assess performance across diverse tasks such as "text summarization or open book question answering or code generation and language understanding." These datasets serve as a benchmark for fair and competitive analysis, helping developers gauge model effectiveness in real-world scenarios.
* **[Differences from Traditional Software Testing]:** The speaker emphasizes that assessing an LLM is unlike normal software coding in Python where you can verify with unit tests and end-to-end tests. Because we are accessing an LLM, different approaches must be taken.
* **[Traditional Evaluation Metrics]:** The evaluation metrics vary depending on the task. Most tasks use traditional NLP metrics:
* **Exact Match:** Measures if the model generates an answer that is an "exact word to word match with the ground truth."
* **BLEU:** Bilingual Evaluation Understudy, used for machine translation.
* **ROUGE:** Recall-Oriented Understudy for Gisting Evaluation.
* **F1 Score:** Used for classification and information retrieval tasks.


* **[Functional Testing Context]:** The speaker briefly references their other Udemy course on Hugging Face, noting that functional testing of AI models includes "temperature testing, repeatability testing, question answering, named entity recognition," evaluating unseen data, fuzzy match logic, and bias fairness testing. These tests ensure models respond based on the ground truth.
* **[Non-Traditional Evaluation Metrics]:** The speaker introduces non-traditional metrics that leverage semantic understanding and the model's own capabilities to assess generated text, which can work with or without reference text.
* **[Embedding Similarities]:** This technique involves converting text to vectors using embedding models. The speaker references earlier lectures where vector databases were used to store data, and similarity scores were calculated when passing text to get a response.
* **[BERTScore]:**  The speaker highlights BERTScore as a crucial evaluation part, defining it as a "bidirectional encoding based approach." In this approach, candidate text and reference text are fed into a Deep Learning (DL) model separately to obtain embeddings. The token-level embeddings are then used to calculate the "pairwise cosine similarity matrix."
* **[Focus of the Course]:** The speaker clarifies that the focus will not just be on testing LLMs in isolation, but specifically testing applications built with LangChain, such as AI agents, RAG-based applications, and chatbots.

### Video---2 --- Topic--- Non-Traditional Evaluation of Large Language Models

* **[Deep Dive into Embedding Similarity]:** The speaker expands on embedding similarity, explaining that it measures "how semantically close two pieces of text are, rather than just comparing exact word."  This is calculated using the similarity between two vectors (generated text and reference text) utilizing cosine similarities, Euclidean distance, or dot product.
* **[Vector Similarity Example]:** The speaker recalls a previous example using `similarity_search_with_score` where the phrases "explain the attention is all you need" and "explain attention in transformer" were compared. Because the vector database stored similar semantic meanings, the scores were "pretty close" and not different at all, proving how semantic closeness is verified over exact word matching.
* **[Perplexity]:** Perplexity is defined as the measure of "how well a language model predicts a given text." The speaker states that a "lower perplexity means better fluency and coherence."
* **[LLM-Based Scoring]:** The speaker expresses excitement about LLM-based scoring, noting it will be used most of the time in the course. Instead of traditional metrics, LLMs themselves evaluate the generated text.
* **[Types of LLM-Based Scoring]:** The speaker lists three methods for this approach:
* **Prompt-based evaluation:** Another LLM is prompted to rate the response based on criteria like "relevance, coherence, factuality, or and grammatically."
* **Ranking-based evaluation:** The LLM compares multiple outputs and ranks them.
* **Self-consistency:** The LLM generates multiple responses and evaluates them for consistency.


* **[The Teacher LLM]:** The speaker explains that for the first time, they will use another LLM acting as a "teacher" that stands aside to help test and verify prompt-based, ranking-based, and self-consistency evaluations.

### Video---3 --- Topic--- LLMs Evaluation Libraries

* **[Introduction to Evaluation Libraries]:** The speaker introduces the tools available to perform traditional and non-traditional testing, highlighting two popular community libraries: OpenAI's Evals and Ragas.
* **[OpenAI's Evals Library]:** Evals provides a framework for evaluating LLMs or systems built using them. It offers a registry to test different dimensions of OpenAI models and allows writing custom evals. The speaker notes it is mainly focused on testing with "OpenAI specific models."
* **[Ragas Library]:** Ragas (Retrieval Augmented Generation Assurance Score) is described as an open-source library built to "supercharge evaluation of large language model applications." It uses a "Sota [State of the Art] LMS assisted method to quantify the performance" using automated metrics. It allows evaluating pipelines built with frameworks like LlamaIndex without needing an annotated evaluation dataset.
* **[Why Ragas over OpenAI Evals]:** While the setup for OpenAI Evals is straightforward (requiring just an OpenAI key), the course will focus on Ragas. The speaker chooses Ragas because it supports LangChain (used for development in the course) and Ollama, allowing for a wide range of testing across different models.
* **[Installing Ragas]:** The speaker points out the Ragas GitHub repository, noting the installation is simply `pip install ragas`. They read a claim from the docs that "just five lines of code will do that evaluation for you," though they will demonstrate how to achieve it practically using their specific setup, rather than the default `chat OpenAI` model shown in the docs.

### Video---4 --- Topic--- Understanding Ragas Metrics

* **[Defining Ragas and its Purpose]:** Ragas is fully defined as the "Retrieval Augmented Generation Assurance Score library." Its main purpose is evaluating RAG and LLM systems by assessing retrieval accuracy, generation quality, and factual correctness.
* **[Key Metrics Checked by Ragas]:** The speaker lists the specific aspects Ragas can verify: context relevance, faithfulness, answer relevance, and factual consistency (correctness).
* **[Context Precision]:**  This is defined as the measurement of how many retrieved contexts are actually relevant. The speaker explains, "the higher the precision, the fewer irrelevant documents are there in the retrieval."
* **[Context Recall]:** This measures how many relevant contexts were retrieved "out of all possible relevant ones."
* **[Response Relevance]:** This measures if the answer actually addresses the asked query. A high score means a meaningful, on-topic response is returned.
* **[Faithfulness]:** The speaker considers this very important, defining it as a measure to check if "factually grounded truth is coming up for you in the response or not." A high factual grounding means "you are really avoiding quite a lot of different hallucination generated by your large language models."
* **[Practical Application]:** The speaker concludes the theoretical aspects by stating they will observe at least three of these metrics in upcoming practical tests to verify application responses.

### Video---5 --- Topic--- Singleton Sample Testing with Ragas

* **[Setting Up the Environment]:** The speaker transitions to Visual Studio Code, cleaning up folders to begin testing. They start by writing markdown and running `pip install ragas` to install the library.
* **[Addressing Ragas Documentation Gaps]:** The speaker copies five lines of code from the Ragas GitHub documentation but immediately points out an issue: the default code uses the `chat OpenAI model`. Because the course uses local LLMs and local Ollama, this code won't work out-of-the-box.
* **[Configuring the Local LLM Instance]:** To fix the issue, the speaker copies code from an earlier "agent building" lecture to create an LLM instance with local LLMs (Chat Ollama). They also note that LangSmith is configured, so evaluation traces will be visible there.
* **[The LangChain LLM Wrapper]:** The speaker identifies a crucial missing step in the official Ragas documentation. Instead of passing the local LLM directly, it must be wrapped. They import `LangchainLLMWrapper` from `ragas.llms` and pass the local LLM into it. The speaker remarks that the documentation is "quite wrong" or incomplete for not clearly mentioning this wrapper requirement.
* **[Running the Evaluation & LangSmith Traces]:** After wrapping the LLM, the code is executed. The evaluation returns a score of 1, meaning the LLM's output matches the expected actual response. The speaker checks LangSmith and observes a "summary accuracy" trace (labeled "singleton aspect critic prompt") showing the exact human input and AI output that resulted in the correct verdict.
* **[Definition of a Singleton Sample]:** The speaker explains this testing is called a "singleton sample" because it involves a "single turn interaction"—exactly one user input and one response.
* **[Introduction to Multi-turn Samples]:** The speaker briefly contrasts this with "multi-turn samples," which involve multiple user inputs and multiple responses interacting with the local LLM, setting up the topic for the next lecture.

### Video---6 --- Topic--- Multi-turn Sample in Ragas

* **[Singleton vs. Multi-turn Samples]:** The speaker explains the core difference: while a singleton sample has only one user input and one reference context communicating with the LLM, a multi-turn sample involves interaction "between humans, AIs, or optionally even tools."
* **[Components of a Multi-turn Conversation]:** Drawing parallels to the LangChain code written in previous sections, the speaker notes multi-turn samples use a sequence of messages: Human Message, AI Message, Tool Message, and Tool Calls.
* **[Step-by-Step Multi-turn Example]:** The speaker walks through a specific sequence used in the documentation:
* **User Message:** The human asks a question (e.g., checking weather).
* **AI Initial Response:** The AI generates a `tool call` for a "weather API tool" with arguments.
* **Tool Response:** The content returned is "sunny weather" and the temperature.
* **AI Final Response:** The AI message synthesizes the final answer.


* **[Executing the Multi-turn Evaluation]:** This entire sequence is packaged as a "conversation." The conversation, along with a reference response, is passed to the multi-turn sample input.
* **[Code Implementation]:** The speaker copies the multi-turn sample code directly into VS Code, noting that the syntax is very close to what they previously built in LangChain.
* **[Running the Matrix Score]:** After creating the sample, they use `.multi_score` and pass the sample to run the evaluation. The output is a score of 1, indicating the multi-turn interaction closely matched expectations.
* **[Conclusion]:** The speaker states that having covered these basic documentation examples, the next section will focus on more advanced concepts of Ragas to test their already-built agents and RAG applications.

**Double‑check steps performed:**

* [x] Read entire transcript thoroughly.
* [x] Extracted rich, contextual details for every subtopic (definitions, examples, exact phrasing).
* [x] Confirmed no external knowledge or invented topics added.
* [x] Preserved exact chronological order.
* [x] Followed output format (Markdown, correct headers/bullets).

