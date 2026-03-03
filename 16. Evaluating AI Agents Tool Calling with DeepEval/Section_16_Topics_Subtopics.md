### Video---1 --- Topic--- Introduction to Testing Tool Callings

* **[What is Tool Calling Testing?]:** The speaker introduces testing AI agent tool callings, explaining that the large language model acts as the decision engine to invoke specific tools (like a Wikipedia tool, custom math tools, or a Playwright tool). Testing is required to ensure that the AI agent invokes the exact, correct tool based on a given input parameter, especially in organizations with thousands of tools.
* **[DeepEval's Tool Correctness Metric]:** To measure this, the course uses DeepEval's tool correctness evaluation metric. This generic LLM metric assesses an agent's function and tool-calling ability by comparing whether every tool expected to be used was actually intended and called.
* **[Required Arguments for the Metric]:** The tool correctness metric requires specific arguments: input, actual output, tool called, and expected tool.
* **[Differences from Confident AI Portal]:** The speaker notes a major difference with this metric: it currently cannot be used with the Confident AI portal. Unlike contextual relevance metrics, it does not support an evaluate method (e.g., deep_eval.evaluate) to evaluate in bulk and generate graphs on the cloud dashboard. It is a straightforward, local verification.
* **[How Tool Correctness is Calculated]:** The metric calculates the average score by taking the number of correctly used tools (derived from input and output parameters) and dividing it by the total number of tools being called.
* **[The ToolCall Class]:** For the "tool called" parameter, the user must invoke a specific class named ToolCall. This requires passing the name of the tool, and can optionally include the input parameter and output parameter to make the test highly realistic.

### Video---2 --- Topic--- Setting Up the Code and Custom Tools

* **[Reusing Previous Code Structure]:** The speaker moves to Visual Studio Code, noting this section extends the previous lesson on RAG testing with DeepEval. The deep evaluation code structure remains largely the same, but the Confident AI API key is not required since the portal evaluation method is not supported for this metric.
* **[Creating Custom Tools]:** The speaker creates a list of custom tools built with Langchain to pass into the AI agent. The example focuses on custom math tools rather than a Wikipedia tool.
* **[AI Agent Code Execution and Examples]:** An AI agent is coded to invoke these custom toolings. The speaker demonstrates how asking "what is the sum of two and four" causes the agent executor chain to choose the "add numbers tool" and output six. Similarly, asking "what is the double of two" invokes the "multiply numbers tool" to return four, and asking for a subtraction invokes the relevant subtract tool.

### Video---3 --- Topic--- Preparing the Golden Dataset

* **[Purpose of the Golden Dataset]:** To test the tool callings, a golden dataset must be prepared. This dataset contains arrays of test scenarios.
* **[Defining Questions and Expected Answers]:** The speaker creates entries defining the question (e.g., "What is the sum of two and four?") and the expected answer (e.g., "The sum of two and four is six.").
* **[Defining the Tool Called Parameter]:** The most critical part of this dataset is defining which tools are expected to be called. Using deep_eval.test_case, the speaker defines a tool_called parameter by invoking the ToolCall class. For the addition question, the tool name is set to the add numbers tool, and the input parameters are defined as a=2 and b=4. This is repeated for the multiply and subtract scenarios, strictly defining the expected tool name and its exact input parameters.

### Video---4 --- Topic--- Pushing and Pulling the Dataset

* **[Uploading to DeepEval Cloud]:** The speaker demonstrates converting the golden dataset into an LLM test case format. First, the dataset is pushed to DeepEval using a dataset.push command, named "testing tool calls." The speaker realizes they must log into Confident AI to perform this push.
* **[The Reason for Pushing and Pulling]:** Even though the cloud portal's evaluate feature is not used for this metric, the push and pull steps are mandatory based on documentation. Initially, the local test cases array is empty. By pushing to the cloud and immediately pulling it back using dataset.pull, DeepEval automatically populates the test cases list with the correctly formatted LLM test cases required for the evaluation step.

### Video---5 --- Topic--- Invoking the AI Agent and Getting Intermediate Steps

* **[Creating the LLM Test Case]:** The speaker moves to invoke the AI agent while creating the test case. A custom method is created to query the AI agent instead of retrieving RAG documents.
* **[The Problem with the Standard Invoke Response]:** When calling the agent using agent.invoke() with a question like "What is the double of two?", the default response only provides the input string and the final output (four). It lacks the essential data of which tools the agent actually decided to use.
* **[Using return_intermediate_steps]:** To capture the invoked tools, the speaker customizes the agent by adding a parameter: return_intermediate_steps=True.
* **[Extracting Agent Actions]:** With this parameter enabled, the agent returns an array containing the input, output, and "intermediate steps". These intermediate steps contain an AgentAction object that clearly lists the tools called (e.g., multiply numbers), the tool inputs (e.g., a=2, b=2), and the final answer. This exact data is required to pass into the actual tools_called argument of the DeepEval metric.

### Video---6 --- Topic--- Formulating Tool Data for the Test Case

* **[Parsing the Intermediate Steps]:** The speaker writes logic to isolate and extract the specific tool data from the intermediate steps array. By accessing the first element (index zero) of the intermediate steps, they extract a tuple containing the agent action and the result.
* **[Extracting Tool Name, Input, and Output]:** From the agent action, the speaker extracts the actual tool name (using agent_action.tool) and the tool input parameters (using agent_action.tool_input). They also extract the final result of the tool execution from the tuple to serve as the tool_output.
* **[Returning Values for the Caller]:** The custom method is finalized to return these three parsed variables (tool, tool_input, and tool_output) so that any query passed to this method will automatically return the precise tool execution data needed for DeepEval comparison.

### Video---7 --- Topic--- Creating and Running the LLM Test Case

* **[Assembling the Test Case Data]:** The speaker combines all pieces to create the final test cases. For the actual tool_called argument, they invoke the ToolCall class, passing in the dynamically extracted tool name, tool input, and tool output from the agent's response. For the expected_tools argument, they map it to the expected tool data defined earlier in the golden dataset. They also pass in the input question and actual_output response.
* **[Fixing the Missing Golden Dataset Tool Call]:** The speaker realizes they forgot to map the tools_called parameter from the golden dataset in their dataset creation loop, causing expected_tools to be "None". They quickly fix this, re-push, and re-pull the dataset to ensure the expected tools populate correctly.
* **[Running the For-Loop Evaluation]:** Because bulk evaluation isn't supported, the speaker writes a for-loop to iterate through each test case in the dataset and calls the measure method on the metric.
* **[Debugging a Failed Test]:** During the run, a test case fails (score 0) with a message saying the expected tool was not called. The speaker identifies this as a spelling error they made in the golden dataset: they typed "multiply" instead of the exact function name. After correcting the typo in the golden dataset to match the exact tool name, the loop is re-run, and all tests pass with a perfect score of 1.0.

### Video---8 --- Topic--- Exploring Advanced Tool Correctness Parameters

* **[Digging into Metric Parameters]:** The speaker explores the internal class file of the tool correctness metric to show advanced parameters that can be passed during initialization.
* **[Threshold and Evaluation Parameters]:** Users can set a custom threshold (e.g., 0.5 or 1.0). They can also use evaluation_params to selectively verify the input, actual output, expected output, and expected tools.
* **[Sequential Tool Ordering]:** The speaker mentions a flag called should_consider_ordering. They use an analogy: if an agent is asked "What is the sum of two and four, and did Donald Trump win the 2024 election?", it will call the math tool and the Wikipedia tool in sequence. Setting this flag allows the metric to strictly verify the order in which multiple tools are invoked.
* **[Additional Flags and the Verbose Bug]:** Other boolean flags include include_reasons, strict_mode, and exact_match. The speaker explicitly warns against setting verbose=True, demonstrating a bug where doing so causes the library to run in an infinite loop and crash with a "maximum recursion depth exceeded" error. Finally, the speaker prints the resulting metrics (score, reasons, evaluation parameters) to the console to prove the successful testing workflow.

**Double‑check steps performed:**

* [x] Read entire transcript thoroughly.
* [x] Extracted rich, contextual details for every subtopic (definitions, examples, exact phrasing).
* [x] Confirmed no external knowledge or invented topics added.
* [x] Preserved exact chronological order.
* [x] Followed output format (Markdown, correct headers/bullets).

