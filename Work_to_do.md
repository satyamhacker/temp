### DEPENDENCY MAP

Concept 1 — DeepEval Authentication (`deepeval.login`) → no dependencies (start here)
Concept 2 — Test Data Standardization (`LLMTestCase`) → needs Concept 1
Concept 3 — DeepEval Evaluation Metrics (`AnswerRelevancyMetric`, `FaithfulnessMetric`, `ToxicityMetric`) → needs Concept 2
Concept 4 — The Assertion Engine (`assert_test`) → needs Concept 3
Concept 5 — Execution Contexts (`metric.measure()` vs `deepeval.evaluate()`) → needs Concept 4
Concept 6 — Golden Dataset Definition (`Golden`, `EvaluationDataset`) → needs Concept 2
Concept 7 — Cloud Data Syncing (`dataset.push()`, `dataset.pull()`) → needs Concept 6
Concept 8 — LangChain Custom Tools (`@tool` decorator) → no dependencies (can learn parallel to Concept 1)
Concept 9 — Agent Initialization (`initialize_agent`, `AgentExecutor`) → needs Concept 8
Concept 10 — Intermediate Steps Extraction (`return_intermediate_steps=True`, `AgentAction`) → needs Concept 9
Concept 11 — Tool Invocation Records (`ToolCall`) → needs Concept 10
Concept 12 — Tool Calling Evaluation (`ToolCorrectnessMetric`) → needs Concept 11 + Concept 3
Concept 13 — Test Case Assembly & State Sync → needs Concept 12 + Concept 7

---

### CONCEPT 1 — DeepEval Authentication (`deepeval.login`) [Beginner]
📌 Prerequisites: None (start here)

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is `deepeval.login`? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / arguments / syntax for this authentication method?
What goes inside each one?
Show the minimal working code skeleton to authenticate.

[WHEN] 🟡
When should I use `deepeval.login` in my pipeline?
Give 3 real-world situations/triggers where this step is mandatory.
Also tell me: when should I NOT use this function (e.g., air-gapped environments)?

[COMPARE] 🟡
How is `deepeval.login` different from standard environment variable loading (like `dotenv`)?
Make a clear side-by-side comparison table covering: purpose, persistence, where the token is stored locally, and when to use which.

[PURPOSE] 🟡
If `deepeval.login` didn't exist, what exact problem would I face when trying to use Confident AI's cloud dashboard? Why was this persistent auth mechanism created in the first place?

[ANTI-PATTERN] 🔴
What is the wrong way to use `deepeval.login` regarding secret management?
What common mistake do beginners make with API keys here?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like a CI/CD pipeline in GitHub Actions) where this is used.
Show exactly how it fits into the automated testing system without exposing secrets.

[BREAK IT] 🔴
What can go wrong when using `deepeval.login`?
What exact error will I see if the token is invalid or network is blocked?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `with_api_key`**

[PARAM-WHAT] 🟢
What is the `with_api_key` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
What is the default value if any? [🔍 Verify from docs]
Show an example of each possible value.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact error or silent bug will I get if I hardcode the string here?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is used in a real working code snippet using `os.getenv`.
Why is this specific value/approach chosen here?

---

### CONCEPT 2 — Test Data Standardization (`LLMTestCase`) [Intermediate]
📌 Prerequisites: Concept 1

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `LLMTestCase` class? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory vs optional fields / params / syntax to instantiate this class?
What goes inside each one?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use `LLMTestCase`?
Give 3 real-world situations/triggers in a testing pipeline.
Also tell me: when should I NOT use this class (e.g., static offline dataset prep)?

[COMPARE] 🟡
How is `LLMTestCase` different from a standard Python dictionary or JSON payload?
Make a clear side-by-side comparison table covering: strictness, validation, compatibility with evaluation frameworks, and when to use.

[PURPOSE] 🟡
If `LLMTestCase` didn't exist, what exact problem would I face when passing data to `assert_test` or `metric.measure()`? Why was this specific schema object created?

[ANTI-PATTERN] 🔴
What is the wrong way to populate `LLMTestCase` (e.g., passing raw unparsed LangChain Document objects)?
What common mistake do beginners make?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like evaluating a customer support bot) where `LLMTestCase` is instantiated.
Show exactly how it encapsulates dynamic data.

[BREAK IT] 🔴
What can go wrong when instantiating `LLMTestCase`?
What exact Pydantic ValidationError or TypeError will I see if a field type is wrong?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `input`**

[PARAM-WHAT] 🟢
What is the `input` parameter in `LLMTestCase`? What does it represent in the RAG flow?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values/types can this parameter accept?
What is the default value if any?
Show an example.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter (e.g., passing an object instead of a string)?
What exact error will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is mapped from a user's original query in a real working code snippet.

**Parameter: `actual_output`**

[PARAM-WHAT] 🟢
What is the `actual_output` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values/data types can this parameter accept?
Show an example of a valid payload.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter? (e.g., overwriting it with `expected_output`)
What exact silent bug (False Positive) will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is populated dynamically from a RAG pipeline invocation in a real working code snippet.

**Parameter: `expected_output`**

[PARAM-WHAT] 🟢
What is the `expected_output` parameter? What is its role as ground truth?
Is it mandatory for all metrics? [🔍 Verify from docs]

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a correct value.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What error occurs if a metric requires it but it is missing?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is mapped from a Golden dataset in a working code snippet.

**Parameter: `retrieval_context`**

[PARAM-WHAT] 🟢
What is the `retrieval_context` parameter? What does it do?
What happens if I don't pass it while running RAG-specific metrics?

[PARAM-VALUES] 🟡
What values can this parameter accept? (e.g., `List[str]`)
Show an example of a properly formatted list.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter? (e.g., passing unparsed LangChain Document objects).
What exact error (`input should be a valid result of type list`) will I see?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is populated using list comprehension (`doc.page_content`) in a real working code snippet.

**Parameter: `context`**

[PARAM-WHAT] 🟢
What is the `context` parameter? How does it differ from `retrieval_context`?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact error or silent bug will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is used in a real working code snippet.

**Parameter: `expected_tools`**

[PARAM-WHAT] 🟢
What is the `expected_tools` parameter? What does it do?
What happens if I don't pass it when evaluating Agent workflows?

[PARAM-VALUES] 🟡
What values/types can this parameter accept? (e.g., `List[ToolCall]`)
Show an example of a valid list.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter? (e.g., passing raw dictionaries instead of `ToolCall` instances).
What exact validation error will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is populated in a real working code snippet.

**Parameter: `actual_tools_called`**

[PARAM-WHAT] 🟢
What is the `actual_tools_called` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of the expected structure.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter? (e.g., failing to parse `intermediate_steps` from the agent executor).
What exact error or 0.0 score will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is dynamically populated from parsed agent logs in a real working code snippet.

---

### CONCEPT 3 — DeepEval Evaluation Metrics (`AnswerRelevancyMetric`, `FaithfulnessMetric`, `ToxicityMetric`) [Intermediate]
📌 Prerequisites: Concept 2

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What are the `AnswerRelevancyMetric`, `FaithfulnessMetric`, and `ToxicityMetric` classes? Define them in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / syntax to instantiate these metric classes?
What goes inside each one?
Show the minimal working code skeleton to define a metric.

[WHEN] 🟡
When should I use each of these specific metrics?
Give 3 real-world situations/triggers (e.g., detecting hallucination vs evasiveness).
Also tell me: when should I NOT use them (e.g., strict math checking)?

[COMPARE] 🟡
How are these LLM-as-a-Judge metrics different from deterministic metrics like Exact Match or Regex?
Make a clear side-by-side comparison table covering: accuracy on generative text, cost, speed, and ability to handle semantic similarity.

[PURPOSE] 🟡
If these semantic metrics didn't exist, what exact problem would I face evaluating a RAG pipeline? Why were they created instead of traditional string matching?

[ANTI-PATTERN] 🔴
What is the wrong way to use these metrics?
What common mistake do beginners make? (e.g., running `AnswerRelevancyMetric` in a local environment without OpenAI keys).
What is the correct approach instead (Metric Exclusion Fix)?

[REAL EXAMPLE] 🟡
Give a real-world scenario where a chatbot hallucinated a refund policy.
Show exactly how the `FaithfulnessMetric` would catch this and output a score.

[BREAK IT] 🔴
What can go wrong when using these metrics?
What exact error (e.g., `AuthenticationError`, `RateLimitError`) will I see if the underlying LLM judge fails or gets throttled?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `threshold`**

[PARAM-WHAT] 🟢
What is the `threshold` parameter when instantiating a metric? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept? (e.g., Float between 0.0 and 1.0).
What is the default value? [🔍 Verify from docs]
Show an example of a strict vs lenient value.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact silent bug will I get if the threshold is set incorrectly for a metric like Toxicity vs Faithfulness?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is tuned in a real working code snippet for production CI/CD gates.
Why is this specific float value chosen here?

---

### CONCEPT 4 — The Assertion Engine (`assert_test`) [Intermediate]
📌 Prerequisites: Concept 3

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `assert_test` function? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / arguments / syntax?
What goes inside each one?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use `assert_test`?
Give 3 real-world situations/triggers (e.g., inside a PyTest runner).
Also tell me: when should I NOT use `assert_test` (e.g., when trying to return numerical data to a pandas dataframe)?

[COMPARE] 🟡
How is `assert_test` different from standard Python `assert`?
Make a clear side-by-side comparison table covering: purpose, logging capabilities, dashboard connectivity, and error output detailing.

[PURPOSE] 🟡
If `assert_test` didn't exist, what exact problem would I face integrating DeepEval into a CI/CD pipeline? Why was this specific runner created?

[ANTI-PATTERN] 🔴
What is the wrong way to use `assert_test`?
What common mistake do beginners make regarding the expected return type of this function?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like a GitHub Actions pipeline) where `assert_test` is used.
Show exactly how it stops deployment if the RAG quality drops.

[BREAK IT] 🔴
What can go wrong when using `assert_test`?
What exact `AssertionError` will I see if the metric threshold is not met?
What is the root cause and how do developers investigate the trace?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `test_case`**

[PARAM-WHAT] 🟢
What is the `test_case` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values/objects can this parameter accept?
Show an example of the required object instance.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter? (e.g., passing a raw dictionary instead of the class).
What exact error will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is passed in a real working PyTest code snippet.

**Parameter: `metrics`**

[PARAM-WHAT] 🟢
What is the `metrics` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a valid array structure.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact error will I get if I pass a single metric object instead of a list?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is constructed and passed in a real working code snippet supporting a DAG execution flow.

---

### ⚠️ Total questions reached ~76. Output chunking required.
**Reply CONTINUE for the next batch.**

### CONCEPT 5 — Execution Contexts (`metric.measure()` vs `deepeval.evaluate()`) [Intermediate]
📌 Prerequisites: Concept 4

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What are `metric.measure()` and `deepeval.evaluate()`? Define both execution contexts in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / syntax to execute both methods?
What goes inside each one?
Show the minimal working code skeleton for both approaches.

[WHEN] 🟡
When should I use `metric.measure()` vs `deepeval.evaluate()`?
Give 3 real-world situations/triggers for each.
Also tell me: when should I NOT use `deepeval.evaluate()` (e.g., Air-gapped environments)?

[COMPARE] 🟡
How is `metric.measure()` different from `deepeval.evaluate()`?
Make a clear side-by-side comparison table covering: execution location (local vs cloud sync), data privacy (Data Confinement), speed, and best use cases.

[PURPOSE] 🟡
If `deepeval.evaluate()` didn't exist, what exact problem would QA teams and managers face? Why was cloud telemetry and webhook syncing introduced?

[ANTI-PATTERN] 🔴
What is the wrong way to use these contexts?
What common mistake do beginners make regarding local testing and cloud spam?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like JPMorgan Chase's air-gapped servers) where execution context matters.
Show exactly how the pipeline maintains strict data privacy.

[BREAK IT] 🔴
What can go wrong when using `deepeval.evaluate()`?
What exact `ConnectionError` or webhook failure will I see?
What is the root cause (e.g., CI server firewalls) and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `test_cases` (in `deepeval.evaluate`)**

[PARAM-WHAT] 🟢
What is the `test_cases` parameter in `evaluate()`? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of passing a sliced array.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact error or rate limit exhaustion will I get if I pass a massive array without batching?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is used with slicing (`test_cases[:10]`) in a working code snippet to prevent DoS.

---

### CONCEPT 6 — Golden Dataset Definition (`Golden`, `EvaluationDataset`) [Intermediate]
📌 Prerequisites: Concept 2

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What are the `Golden` and `EvaluationDataset` classes? Define them in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / arguments / syntax to instantiate both?
What goes inside each one?
Show the minimal working code skeleton to create a Golden dataset array.

[WHEN] 🟡
When should I use `Golden` objects?
Give 3 real-world situations/triggers.
Also tell me: when should I NOT use `Golden` objects (e.g., during live runtime evaluation)?

[COMPARE] 🟡
How is a `Golden` object different from an `LLMTestCase` object?
Make a clear side-by-side comparison table covering: presence of `actual_output`, phase of usage (offline vs runtime), and primary purpose.

[PURPOSE] 🟡
If the `Golden` class didn't exist, what exact problem would I face when establishing ground truth benchmarks? Why is Data Casting necessary?

[ANTI-PATTERN] 🔴
What is the wrong way to build a golden dataset?
What common mistake do beginners make regarding "Data Contamination" (Data Leakage)?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like an enterprise health-tech company) where a golden dataset is created.
Show exactly how it encapsulates edge cases and adversarial inputs, not just happy paths.

[BREAK IT] 🔴
What can go wrong when instantiating `Golden` objects from a raw array?
What exact `KeyError` or schema validation error will I see?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `input` (in `Golden`)**

[PARAM-WHAT] 🟢
What is the `input` parameter in the `Golden` class? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of an adversarial input.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact silent bug will I get if I only include "Happy Path" questions?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is mapped from an external JSON file using a `for` loop.

**Parameter: `expected_output` (in `Golden`)**

[PARAM-WHAT] 🟢
What is the `expected_output` parameter? What is its role as the ground truth benchmark?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a properly formatted output string.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What error or evaluation failure occurs if it is missing?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is populated in a real working code snippet from a parsed CSV row.

---

### CONCEPT 7 — Cloud Data Syncing (`dataset.push()`, `dataset.pull()`) [Advanced]
📌 Prerequisites: Concept 6

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What are the `dataset.push()` and `dataset.pull()` methods? Define them in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / arguments / syntax for these methods?
What goes inside each one?
Show the minimal working code skeleton to push and pull a dataset.

[WHEN] 🟡
When should I use `dataset.pull()`?
Give 3 real-world situations/triggers.
Also tell me: when should I NOT use these methods (e.g., Air-gapped environments)?

[COMPARE] 🟡
How is using `dataset.pull()` different from loading a local JSON/CSV file?
Make a clear side-by-side comparison table covering: Single Source of Truth, Data Drift, CI/CD integration, and latency.

[PURPOSE] 🟡
If these syncing methods didn't exist, what exact problem would distributed QA teams face? Why was "Data Hydration" and Auto-Population introduced?

[ANTI-PATTERN] 🔴
What is the wrong way to use `dataset.push()`?
What common mistake do beginners make regarding the `alias` parameter and data overwriting?
What is the correct approach (versioning) instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like Spotify's ML division) where cloud data syncing is used.
Show exactly how the dataset is pulled dynamically in a GitHub Actions pipeline.

[BREAK IT] 🔴
What can go wrong when using `dataset.push()` or `pull()`?
What exact `Unauthorized 401` or `DatasetAliasNotFoundError` will I see?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `alias`**

[PARAM-WHAT] 🟢
What is the `alias` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a version-controlled alias.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact data loss bug will I get if I use a static alias repeatedly?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is used with timestamps or versioning in a real working code snippet.

---

### CONCEPT 8 — LangChain Custom Tools (`@tool` decorator) [Intermediate]
📌 Prerequisites: None (Can be learned parallel to Concept 1)

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `@tool` decorator in LangChain? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / syntax to build a custom tool?
What goes inside the function signature and docstring?
Show the minimal working code skeleton of a decorated tool.

[WHEN] 🟡
When should I use `@tool`?
Give 3 real-world situations/triggers (e.g., custom API fetching).
Also tell me: when should I NOT use this (e.g., for simple generic prompt responses)?

[COMPARE] 🟡
How is a function decorated with `@tool` different from a standard Python function?
Make a clear side-by-side comparison table covering: AI understandability, schema generation, and Pydantic validation.

[PURPOSE] 🟡
If the `@tool` decorator didn't exist, what exact problem would I face when trying to give an LLM external capabilities? Why is JSON schema generation necessary for LLMs?

[ANTI-PATTERN] 🔴
What is the wrong way to write a tool function?
What common mistake do beginners make regarding docstrings and type hints?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like an enterprise database querying tool) where `@tool` is used.
Show exactly how the docstring prevents the LLM from passing incorrect parameters.

[BREAK IT] 🔴
What can go wrong when using custom tools?
What exact `ValidationError` will I see if type hints are missing or violated?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `args_schema` (inside `@tool`)**

[PARAM-WHAT] 🟢
What is the `args_schema` parameter in the `@tool` decorator? What does it do?
What happens if I don't explicitly pass a Pydantic model?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a valid Pydantic `BaseModel` class passed here.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact parsing error or hallucination will I get if the schema lacks field descriptions?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is bound to a Pydantic class with `Field` descriptions in a real working code snippet.

---

### CONCEPT 9 — Agent Initialization (`initialize_agent`, `AgentExecutor`) [Advanced]
📌 Prerequisites: Concept 8

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `AgentExecutor` and the `initialize_agent` factory? Define them in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / arguments / syntax to initialize an agent?
What goes inside each one?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use `AgentExecutor` instead of a standard `LLMChain`?
Give 3 real-world situations/triggers.
Also tell me: when should I NOT use it (e.g., when tasks require 0 tool access)?

[COMPARE] 🟡
How is `AgentExecutor` different from `RetrievalQA` or standard LLM Chains?
Make a clear side-by-side comparison table covering: behavior (active vs passive), logic (ReAct loop vs single pass), and external interaction.

[PURPOSE] 🟡
If `AgentExecutor` didn't exist, what exact problem would I face when trying to make an AI solve a multi-step problem? Why was the ReAct (Reasoning and Acting) loop created?

[ANTI-PATTERN] 🔴
What is the wrong way to configure the LLM for an Agent?
What common mistake do beginners make regarding the LLM's `temperature`?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like a Customer Support Bot) where `AgentExecutor` is used.
Show exactly how it routes a request through a specific tool.

[BREAK IT] 🔴
What can go wrong when running an Agent?
What exact "Agent Loop Risk" or infinite loop API bill spike will I experience?
What is the root cause and fix (`max_iterations`)?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `tools`**

[PARAM-WHAT] 🟢
What is the `tools` parameter in `initialize_agent`? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of passing an array of decorated tool functions.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter (e.g., passing 50 tools at once)?
What exact failure in the decision engine will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is used applying the "Principle of Least Privilege" (Tool Pruning) in a working code snippet.

**Parameter: `agent` (AgentType)**

[PARAM-WHAT] 🟢
What is the `agent` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example using `AgentType.ZERO_SHOT_REACT_DESCRIPTION`.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What error occurs if the chosen AgentType doesn't match the LLM's capabilities?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is defined in a real working code snippet.

**Parameter: `max_iterations`**

[PARAM-WHAT] 🟢
What is the `max_iterations` parameter? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
What is the default value?
Show an example.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact silent bug (Token Burn / API Bill spike) will I get if I leave this unbound?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is tuned in a real working code snippet to prevent infinite ReAct loops.

---

### ⚠️ Total questions reached ~144. Output chunking required.
**Reply CONTINUE for the next batch.**

### CONCEPT 10 — Intermediate Steps Extraction (`return_intermediate_steps=True`, `AgentAction`) [Advanced]
📌 Prerequisites: Concept 9

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the process of Intermediate Steps Extraction in LangChain? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory syntax requirements to extract and isolate the `AgentAction` and `observation` from the raw execution payload?
What goes inside the parsing try-except block?
Show the minimal working code skeleton to safely unpack this data.

[WHEN] 🟡
When should I explicitly extract intermediate steps?
Give 3 real-world situations/triggers (e.g., auditing tool usage, debugging hallucinations).
Also tell me: when should I NOT rely on this array (e.g., standard text-only LLM Chains)?

[COMPARE] 🟡
How does an enriched payload with `intermediate_steps` compare to a default opaque/stripped payload?
Make a clear side-by-side comparison table covering: structure, memory usage, usability for evaluation, and transparency.

[PURPOSE] 🟡
If the `intermediate_steps` array didn't exist, what exact problem would I face when trying to test an Agent's logic? Why is "Black Box Execution" considered an anti-pattern in MLOps?

[ANTI-PATTERN] 🔴
What is the wrong way to access the tool name from the raw steps array?
What common mistake do beginners make regarding tuple indexing (e.g., `step.tool`)?
What is the correct approach (`step[0].tool`) instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like a Datadog AI cost monitor) where parsing intermediate steps is critical.
Show exactly how this extracted data prevents massive API billing spikes.

[BREAK IT] 🔴
What can go wrong when parsing the `intermediate_steps`?
What exact `IndexError` or `AttributeError` will I see?
What is the root cause and the functional programming fix (Fallback returns)?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `return_intermediate_steps`**

[PARAM-WHAT] 🟢
What is the `return_intermediate_steps` flag in `AgentExecutor`? What does it do?
What happens if I set it to `False` or omit it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
What is the default value?
Show an example of enabling this flag.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact `KeyError` will I get downstream if I try to access the steps payload without this flag enabled?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is configured in a real working code snippet during Agent Initialization.

---

### CONCEPT 11 — Tool Invocation Records (`ToolCall`) [Intermediate]
📌 Prerequisites: Concept 10

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `ToolCall` class in DeepEval? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / syntax to instantiate a `ToolCall` object?
What goes inside each one?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use the `ToolCall` class?
Give 3 real-world situations/triggers in the context of evaluation datasets.
Also tell me: when should I NOT use this class?

[COMPARE] 🟡
How is a `ToolCall` object different from a raw Python dictionary containing tool data?
Make a clear side-by-side comparison table covering: structure, validation, maintenance, and framework compatibility.

[PURPOSE] 🟡
If the `ToolCall` class didn't exist, what exact problem would I face when running the `ToolCorrectnessMetric`? Why is strong typing necessary for evaluating tool execution?

[ANTI-PATTERN] 🔴
What is the wrong way to pass expected tools to an `LLMTestCase`?
What common mistake do beginners make regarding raw dictionaries and case sensitivity?
What is the correct approach instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like evaluating a Bloomberg terminal finance bot) where `ToolCall` objects are mapped.
Show exactly how it encapsulates the specific API calls.

[BREAK IT] 🔴
What can go wrong when instantiating `ToolCall`?
What exact validation error will I see if the required properties are missing?
What is the root cause and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `name`**

[PARAM-WHAT] 🟢
What is the `name` parameter in the `ToolCall` class? What does it represent?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of a valid tool name mapping.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact metric failure (0.0 score) will I get due to string formatting or typos?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is mapped from parsed Agent output in a real working code snippet.

**Parameter: `input` (in ToolCall)**

[PARAM-WHAT] 🟢
What is the `input` parameter in the `ToolCall` class? What does it do?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What values/types can this parameter accept?
Show an example of a parsed parameter dictionary passed here.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter (e.g., passing a raw string instead of parsing it with `json.loads()`)?
What exact error will I get?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is safely extracted and converted before being passed into the object in a working code snippet.

**Parameter: `output` (in ToolCall)**

[PARAM-WHAT] 🟢
What is the `output` parameter in the `ToolCall` class? What does it represent?
Is it mandatory for all tool evaluations? [🔍 Verify from docs]

[PARAM-VALUES] 🟡
What values can this parameter accept?
Show an example of capturing an observation result.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What happens to the evaluation if the output is extremely large or verbose?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is populated in a real working code snippet.

---

### CONCEPT 12 — Tool Calling Evaluation (`ToolCorrectnessMetric`) [Advanced]
📌 Prerequisites: Concept 11, Concept 3

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is the `ToolCorrectnessMetric` in DeepEval? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory fields / params / syntax to instantiate and run this metric?
What goes inside the `measure()` function?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use the `ToolCorrectnessMetric`?
Give 3 real-world situations/triggers for assessing an AI agent.
Also tell me: when should I NOT use this metric?

[COMPARE] 🟡
How is `ToolCorrectnessMetric` different from basic string matching for tool names?
Make a clear side-by-side comparison table covering: approach, case sensitivity handling, and deep testing capabilities.

[PURPOSE] 🟡
If the `ToolCorrectnessMetric` didn't exist, what exact problem would QA teams face when evaluating multi-agent orchestration? Why is a ratio-based calculation superior to boolean pass/fail here?

[ANTI-PATTERN] 🔴
What is the wrong way to interpret the score from this metric?
What common mistake do beginners make regarding "Partial Credit"?
What is the correct approach to analyzing the ratio score?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like Klarna's customer support bot) where tool correctness is evaluated.
Show exactly how the metric prevents dangerous tools from going unnoticed.

[BREAK IT] 🔴
What can go wrong when executing `ToolCorrectnessMetric`?
What exact `ZeroDivisionError` or Missing Argument Error will I see?
What is the root cause and the safety mechanism implemented?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

*(Note: Parameters for the `ToolCorrectnessMetric` largely align with `threshold` (covered in Concept 3) and `LLMTestCase` arguments. We will focus on the implicit ratio variables evaluated by the engine).*

**Parameter: `threshold` (Specific to ToolCorrectness)**

[PARAM-WHAT] 🟢
What is the `threshold` parameter when instantiating `ToolCorrectnessMetric`? What does it do in the context of partial credit?
What happens if I set it too high?

[PARAM-VALUES] 🟡
What values can this parameter accept?
What is the default value?
Show an example.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter for tool evaluation?
What exact False-Negative will I get if the agent correctly uses 1 out of 2 tools but the threshold is 1.0?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is instantiated in a real working code snippet.

---

### CONCEPT 13 — Test Case Assembly & State Sync [Advanced]
📌 Prerequisites: Concept 12, Concept 7

── PART A: CONCEPT-LEVEL QUESTIONS ──

[WHAT] 🟢
What is Test Case Assembly and Data Fusion via custom wrapper functions (`convert_golden_to_test_case`)? Define it in simple words.

[STRUCTURE] 🟢
What are the mandatory syntax requirements to create an asynchronous wrapper function that invokes a RAG pipeline and returns an assembled `LLMTestCase`?
What goes inside the tuple payload?
Show the minimal working code skeleton.

[WHEN] 🟡
When should I use a custom wrapper function for test assembly?
Give 3 real-world situations/triggers (e.g., "Missing Data Problem", merging Cloud Goldens with Local Outputs).
Also tell me: when should I NOT use this (e.g., evaluating purely static, pre-generated datasets)?

[COMPARE] 🟡
How is Dynamic Test Case Assembly different from evaluating a purely Static Ground Truth dataset?
Make a clear side-by-side comparison table covering: presence of runtime parameters, risk of false positives, and execution latency.

[PURPOSE] 🟡
If this programmatic fusion didn't exist, what exact problem would I face when trying to test live LLM endpoints against a cloud-hosted baseline? Why is "Data Overwriting" a massive risk?

[ANTI-PATTERN] 🔴
What is the wrong way to assemble a test case?
What common mistake do beginners make regarding `actual_output` and `expected_output` mapping?
What is the correct approach (Runtime Invocation) instead?

[REAL EXAMPLE] 🟡
Give a real-world scenario (like an Enterprise Legal Bot) where Data Fusion is applied asynchronously.
Show exactly how it prevents OOM crashes while maintaining state synchronization.

[BREAK IT] 🔴
What can go wrong during Test Case Assembly?
What exact `TypeError: Object of type Document is not JSON serializable` or `None baseline error` will I see?
What is the root cause (e.g., failing to extract `doc.page_content`) and fix?

── PART B: PARAMETER DEEP-DIVE QUESTIONS ──

**Parameter: `golden` (Input to wrapper)**

[PARAM-WHAT] 🟢
What is the `golden` parameter passed into the wrapper function? What data does it hold?
What happens if I don't pass it?

[PARAM-VALUES] 🟡
What type of object must this parameter be?
Show an example of accessing its properties.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter during iteration?
What exact error will I get if I pass a raw dictionary instead of the parsed class?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is consumed to trigger a runtime RAG invocation in a working code snippet.

**Parameter: `actual_tools` (List passed to Assembly)**

[PARAM-WHAT] 🟢
What is the `actual_tools` parameter used during the assembly of `tools_called`? What does it do?
What happens if I pass an empty list?

[PARAM-VALUES] 🟡
What values can this parameter accept before instantiation?
Show an example of the expected raw array of dicts.

[PARAM-MISTAKE] 🔴
What is the most common mistake with this parameter?
What exact schema validation error will I get if I fail to map these dictionaries into `ToolCall` objects within the loop?

[PARAM-REALCODE] 🟡
Show exactly how this parameter is iterated over to dynamically append `ToolCall` instances in a working code snippet.

---

### 🏁 FINAL SUMMARY & SELF-CHECK SYSTEM

→ **Total Concept Count:** 13 Concepts Extracted & Ordered
→ **Total Parameter Count Covered:** 25 Unique Parameters Deep-Dived
→ **Total Question Count:** 204 Highly Structured Questions (104 Concept-Level + 100 Parameter-Level)

**📚 Recommended Study Order:**
1. Concept 1 — DeepEval Authentication (`deepeval.login`)
2. Concept 8 — LangChain Custom Tools (`@tool` decorator)
3. Concept 9 — Agent Initialization (`initialize_agent`, `AgentExecutor`)
4. Concept 10 — Intermediate Steps Extraction (`return_intermediate_steps=True`, `AgentAction`)
5. Concept 2 — Test Data Standardization (`LLMTestCase`)
6. Concept 6 — Golden Dataset Definition (`Golden`, `EvaluationDataset`)
7. Concept 7 — Cloud Data Syncing (`dataset.push()`, `dataset.pull()`)
8. Concept 11 — Tool Invocation Records (`ToolCall`)
9. Concept 3 — DeepEval Evaluation Metrics (`AnswerRelevancyMetric`, `FaithfulnessMetric`, `ToxicityMetric`)
10. Concept 12 — Tool Calling Evaluation (`ToolCorrectnessMetric`)
11. Concept 4 — The Assertion Engine (`assert_test`)
12. Concept 5 — Execution Contexts (`metric.measure()` vs `deepeval.evaluate()`)
13. Concept 13 — Test Case Assembly & State Sync

**🏆 Scoring System:**
* 🟢 Beginner = 1 pt
* 🟡 Intermediate = 2 pts
* 🔴 Advanced = 3 pts
* **Total Possible Points:** 389 pts
* **Mastery Threshold:** 330 pts (85%)
* **Self-check method:** Attempt all questions in the recommended order → compare your handwritten/typed answers directly with the official documentation and the raw course notes → add 1 pt for every verified correct understanding. Re-study the anti-patterns for any missed points.

