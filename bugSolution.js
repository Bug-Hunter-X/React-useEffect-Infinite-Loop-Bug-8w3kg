```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here
    let resetTimeout;
    if (count > 5) {
        resetTimeout = setTimeout(() => setCount(0), 0);
    }
    return () => clearTimeout(resetTimeout);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```