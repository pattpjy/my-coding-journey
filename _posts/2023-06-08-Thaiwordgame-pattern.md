---
title: "Building a Thai Word Game: Implementing the Repository Pattern and Container/Presentation Pattern"
layout: post
author: "Patt Sookmark"
banner_image: asset/blog-patterns.png
---

<img class="blog-banner" src="/asset/blog-patterns.png" alt="blog-patterns" />
In this blog post, we will explore two essential architectural patterns used in the development of the Thai Word Game: the Repository Pattern and the Container/Presentation Pattern. These patterns provide structure, organization, and maintainability to our project, enabling us to separate concerns and promote code reuse. By implementing these patterns, we can create a scalable and maintainable application with clear separation between data access, logic, and user interface components.

### Understanding the Repository Pattern:

The Repository Pattern is a design pattern that provides an abstraction layer between the application and the data layer. It helps in managing data access and provides a consistent interface for interacting with data regardless of the underlying data structure. This is how I implemented a Word Data Repository using TypeScript and async/await:

```
// types/WordData.ts
interface WordData {
  id: number;
  img_url: string;
  audio_url: string;
  word: string;
  categories: string;
}

export default WordData;

```

```
// repositories/WordDataRepository.ts
import { getAllWords } from "../apiCall/apiCall";
import WordData from "../types/WordData";

class WordDataRepository {
  public async getAll(): Promise<WordData[]> {
    try {
      const data = await getAllWords();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch word data.");
    }
  }
}

export default WordDataRepository;

```

In the above example, we define the `WordData` interface in the `types/WordData.ts` file. This interface represents the structure of a single word data object.

The `WordDataRepository` class in the `repositories/WordDataRepository.ts` file encapsulates the logic for fetching word data. The `getAll` method makes an async call to the `getAllWords` function from the `apiCall` module. It handles the asynchronous nature of the operation using the `async/await` syntax and returns a promise that resolves to an array of `WordData` objects.

#### Testing WordDataRepository

To test the repository layer, you can create mock data or use a test-specific data source. By mocking the data, you can simulate different scenarios and verify that the repository behaves as expected. Here's an example of a unit test for the `getAll` method:

```
import WordDataRepository from "../repositories/WordDataRepository";

describe("WordDataRepository", () => {
  it("should fetch all word data", async () => {
    // Mock the data retrieval function
    const mockGetAllWords = jest.fn().mockResolvedValue([
      {
        id: 1,
        img_url: "example.com/image1.jpg",
        audio_url: "example.com/audio1.mp3",
        word: "Hello",
        categories: "Greeting",
      },
      {
        id: 2,
        img_url: "example.com/image2.jpg",
        audio_url: "example.com/audio2.mp3",
        word: "Food",
        categories: "Category1",
      },
    ]);

    // Create an instance of the repository with the mock function
    const wordDataRepository = new WordDataRepository(mockGetAllWords);

    // Call the getAll method
    const result = await wordDataRepository.getAll();

    // Assert that the mock function was called and returned the expected data
    expect(mockGetAllWords).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].word).toBe("Hello");
    expect(result[1].categories).toBe("Category1");
  });
});

```

In this test example, we use Jest as the testing framework. We create a mock function `mockGetAllWords` that returns a predefined array of word data objects. We then instantiate the `WordDataRepository` with this mock function and call the `getAll` method. Finally, we assert that the mock function was called and that the returned data matches our expectations.

By testing the repository layer and mocking data, we can ensure that the data access logic is functioning correctly and independently from the actual data source.

#### Benefit of using Repository Pattern

- Separation of concerns: The repository encapsulates the data access logic, allowing the rest of the application to focus on business logic.
- Testability: The repository can be easily tested by mocking the data access layer, ensuring reliable and isolated unit tests.

### Understanding The Container/Presentation Pattern:

The Container/Presentation Pattern, also known as the Smart vs. Dumb components or the Container vs. Presentational components, is a pattern that separates the concerns of data management and UI rendering in a component-based architecture. Container components (smart components) handle the logic, data fetching, and state management, while presentation components (dumb components) focus on rendering the UI based on the provided props.

#### Container components:

- Manage the state and data fetching.
- Implement callbacks and event handling.
- Pass down data and callbacks as props to the presentation components.
- Should have minimal or no UI rendering logic.
  ####Presentation components:
- Receive data and callbacks as props.
- Render the UI based on the provided props.
- Should be reusable and agnostic of the data source or state management.

```
// containers/WordBtnContainer.tsx
import { useState, useEffect } from "react";
import { WordData } from "../types";
import { getWordById } from "../apiCall/apiCall";
import WordBtn from "../components/WordBtn";

interface WordBtnContainerProps {
  id: number;
}

const WordBtnContainer: React.FC<WordBtnContainerProps> = ({ id }) => {
  const [wordData, setWordData] = useState<WordData | null>(null);

  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const data = await getWordById(id);
        setWordData(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchWordData();
  }, [id]);

  return <WordBtn wordData={wordData} />;
};

export default WordBtnContainer;

```

```
// components/WordBtn.tsx
import React from "react";
import { WordData } from "../types";

interface WordBtnProps {
  wordData: WordData | null;
}

const WordBtn: React.FC<WordBtnProps> = ({ wordData }) => {
  if (!wordData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={wordData.img_url} alt={wordData.word} />
      <span>{wordData.word}</span>
    </div>
  );
};

export default WordBtn;

```

In this code, we have separated the logic and rendering concerns. The `WordBtnContainer` is responsible for fetching the word data and managing the state using `useState` and `useEffect` hooks. It passes the fetched `wordData` as a prop to the `WordBtn` presentation component.

The `WordBtn` component receives the `wordData` prop and renders the UI based on the provided data. It handles the case when the data is still loading by displaying a loading message.

#### Benefit of using Container/Presentation Pattern

- Separation of concerns: The Container/Presentation Pattern allows you to separate the data management logic from the UI rendering, making the code more maintainable and testable.
- Reusability: Presentation components can be easily reused across multiple container components or in different parts of the application since they are agnostic of the data source or state management.
- Testing components in isolation:
  With the Container/Presentation Pattern, you can test the container and presentation components independently.
  - Container components: You can write unit tests to verify the logic, data fetching, and state management. Mock the dependencies and test the expected behavior when props or state change.
  - Presentation components: Since presentation components focus solely on rendering UI based on props, you can write snapshot tests or component render tests to verify the rendered output for different scenarios.
  - By testing components in isolation, you ensure that each component behaves correctly and can be easily maintained or modified without affecting other parts of the application.

Following the Container/Presentation Pattern brings clear separation of concerns, improves code organization, and promotes reusability. It also allows for easier testing and maintenance of the components.

Here's an example directory structure that incorporates the Repository Pattern and Container/Presentation Pattern:

```
├── src
│   ├── apiCall
│   │   └── apiCall.ts            # API call functions
│   ├── components
│   │   ├── containers            # Container components
│   │   │   ├── NavBarContainer.tsx
│   │   │   └── WordBtnContainer.tsx
│   │   └── presentation          # Presentation components
│   │       ├── NavBar.tsx
│   │       └── WordBtn.tsx
│   ├── repository
│   │   └── wordRepo.ts           # WordDataRepository class
│   ├── types
│   │   └── WordData.ts           # Type definition for WordData
│   ├── App.tsx                   # Main application component
│   ├── index.tsx                 # Entry point of the application
│   └── ...                       # Other application files and folders
├── public
│   ├── index.html                # HTML template
│   └── ...                       # Other static files
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── ...                           # Other configuration files
```

Explanation:

- The `src` folder contains the main source code of your application.
- The `apiCall` folder holds the API call functions responsible for fetching data from the server.
- The `components` folder is divided into `containers` and `presentation` sub-folders.
  - The `containers` folder contains container components that handle logic and data management.
  - The `presentation` folder contains presentation components that focus on rendering UI elements.
- The `repository` folder contains the `wordRepo.ts` file, which implements the WordDataRepository class responsible for data access and manipulation.
- The `types` folder holds the `WordData.ts` file, defining the type for WordData objects.
- The `App.tsx` file represents the main application component that brings together other components.
- The `index.tsx` file serves as the entry point of your application.
- The `public` folder contains static files, such as the HTML template (`index.html`).
- Other files and folders can be present based on your specific application needs and additional configuration files.

By implementing the Repository Pattern and Container/Presentation Pattern, we've achieved a robust and maintainable architecture for the Thai Word Game project. The Repository Pattern separates data access logic from the rest of the application, while the Container/Presentation Pattern promotes separation of concerns between data management and UI components. Together, these patterns enhance code organization, reusability, and testability. Adopting these patterns in your own projects can lead to cleaner, more scalable, and maintainable code bases.
