/** @jsxImportSource solid-js */

export default function HelloSolid() {
  const title = 'Solid';

  const desc = '一个用于构建用户界面，简单高效、性能卓越的JavaScript库';

  return (
    <div class="link-card">
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
