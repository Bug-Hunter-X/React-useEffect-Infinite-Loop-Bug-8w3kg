# React useEffect Infinite Loop
This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook. The issue arises from improperly updating the state variable within the effect's dependency array, leading to continuous re-renders.

## Bug Description
The `MyComponent` component uses `useState` to manage a `count` variable. The `useEffect` hook attempts to reset the `count` to 0 when it exceeds 5. However, this modification inside `useEffect` triggers a re-render, updating the `count` variable which makes the effect run again, causing an infinite loop.

## Solution
The solution involves correctly managing state updates within the `useEffect` hook. Avoid modifying the variables in the dependency array within the useEffect itself.  A more appropriate approach is demonstrated in the `bugSolution.js` file. This version uses a conditional to check the state and update it outside the useEffect's logic, thus resolving the infinite loop issue.