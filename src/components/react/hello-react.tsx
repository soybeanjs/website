export default function HelloReact() {
  const title = 'React';
  const desc = '用于构建用户界面的 JavaScript 库';

  return (
    <div className="link-card">
      <a href="https://reactjs.bootcss.com/" target="_blank" rel="noreferrer">
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{desc}</p>
      </a>
    </div>
  );
}
