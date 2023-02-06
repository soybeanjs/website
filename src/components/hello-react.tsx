/** @jsxImportSource react */

export default function HelloReact() {
  const title = 'React';
  const desc = '用于构建用户界面的 JavaScript 库';

  return (
    <div className="link-card">
      <a href="https://cn.vuejs.org/" target="_blank">
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{desc}</p>
      </a>
    </div>
  );
}
