---
slug: acorn-agent-financial-use-cases
title: "How Acorn Agent Unlocks the Value of Your Business Data with GenAI"
authors: [stefan_anca, matthias]
tags: [acorn, GenAI]
---

<head>
  <meta property="og:image" content="/img/blog/acorn_financial_use_case.png" />
  <meta name="twitter:image" content="/img/blog/acorn_financial_use_case.png" />
</head>

Have you wondered how companies can leverage their data through GenAI technologies for business growth? With the **Acorn Agent Framework**, businesses can now extract actionable insights, enhance user engagement, and catalyze new revenue streams by using Generative AI technologies on their data. Acorn Agent enables Large Language Models (LLMs) to connect seamlessly with a company’s data via API calls, providing natural language access to complex sources of data. Let’s explore how Acorn Agent can unlock the value of your data, using financial services as an example.



## Unlocking Business Potential with Acorn Agent


Imagine a financial institution, such as a bank, which has extensive data on their users and their transactions. How can this data be used to drive additional business? Here are some examples that unlock the value of customer data through LLM Agents powered by Acorn Agent.

### Step 1: Developing a Financial Assistant ChatBot

A Financial Assistant ChatBot that can retrieve user transactions and credit card history when responding to user questions and extract valuable insights about user spending. Having access to the user data, the Financial Assistant can perform tasks like:
* **Transaction Analysis**: Which transactions accounted for most of my spending this month?
* **Expense Breakdown**: Show me a breakdown of my expenses per category for this month.
* **Trend Identification**: Highlight categories where my expenses increased from last month.


<img src="/img/blog/acorn_financial_use_case.png" alt="Acorn Agent Financial Use Case >" width="100%"/>

By displaying information in natural language, tables and visual charts, this chatbot enables users to retrieve the information they need. This improves customer satisfaction and reduces customer support costs. And as users interact with the chatbot for insights and analytics, they use their bank accounts more, fostering loyalty and increasing user engagement.

<!--truncate-->


### Step 2: Elevating to a Financial Advisor

Taking it a step further, the next layer of value comes from creating a comprehensive Financial Advisor. While the Financial Assistant focuses on past behavior analysis, the Financial Advisor delivers forward-looking recommendations for future actions and potential savings. For instance, it can answer:

* **Reward Tracking**: How many rewards have I earned with this credit card so far?
* **Product Review**: Based on my transactions over the past six months, which credit cards would have given me the most rewards?
* **Product Recommendation**: What financial products or services would I benefit from and why?

By accessing user transactions and credit card data through the institution’s API, the Financial Advisor can calculate total rewards and suggest better alternatives. It presents this information in natural language, tables, or even charts, making it easy for users to understand and act upon.

## How Acorn Agent works

The Acorn Agent Framework makes it simple to implement such LLM applications by safely integrating with the bank's existing data APIs. Acorn Agent creates a layer of APIs on top of the bank's internal data, which can take the form of REST or GraphQL APIs. These APIs provide all the necessary data for an agent to respond to user queries. The API endpoints are described in an LLM tool definition, which is a JSON file that outlines the required data and its type. Fortunately, most APIs already come with reference documentation, making it possible to automate their transformation into a JSON Schema.

With the Acorn Agent Framework, an LLM Agent application is built. Developers can choose from a wide range of LLMs available through the platform, including OpenAI models and open-source models on AWS Bedrock. Once the model is selected, the API tool definitions are loaded into the application, followed by the creation of a user-friendly interface – the access point for end-users.

The user interacts with the Agent as they would with a personal assistant. When the Agent receives a user query, the LLM behind it determines which API tools to call to gather the necessary data. The Acorn Agent framework handles the LLM tool calls, retrieves the API responses, and returns them to the LLM. This enables the Agent to use the additional information to provide a more accurate response to the user's query. By facilitating this workflow, we can deliver real value through user-centric applications.

<img src="/img/generic/acorn_overview.png" alt="Acorn Agent Overview" width="100%"/>

The above diagram shows the typical data flow for an Application built with Acorn Agent:

1. User inputs a question about their data (“Show me my most expensive transaction from last month”) into the Acorn Agent - enabled User Interface
2. The Acorn Agent - enabled Server Application sends this question to the LLM. The LLM decides that it can not answer this question based on its training data, so it formulates a Function Call (function `transactions` with arguments `{fromDate: 2024-05-09T00:00:00, toDate: 2024-06-09T00:00:00}`)
3. The Acorn Agent - enabled Server Application recognizes this LLM function call and executes this Request against the API by injecting a secure context that authenticates the user. The important safety feature defends against injection attacks. The API Response is retrieved.
4. The Acorn Agent - enabled Server Application sends the initial user question and the API response to the LLM, which is then enabled to answer the initial question.
5. The LLM sends the Final Response to the Server, which, in turn surfaces it to the user on the User Interface

Acorn Agent creates a secure “sandbox” around the LLM and guarantees that the LLM can only access user-authorized data. It guarantees safe and secure access to data and gives the LLM access to the most up-to-date information in real-time, which reduces hallucinations and results in the most accurate responses for users.

## Other potential Business Applications of Acorn Agent

Acorn Agent can be the backbone of a multitude of applications across various industries. Let's delve into a few scenarios illustrating how businesses can harness this technology to unlock additional value.

### Enhanced Customer Support

Imagine a telecommunications company that leverages Acorn Agent to revolutionize their customer support operations. Instead of relying on traditional scripted responses, the company's customer service agents could interact with a powerful, AI-driven chat interface that accesses customer records, identifies issues, and suggests resolutions in real time.

For instance, a customer might inquire, "Why was my bill higher this month?" With Acorn Agent, the AI can quickly access the billing API, analyze the statement, and provide a detailed explanation, such as additional data usage or recent plan changes. This not only speeds up resolution processes, enhances customer satisfaction by providing precise and immediate responses and reduces the cost of customer support.

### Streamlined Internal Operations

In industries such as logistics and supply chain management, the ability to quickly access and update records can be a game-changer. Using Acorn Agent, employees can chat with their internal databases to track shipments, update inventory levels, and manage deliveries.

For example, an operations manager might ask, "What’s the current status of order #12345?" The AI, via the Acorn Agent interface, can query the order management system and provide immediate updates with relevant details, such as location, expected delivery time, and any issues encountered. This capability significantly reduces manual record-keeping time and allows staff to concentrate on high-value tasks that drive business growth.

### Dynamic HR Management

Human Resource departments can leverage Acorn Agent to streamline numerous processes, from recruitment to employee management. An HR manager might ask, "Who are the top-performing employees this quarter?" The AI would retrieve performance data from the company's HR management system and generate a detailed report with actionable insights.

When integrated with scheduling APIs, employees could interact with the AI to manage requests like leave, check holiday entitlements, or learn about upcoming training sessions. Queries such as "Do I have any remaining vacation days?" or "When is the next training session on workplace safety?" can be instantly resolved, simplifying HR processes, making HR managers more efficient and boosting employee engagement.

### Retail and Customer Experience

Retail businesses can utilize Acorn Agent to enhance customer interactions and improve the shopping experience. For instance, a customer might ask, "Do you have this product in stock in size M?" By connecting to the inventory management API, the AI provides real-time availability, suggests alternatives if the item is out of stock, and guides the user through the purchase process seamlessly.

Order tracking in retail also stands to benefit. Customers can inquire, "What’s the status of my order #987654?" and the AI can fetch real-time tracking information from the logistics API, offering immediate updates on order status, expected delivery times, and any potential delays, increasing customer satisfaction and engagement.

### Driving Business Growth with Acorn Agent

The Acorn Agent Framework’s powerful capability to transform data into actionable insights opens avenues for driving new business growth by:
* Enhancing user engagement and satisfaction with interactive and insightful tools.
* Providing data-driven recommendations for cross-selling and upselling products.
* Personalizing user experiences, ultimately leading to higher customer satisfaction and loyalty.

## Conclusion

In conclusion, Acorn Agent – The Data Agent Framework – represents a transformative leap in how businesses can utilize their data. By integrating LLMs with APIs, companies can unlock unprecedented value, drive user engagement, and unveil new business opportunities. Explore the power of Acorn Agent and set your business on a path to innovation and growth.