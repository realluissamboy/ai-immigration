import Add from "./testComponent";

export default function TestComponent() {
  const result = Add(2, 3);
  return (
    <div>
      <h2>Result of Add function:</h2>
      <p>{result}</p>
    </div>
  );
}
