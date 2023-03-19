export default function Button({ item, clickHandle }) {
  return (
    <div>
      <button onClick={clickHandle}>{item}</button>
    </div>
  );
}
