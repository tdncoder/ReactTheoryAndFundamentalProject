const ErrorExample = () => {
  let count = 0;

  const handleCount = () => {
    count = count + 1;
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleCount} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
