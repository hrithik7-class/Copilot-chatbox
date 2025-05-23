# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Deshboard Component

This component provides a dashboard layout with three main sections: an inbox sidebar, a chat area, and a details/AI Copilot section.

## Overview

The `Deshboard` component is a React functional component that utilizes a flexbox layout to create a responsive dashboard interface. It consists of three main sections:

-   **Left Section (Inbox Sidebar):**  A `MessageDetailsDesh` component that serves as an inbox sidebar. It's hidden on small screens and visible on larger (sm and up) screens.
-   **Middle Section (Chat Area):** A `MessageDesh` component that represents the main chat area. It takes up 65% of the width on small screens and 45% on larger screens.
-   **Right Section (Details/AI Copilot):** This section conditionally renders either the `AiCopilotDesh` or `DetailsDesh` component based on the `show` state.  It's hidden on small and medium screens and visible on large screens.

## Features

-   Responsive layout using flexbox.
-   Conditional rendering of `AiCopilotDesh` and `DetailsDesh` components.
-   Uses state to manage which component is displayed in the right section.
-   Utilizes components: `MessageDetailsDesh`, `MessageDesh`, `DetailsDesh`, and `AiCopilotDesh`.

## Usage

To use the `Deshboard` component, simply import it into your React application and render it:

```jsx
import { Deshboard } from './path/to/Deshboard';

function App() {
  return (
    <Deshboard />
  );
}

export default App;

```

# Overview Component

The `Overview` component provides a user interface for configuring Fin's tone and answer length.

## Overview

The `Overview` component is a React functional component that allows users to customize the behavior of Fin, an AI assistant. It includes options for selecting Fin's tone (e.g., Standard, Matter-of-Fact, Professional) and answer length (Succinct, Standard, Comprehensive).

## Features

-   **Tone Selection:** Allows users to choose from a variety of pre-defined tones for Fin's responses.
-   **Answer Length Selection:**  Provides options to control the length of Fin's answers.
-   **Preview:** Includes a preview section to see how the selected settings affect Fin's responses.
-   Responsive layout.

## Usage

To use the `Overview` component, simply import it into your React application and render it:

```jsx
import { Overview } from './path/to/Overview';

function App() {
  return (
    <Overview />
  );
}

export default App;
```
# Components

This project includes several React components that are used to build the user interface of the application. Here's an overview of each component:

1.  `Deshboard`: This component provides a dashboard layout with three main sections: an inbox sidebar, a chat area, and a details/AI Copilot section.
2.  `Overview`: This component allows users to configure Fin's tone and answer length. It includes options for selecting Fin's tone (e.g., Standard, Matter-of-Fact, Professional) and answer length (Succinct, Standard, Comprehensive).
3.  `AiCopilotDesh`: This component is used to display the AI Copilot section of the dashboard. It includes a chat interface for interacting with the AI assistant.
4.  `Inbox`: This component is used to display the inbox section of the dashboard.
5.  `Chat`: This component is used to display the chat interface for interacting with the AI
assistant.
6.  `Details`: This component is used to display the details section of the dashboard.
7.  `Tone`: This component is used to display the tone selection options. It includes a dropdown menu for selecting the tone.
8.  `AnswerLength`: This component is used to display the answer length selection options. It includes a dropdown menu for selecting the answer length.
9.  `Preview`: This component is used to display a preview of the selected tone and answer length options.
10. `MessageDesh`: This component is used to display the chat messages in the chat area of the dashboard.
11. `MessageDetailsDesh`: This component is used to display the message details in the inbox sidebar of the dashboard.
12. `DetailsDesh`: This component is used to display the details section of the dashboard.


# AiCopilotDesh Component

This component provides an AI Copilot interface within the dashboard, allowing users to interact with an AI assistant named Fin.


## Overview

The `AiCopilotDesh` component is a React functional component that displays an AI Copilot interface. It includes a header with tabs to switch between the AI Copilot and Details views, a greeting message, a suggested question, and an input field for users to ask questions.

## Features

-   **Tabbed Interface:** Allows users to switch between the AI Copilot and Details views.
-   **Greeting Message:** Displays a personalized greeting message from Fin AI Copilot.
-   **Suggested Question:** Provides a suggested question to help users get started.
-   **Input Field:** Allows users to type in their questions and submit them to the AI Copilot.
-   **Navigation:** Includes a link to the Overview page.

## Usage

To use the `AiCopilotDesh` component, simply import it into your React application and render it:

```jsx
import { AiCopilotDesh } from './path/to/AiCopilotDesh';

function App() {
  return (
    <AiCopilotDesh />
  );
}

export default App;
```

# DetailsDesh Component

This component provides a details interface within the dashboard, allowing users to view and manage various information related to a conversation or entity.

## Overview

The `DetailsDesh` component is a React functional component that displays detailed information. It includes tabs to switch between the AI Copilot and Details views, along with sections for assignee, links, user data, conversation attributes, company details, Salesforce, Stripe, and Jira integration.

## Features

-   **Tabbed Interface:** Allows users to switch between the AI Copilot and Details views.
-   **Assignee Section:** Displays information about the assignee.
-   **Links Section:** Allows users to manage related links.
-   **Collapsible Sections:** Utilizes collapsible sections for user data, conversation attributes, company details, Salesforce, Stripe, and Jira.
-   **Navigation:** Includes a link to the Overview page.

## Usage

To use the `DetailsDesh` component, simply import it into your React application and render it:

```jsx
import { DetailsDesh } from './path/to/DetailsDesh';

function App() {
  return (
    <DetailsDesh />
  );
} 

export default App;
```
# MessageDesh Component

This component provides a chat interface for users to communicate within the dashboard.

## Overview

The `MessageDesh` component is a React functional component that displays a chat interface. It includes a navigation bar with user details and actions, a chat section displaying messages, and an input area for users to send messages.

## Features

-   **Navigation Bar:** Displays user details and actions such as starring, calling, snoozing, and closing the chat.
-   **Chat Section:** Displays messages from both the user and the AI assistant (Fin).
-   **Automatic Scrolling:** Automatically scrolls to the bottom of the chat when new messages are added.
-   **Chat Input:** Allows users to type and send messages.
-   **Message Formatting:** Supports different message types (user, robot) with distinct styling.

## Usage

To use the `MessageDesh` component, simply import it into your React application and render it:

```jsx
import { MessageDesh } from './path/to/MessageDesh';

function App() {
  return (
    <MessageDesh />;
  );
}

export default App;
```
# MessageDetailsDesh Component

This component provides an inbox sidebar for displaying message details within the dashboard.

## Overview

The `MessageDetailsDesh` component is a React functional component that displays a list of inbox items with details such as sender, message, and time. It includes a header, sorting options, and a list of messages.

## Features

-   **Inbox Display:** Displays a list of inbox items with sender, message, and time.
-   **Sorting Options:** Allows users to sort messages by "5 Open" and "Waiting longest."
-   **Selection:** Highlights the selected message item.
-   **Icons:** Displays icons for each message sender, with different icons for specific senders.
-   **Layout Options:** Provides options to switch between different layout styles.

## Usage

To use the `MessageDetailsDesh` component, simply import it into your React application and render it:

```jsx
import { MessageDetailsDesh } from './path/to/MessageDetailsDesh';

function App() {
  return (
    <MessageDetailsDesh />
  );
}

export default App;
```
# OverviewPreviewAnswer Component

This component provides a preview of Fin's AI Agent's answer within the Overview section.

## Overview

The `OverviewPreviewAnswer` component is a React functional component that displays a preview of the AI agent's response. It includes options to view the preview in chat or email format and displays the AI agent's answer in a card format.

## Features

-   **Preview Options:** Allows users to switch between chat and email previews.
-   **AI Agent Answer:** Displays the AI agent's answer in a formatted card.
-   **Visual Appeal:** Uses a gradient background and styled components for a visually appealing preview.

## Usage

To use the `OverviewPreviewAnswer` component, simply import it into your React application and render it:

```jsx
import { OverviewPreviewAnswer } from './path/to/OverviewPreviewAnswer';

function App() {
  return (
    <OverviewPreviewAnswer />
  );
}

export default App;