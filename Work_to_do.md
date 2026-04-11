
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 1: Agent Foundations, Multi-Tool Integration & DB Persistence → Level 1.1: Core Agent Architecture & RAG Tool Setup [🟡 Intermediate]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
LLM ek smart manager hai, Tools uske haath hain, aur RAG uski memory library hai jo hallucinations rokti hai.

2. 💥 Why? (Production Impact)
- Local ya cloud LLMs ko aaj ki external duniya (APIs, web) ya private company data ka kuch nahi pata (knowledge cut-off).
- Bina Agent architecture ke, model hawa mein teer chalayega (hallucinate) aur static rahega.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Local LLM client initialize kar. `Ollama` class use karke "llama3" model load kar. 
  The Logic: Yeh tera reasoning engine (manager) banega.

  Task [2]: Wikipedia ka pre-built tool set kar. `WikipediaQueryRun` use kar.
  The Logic: Yeh tool agent ko internet se static fact-checking karne ki power dega.

  Task [3]: Ek mock RAG knowledge tool bana. `@tool` decorator use karke ek custom function likh jo query accept kare.
  The Logic: LLM is function ka docstring padh ke samjhega ki internal private data (jaise project deadlines) yahan se nikalna hai.

  🔥 **Combo Task:** Super Agent bana aur run kar! Ek tools list bana jisme Wiki aur tera custom mock RAG tool ho. `initialize_agent` ka use kar. Framework type mein "zero-shot ReAct description" lagana aur `verbose` on rakhna. Phir is Agent ko ek complex query de jisme India ki capital aur project deadline dono puchi gayi ho.
  **Challenge:** Dekh ki Agent dono tools sequentially kaise select aur trigger karta hai bina kisi human intervention ke.

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Tera terminal output exactly aesa dikhna chahiye (ReAct loop logs):
* `> Entering new AgentExecutor chain...`
* `Thought: I need to find the capital...`
* `Action: WikipediaQueryRun` -> `Observation...`
* `Action: query_vector_database` -> `Observation...`
* `Final Response: The capital of India is New Delhi, and your project deadline is 2026.`
💬 **Quick Verify:** "Agar koi pooche — Lost in the Middle problem kya hai aur RAG usko kaise solve karta hai — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **`initialize_agent` & `ZERO_SHOT_REACT_DESCRIPTION`:** Yeh Agent ko without pre-training automatically function docstrings padh ke (Thought -> Action -> Observation) loop execute karne ki taqat deta hai.
- **RAG Chunks:** Data extract karke chhote **chunks** mein todna padta hai. Miss kiya toh Context limit cross ho jayegi.
- ⚠️ **Anti-Pattern:** Dynamic facts ke liye model ko "Fine-Tune" karna — kyunki yeh expensive hai aur data jaldi purana hota hai. Sahi tarika: RAG use kar for knowledge retrieval.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 1: Agent Foundations, Multi-Tool Integration & DB Persistence → Level 1.2: Multi-Tool Integration (Bias Detection) [🔴 Advanced]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Playwright laya bahar ka live web data, RAG ne di andar ki private rulebook, aur Agent ne dono ko mila kar check kiya compliance bias.

2. 💥 Why? (Production Impact)
- Standard web scrapers rules nahi samajhte, aur LLMs internet nahi browse kar sakte.
- Dono ko combine nahi kiya toh Automated Compliance Auditing fail ho jayegi aur manual intervention lagega.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Web scraping ke liye custom Playwright tool define kar. 
  The Logic: Client-Side Rendering (React SPA) wali sites ke liye "wait timer" logic dalna zaroori hai, warna empty div return hoga. HTML sanitize karke sirf `innerText` nikal, raw HTML mat dena!

  Task [2]: RAG Compliance Checker tool set kar. 
  The Logic: Yeh tool internal documents (jaise `testing_and_evaluation_llm.pdf`) se specific policy nikalega.

  🔥 **Combo Task:** Master Agent Orchestration! `Tool` array mein apna Playwright scraper aur RAG checker wrap kar. Agent initialize kar aur usko ek **Context-Rich Prompt** de. Prompt mein specify kar ki ek Target URL ko evaluate kare based on "methodologies for evaluating social bias" aur output specifically delimiting brackets `[RESULT: <value>]` mein de.
  **Challenge:** Target URL aur RAG se aane wale data ke beech "Cross-Data Contamination" na ho, iska dhyan rakh. RAG read-only rehna chahiye.

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Terminal execution mein Thought process dono tools ko call karega aur final string me strict formatting aayegi:
* `[RESULT: BIASED] - The article exhibits extreme favoritism violating our rulebook.`
💬 **Quick Verify:** "Agar koi pooche — Indirect Prompt Injection scraping mein kaise agent ko hijack kar sakti hai — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **Parallel/Sequential Tool Calling:** Agent ek sath external reality aur internal context laata hai.
- **RAM-Intensive Tools:** Playwright heavy hai. Production mein isko serverless (AWS Lambda) ya RabbitMQ queues pe dalte hain.
- ⚠️ **Anti-Pattern:** Playwright se raw HTML agent ko pass karna — kyunki scripts/tags se token limit cross ho jayegi. Sahi tarika: HTML sanitize kar aur sirf innerText de.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 1: Agent Foundations, Multi-Tool Integration & DB Persistence → Level 1.3: Environment Bootstrapping & Persistent Vector DB [🟡 Intermediate]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Vector DB ko har baar shuru se mat bana. Disks pe data persist kar (save kar) taaki startup fast-track ho (Idempotency).

2. 💥 Why? (Production Impact)
- Har baar system run hone pe massive documents ko dobara Extract -> Embed karne se server VRAM/compute waste hoga aur Data Duplication hogi.
- DRY (Don't Repeat Yourself) principle tootega.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Environment variables setup kar. `.env` banake `load_dotenv` chala.
  The Logic: Secret keys aur API auth data code mein hardcode hone se bachana hai (GitHub leak se rokna).

  Task [2]: Playwright aur baaki tools ko alag `utils` folder se import kar.
  The Logic: Boilerplate code kam hoga aur modularity aayegi.

  🔥 **Combo Task:** Persistent Chroma DB setup kar. Ek `persist_directory` assign kar. **CRITICAL STEP:** Chroma initialization ke time wahi exact `embedding_function` (Llama 3.2) pass kar jisse purana data embed hua tha. Phir is VectorStore ko `as_retriever` function use karke search engine (Retriever interface) mein convert kar (Cosine similarity, top 3 results).
  **Challenge:** Yeh ensure kar ki agar folder already exist karta hai, toh text embedding dobara add na ho (Idempotency maintain ho).

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Console par database initialization ki confirmation aani chahiye:
* `DB initialized. Browser type: <class 'playwright.async_api._generated.Browser'>`
💬 **Quick Verify:** "Agar koi pooche — Dimension mismatch error kya hota hai Vector DB mein — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **`embedding_function` (The Critical Link):** Chroma ko disk se load karte time same math engine chahiye, warna usko dimensions samajh nahi aayenge aur similarity search fail hogi.
- **Idempotency:** DB exist karta hai toh add process skip karo. Same data baar-baar embed mat karo.
- ⚠️ **Anti-Pattern:** Har jupyter notebook cell mein initialization logic repeat karna — kyunki code clutter hoga. Sahi tarika: `utils/tools.py` use kar.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 1: Agent Foundations, Multi-Tool Integration & DB Persistence → Level 1.4: Vector Store Integration & Custom Retriever Tool [🟡 Intermediate]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Vector Store sirf ek data godown hai. Agent ko directly usme bhejne ki jagah Retriever interface se wrap kar aur usko ek proper LLM `@tool` bana.

2. 💥 Why? (Production Impact)
- Agent LLM HNSW vector index arrays se directly baat nahi kar sakta. 
- Bina strict tool Docstring aur validation ke, LLM hallucinate karega aur sahi tool select nahi karega.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Relative directory path use karke DB load kar. Absolute paths (C:/ drive) avoid kar!
  The Logic: Absolute paths server/teammates ke paas break ho jayenge.

  Task [2]: ⭐Fail Fast Approach laga! Agent banane se pehle directly Vector Store pe ek test `similarity_search` run kar.
  The Logic: Connectivity check karne aur Dimension mismatch errors jaldi catch karne ke liye.

  🔥 **Combo Task:** Custom Tool Decorator laga! `@tool` use karke `bias_detection` function bana. Usme **strict type hinting** (`query: str`) de. Aur sabse main — ek ultra-specific **docstring** likh jo Agent ko clearly bataye ki yeh tool kab use karna hai. Us function ke andar `retriever.invoke(query)` chalake Document objects ko formatted string mein convert kar aur return kara. Agent ki tarah tool invoke karke test kar!
  **Challenge:** Docstring itni strong honi chahiye jisme "You must use this tool for..." jaisa strict API contract ho.

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Pehle test pass hona chahiye, phir tool ka custom output aana chahiye:
* `Testing DB Connectivity...`
* `Test Pass! Found doc: Section 4.1: Social bias evalu...`
* `Retrieved Bias Rules: Section 4.1: Social bias evaluati...`
💬 **Quick Verify:** "Agar koi pooche — Path Traversal ya Directory Traversal attack vector DB mein kaise rokna hai — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **Strict Docstring:** `@tool` lagane ke baad Agent model tera docstring padhta hai "system prompt" ke roop mein. Weak docstring = Agent ignores the tool.
- **Type Hinting (`query: str`):** LangChain Pydantic par based hai. Type hint miss kiya toh Pydantic Validation error finkega.
- ⚠️ **Anti-Pattern:** Seedhe Tool bana dena bina preliminary `similarity_search` test kiye (Fail Fast avoid karna) — kyunki error seedha agent loop mein aayega jise debug karna bohot hard hai. Sahi tarika: Pehle DB connection raw check kar!

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏁 MODULE 1 RECAP — Tera Status Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Siksha Summary:
- Core Agent framework aur ReAct loop logic set karna.
- Playwright aur RAG ko combine karke Multi-tool workflow banana.
- Boilerplate aur VRAM bachane ke liye Persistent DB setup aur Idempotency.
- Vector DB ko securely Agent Tool mein wrap karna with strict docstrings & "Fail Fast" connectivity checks.

Guru-ji's Warning:
"Check kar le bhai! Kya tujhe yeh sab bina cheat sheet ke karna aa gaya hai? Agar inme se ek bhi cheez mein doubt hai ya confuse hai, toh chup chaap peeche ja aur wapas execute kar. Aage badhne ka koi fayda nahi agar basics hile hue hain!"

⚡ GURUDAKSHINA (The Checkpoint):
"Sare Levels clear hue? Screenshots taiyar rakh! Agar sab properly done hai toh type 'CONTINUE' for the next Module."

--- ⏸️ OUTPUT LIMIT APPROACHING. Type 'CONTINUE' to get the next part.
✅ Completed so far : Level 1.1, 1.2, 1.3, 1.4 (Full Module 1 Completed)
⏳ Remaining       : Level 2.1, 2.2, 2.3 (Module 2 Pending)
📊 Progress        : 4 Levels done / 7 Levels total | Module 1 of 2

Chal bhai, break over! Haath wapas keyboard pe rakh. Module 1 mein apan ne foundations set kar liye. Ab time hai in tools ko ek asli Agent ke dimaag ke saath jodne ka, errors ko debug karne ka, aur production-level monitoring lagane ka. 

Seedha terminal pe chal, Module 2 ko phodte hain!

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 2: Assembly, Execution, Debugging & Observability → Level 2.1: Agent Initialization & Tool Assembly [🟡 Intermediate]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Tools ko ek array mein pack karna aur ek AgentExecutor leader banana jo "Structured Chat" ke through complex multi-input tools ko handle kar sake.

2. 💥 Why? (Production Impact)
- Normal `Zero-Shot ReAct` agents complex inputs (jahan multiple variables pass karne hon) pe fail ho jate hain.
- Agar array ko memory mein theek se manage nahi kiya, toh Agent loop crash ho jayega aur memory leak hogi.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Dynamic Toolset Mutation kar! Ek khali `tools` list bana. Usme `append` use karke apna `bias_detection` tool daal, aur `extend` use karke Playwright tools (`new_tools` list) merge kar.
  The Logic: Yeh tera Plugin Architecture hai. List ko print karke "Review the array" zaroor karna taaki redundancy na ho.

  Task [2]: Loop se bachne ka guardrail set kar.
  The Logic: AI hallucinate karke same tool baar-baar chala sakta hai jisse API bills fat jayenge. Soch ki Agent initialization mein kaunsa parameter (`max_iterations`) jayega jo loop ko force stop kar de.

  🔥 **Combo Task:** AgentExecutor instantiate kar. `initialize_agent` (ya naye method) ka use kar. Tools pass kar, apna LLM pass kar, aur sabse important: Agent strategy ko `STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION` pe set kar.
  **Challenge:** Standard ReAct fail kyun hota yahan? Kyunki Playwright/RAG ko strictly JSON format mein inputs chahiye. Check kar tera agent initialize hone ke baad warning toh nahi de raha.

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Tera tool registry review print aesa dikhna chahiye:
* `Registered Tools: ['bias_detection', 'Playwright_Navigate', 'Playwright_Extract']`
💬 **Quick Verify:** "Agar koi pooche — JSON Schemas ka LLM execution mein kya role hai structured chat agent ke andar — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **`STRUCTURED_CHAT...`:** Yeh framework background mein prompt ko modify karke LLM ko force karta hai ki woh apna Action Input proper JSON dictionary schema format mein de.
- **`max_iterations`:** Infinite loop (DoS) se bachane ka safety switch.
- ⚠️ **Anti-Pattern:** Multiple inputs wale tools ke liye standard ZERO_SHOT agent use karna. LLM format tod dega. Sahi tarika: Hamesha Structured Chat use kar. Ek aur common mistake: Notebook cell rerun karte time array clear na karna (leads to duplicate state & memory leak).

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 2: Assembly, Execution, Debugging & Observability → Level 2.2: Scenario Execution & Verification [🔴 Advanced]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Agent ko as an "LLM as a Judge" use karke web scraper data aur RAG rulebook ko compare karwana, aur context-rich prompting se hallucinations khatam karna.

2. 💥 Why? (Production Impact)
- Vague prompts doge toh agent general internet gyan pel dega, private PDF ignore kar dega.
- State mismanagement (purane tools array) aur Copilot ke galat suggestions se code directly crash hota hai.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Notebook Memory Leak ko fix kar! ⭐State Mismanagement se bachne ke liye run hone se pehle purane array ko saaf kar.
  The Logic: `tools.clear()` try-except block mein laga taaki iteration safe ho.

  Task [2]: Context-Rich Prompt Engineering kar. Ek multi-line string query bana.
  The Logic: Sirf "bias check kar" mat bol. Usme Target URL (e.g. BBC coverage) daal, aur explicitly bata ki `bias_detection` tool se `testing_and_evaluation_llm.pdf` ka `page 127` hi refer karna hai "methodologies for evaluating social bias" ke liye. Ekdum laser focus!

  🔥 **Combo Task:** Agent ka `invoke` method call kar us query ke saath. Is poore logic ko `try-except` block mein daal taaki `AttributeError` pakad sake.
  **Challenge:** Kai baar Copilot hallucinate karke tujhe suggest karega `doc.page_content` print karna, jabki actually mein output sirf ek string (`str`) hoti hai. Agar agent fasa, toh figure out kar ki tera returned format string hai ya object!

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Terminal output aesa aana chahiye (Cross-Domain Task Evaluation Flawless Completion):
* `Starting execution...`
* `Based on the methodologies from page 127, the BBC coverage exhibits a Positive bias direction. `
* `Compliance Score is 90%. Source Credibility Check passed.`
💬 **Quick Verify:** "Agar koi pooche — 'LLM as a Judge' paradigm normal generation se kaise alag hota hai — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **Context-Rich Prompting:** Vector DB similarity pe chalta hai. Page number aur file name explicitly prompt mein dena RAG ka asli "⭐magic" trigger karta hai.
- **Evidence-based reasoning:** Agent output ab hawa mein nahi, balki PDF rules par grounded hai.
- ⚠️ **Anti-Pattern:** Copilot hallucination pe blind trust karna. Woh aksar purana LangChain syntax deta hai jisse `str object has no attribute 'page_content'` aayega. Sahi tarika: Object data-type debug print kar.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 Module 2: Assembly, Execution, Debugging & Observability → Level 2.3: LangSmith Observability & Programmatic Evaluation [🔴 Advanced]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ⚡ The Concept (Ultra-Short)
Unstructured verbose logs padhna chhod. LangSmith se Agent ke visual DAG traces dekh aur code likh kar automatically check kar ki retrieval accurate tha ya nahi (Evaluation).

2. 💥 Why? (Production Impact)
- "Verbose logs are unstructured" — 100 lines ke text mein millisecond ki latency dhundhna aur bug pakadna impossible hai.
- Bina programmatic evaluation (Hit Rate metrics) ke, tumhe pata hi nahi chalega ki Agent actually halluinate kar raha hai ya nahi. AIOps fail ho jayega.

3. 🎯 Practical Tasks (The Mission)
  Task [1]: Observability ON kar. Code ke andar ya `.env` file mein `LANGCHAIN_TRACING_V2` ko string `"true"` set kar. Apna API key aur project name bhi pass kar.
  The Logic: Yeh LangChain ko command dega ki saare Thought/Action traces background mein LangSmith server pe bheje.

  Task [2]: Payload Auditing aur Latency Check kar. Agent ko run kar aur LangSmith dashboard khol.
  The Logic: Wahan Visual DAG (Directed Acyclic Graph) dekh. Check kar tera Playwright tool aur RAG tool individually kitne milliseconds le raha hai. Ensure kar ki "Data Masking" policy lagayi hai taaki PII leak na ho.

  🔥 **Combo Task:** Programmatic Evaluation test likh! `langsmith` package se `Client` import kar. Ek specific `run_id` utha. Code ke andar `client.read_run(run_id)` call kar aur uske `outputs` fetch kar. Ek condition laga jo verify kare ki Agent ke final output mein "page label 127" (Metadata Grounding) mention hua hai ya nahi.
  **Challenge:** Tujhe console ya dashboard pe nahi dekhna hai, tera python code explicitly print karega ki test pass hua ya fail.

4. ✅ Definition of Done ("Kaise pata chalega ki sahi hua?")
Tera programmatic python check yeh final output dega:
* `Run Outputs: {'output': 'Based on testing_and_evaluation_llm.pdf, page label 127 states the social bias of LM...'}`
* `✅ Evaluation Passed: High Retrieval Accuracy (Hit Rate)`
💬 **Quick Verify:** "Agar koi pooche — Observability aur Evaluation mein exact farq kya hai LLMOps mein — toh seedha jawab de sakta hai?"

5. 🧠 Practical Takeaway (Asli Siksha — The Deep Dive)
- **Visual DAG (Directed Acyclic Graph):** Har tool, LLM chain aur retriever ka hierarchical tree view with exact latency.
- **Retrieval Accuracy (Hit Rate):** Kitni baar RAG ne exact sahi document/chunk nikala. 
- ⚠️ **Anti-Pattern:** Sirf `verbose=True` par depend rehna, ya Observability (kya hua) ko hi Evaluation (kya sahi hua) samajh lena. Sahi tarika: LangSmith traces use kar aur assertion tests (evaluation) likh.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏁 MODULE 2 RECAP — Tera Status Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Siksha Summary:
- Complex tools handle karne ke liye `Structured Chat` agent initialize karna.
- Infinite loops aur notebook memory leaks (`tools.clear()`) resolve karna.
- "LLM as a Judge" setup mein context-rich prompting ke through bias verify karna.
- Console logs se aage badh kar LangSmith DAG aur Programmatic Hit Rate evaluation implement karna (Production AIOps/LLMOps).

Guru-ji's Warning:
"Check kar le bhai! Tera Agentic workflow ab successfully test aur monitor ho raha hai. Agar evaluation fail ho raha hai, toh iska matlab RAG ne hawa me teer mara hai. Code verify kar, payloads audit kar. Jab tak saare concepts clear nahi hote, aage mat badhna!"

⚡ GURUDAKSHINA (The Checkpoint):
"Sare Levels clear hue? Screenshots taiyar rakh! 
Bhai tu ab ek PRO Agent Builder ban chuka hai. Notes ki saari siksha terminal pe practically execute ho gayi hai. Keep building hardcore tech!"

==================================================================================
