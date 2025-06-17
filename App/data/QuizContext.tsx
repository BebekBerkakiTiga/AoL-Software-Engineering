import React, { createContext, useState, ReactNode } from 'react';

export type QuizResultItem = {
  topic: string;
  subject: string;
  score: number;
};

type QuizContextType = {
  results: QuizResultItem[];
  saveResult: (result: QuizResultItem) => void;
};

export const QuizContext = createContext<QuizContextType>({
  results: [],
  saveResult: () => {},
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<QuizResultItem[]>([]);

  const saveResult = (result: QuizResultItem) => {
    setResults((prev) => {
      // replace jika topic & subject sama
      const filtered = prev.filter(
        (r) => !(r.topic === result.topic && r.subject === result.subject)
      );
      return [...filtered, result];
    });
  };

  return (
    <QuizContext.Provider value={{ results, saveResult }}>
      {children}
    </QuizContext.Provider>
  );
};
