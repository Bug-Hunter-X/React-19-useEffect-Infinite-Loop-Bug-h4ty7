# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 involving the `useEffect` hook.  The error leads to an infinite loop due to an improperly defined dependency array, resulting in performance degradation and potential crashes.

The `bug.js` file shows the problematic code. The `bugSolution.js` offers a fix by correctly specifying the dependencies.

## Problem
Incorrectly using the `useEffect` hook and dependency array can easily lead to unintended infinite loops.  When a state variable within `useEffect` is added to the dependency array, and the `useEffect` modifies that state, a never ending update cycle results.

## Solution
The key is to carefully consider what values in the component trigger the effect. If an effect does not need to run on state changes, the empty array [] should be used as dependency.  If a state change is needed, only the necessary state variables should be in the dependency array.