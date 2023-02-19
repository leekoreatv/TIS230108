// function Header() {
//   return (
//     <header data-role="header">
//       <h1>Header.React</h1>
//     </header>
//   );
// }
// export default Header;

// JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
function Header({ ...props }) {
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>Header Componet</h1>
      </header>
    </div>
  );
}

export default Header; // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
