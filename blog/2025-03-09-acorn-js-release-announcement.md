# Announcing ACORN.js: The Easiest Way to Connect LLMs to GraphQL APIs

Acorn.js is a lightweight, open-source JavaScript library that makes it easy, secure, and reliable for LLMs to interact with GraphQL APIs. With ACORN.js, developers can point an LLM at a GraphQL API, and it will be able to invoke queries and mutations just like a human user—without needing complex middleware or prompt engineering.

## Bridging the Gap Between LLMs and GraphQL

Large Language Models (LLMs) have transformed how we interact with data, but they come with a major limitation: they don’t natively understand how to call structured APIs like GraphQL. This creates a challenge for developers who want to harness LLMs in real-world applications—where APIs, not unstructured text, hold the data that matters.

GraphQL is  the standard interface for flexible data access, offering a user-friendly API schema and query interfaces. But getting an LLM to reliably invoke GraphQL queries and mutations requires manual integration, query validation, and error handling—a tedious and error-prone process.

We built Acorn.js to eliminate that boilerplate code and make it simple to integrate LLMs with GraphQL APIs with just a few lines of code:

```js
  //creates tools from APIs
  const jsonTools = await createToolsFromApiUri({
      graphqlUri: "https://rickandmortyapi.graphcdn.app/",
      enableValidation: true,
  });
  //uses the tools with LLM
  const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      tools: toOpenAiTools(jsonTools),
  });
  //calls the API from the tool invocation
  const functionCallResultMessages = await createOpenAiToolResults(
      response.choices[0].message,
      jsonTools,
  );
```

## What Does ACORN.js Do?

Acorn.js provides a seamless interface between LLMs and GraphQL, automating the  process of function invocation, validation, and security. Here’s how it works:

- Converts GraphQL APIs into LLM-friendly function calls so models can execute queries and mutations natively.
- Passes along API documentation strings so LLMs understand what each endpoint does and how to use it correctly.
- Validates and auto-corrects GraphQL queries, ensuring that every request an LLM makes is well-formed and compliant with the API schema.
- Implements security controls to prevent injection attacks and unauthorized access by sandboxing API calls and enforcing developer-defined security contexts.

With Acorn.js, developers can skip the hassle of writing API wrappers and let the LLM interact directly with GraphQL in a structured, predictable way.

## Key Features of ACORN.js

### 1.  Function Call Conversion

Acorn.js automatically translates GraphQL queries and mutations into function calls that an LLM can understand.

#### Example:

Instead of expecting an LLM to construct a raw GraphQL query, ACORN.js enables it to invoke an API call like this:

```javascript
const response = await acorn.invoke('getUserProfile', { userId: '12345' });
```

Acorn.js handles the GraphQL translation, query execution, and response formatting, ensuring that the LLM gets structured data without breaking the API.

### 2.  Semantic Annotation Handling

GraphQL schemas already include documentation strings that describe what each query and mutation does. ACORN.js passes these annotations to the LLM, helping it understand:

- What each endpoint does
- What parameters are required
- Which API call is best suited for a given user request

By leveraging existing GraphQL metadata, Acorn.js improves API discovery for LLMs and reduces the likelihood of incorrect API usage.

### 3.  Query Validation and Retry

LLMs aren’t perfect. They often generate invalid GraphQL queries due to missing parameters, incorrect syntax, or misunderstanding the API schema. ACORN.js solves this by:

- Validating every GraphQL request before execution
- Detecting malformed queries and prompting the LLM to retry
- Ensuring that API interactions always conform to the GraphQL schema

This means developers don’t have to manually handle failed API calls—Acorn.js takes care of it.

### 4. Secure Sandboxing of API Calls

One of the biggest risks of connecting LLMs to APIs is security. Without safeguards, an LLM could manipulate sensitive API parameters, inject unauthorized values, or access restricted data.

Acorn.js provides a security sandbox that prevents:

- LLMs from modifying sensitive parameters (e.g., session IDs, authentication tokens)
- Injection attacks that could compromise the API
- Unauthorized queries or mutations outside the defined security context

By restricting the LLM from accessing sensitive parameters, Acorn.js ensures that every API call made by an LLM is safe and controlled.

---

## How to Use Acorn.js



### OpenAI

### Langchain



### Step 1: Set Up a GraphQL API

(Create a simple GraphQL API with queries and mutations)

### Step 2: Integrate ACORN.js

(Show how to install and configure ACORN.js in a JavaScript project)

### Step 3: Connect an LLM and Execute Queries

(Provide an example of an LLM making a GraphQL query via ACORN.js)

---

## Try ACORN.js Today – It’s Open Source!

ACORN.js is now available on GitHub. Whether you’re building AI-powered applications, integrating LLMs with enterprise APIs, or just want to experiment with LLM-to-GraphQL interactions, ACORN.js makes the process simple and secure.

🔗 [Check out the ACORN.js repository on GitHub](#)

We’d love your feedback! Try it out, report issues, and contribute via pull requests. Join the discussion and help us shape the future of AI-driven GraphQL integrations.

