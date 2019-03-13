## 일정관리 웹 애플리케이션 제작
**@실습 환경** : Windows 10, VS Code, yarn 1.13, React 16.8.4 (CRA v2로 실습)

---

**1. 프로젝트 준비** 
1) create-react-app을 통해 프로젝트 생성
<pre><code>$ create-react-app todo-list</code></pre> <br/>

2) 리액트 컴포넌트 스타일링 //CRA v2 부터 css module과 sass 자동 지원되므르 eject으로 환경설정을 수정하지 않아도 됨 
- sass //css문법 확장. 코드의 중복을 줄여줌 
<pre><code>$ yarn add node-sass </code></pre> <br/>

- css module <br/>
css를 모듈화 하는것으로, 고유한 클래스 네임을 자동으로 생성. 스코프를 지역적으로 제한함. 이를 webpack으로 불러오면 사용자가 정의한 클래스 네임과 고유화된 클래스 네임으로 구성된 객체를 반환
<pre><code>css 파일명을 <b>파일명.module.css</b>로 생성하면 적용</code></pre><br/>

- class names 라이브러리 //className이 여러개일때, 보다 편하게 className를 join할 수 있음
<pre><code>$ yarn add classnames </code></pre>

설치 후 classnames에서 제공하는 bind 함수를 사용하면 css명을 생략 할 수 있음
<pre><code>const cx = classNames.bind(css 명)</code></pre>
<pre><code><\div className={cx('클래스 이름', '또 다른 클래스 이름')}>\</code></pre><br/>

- open-color 라이브러리 적용 //색상 팔레트 라이브러리
<pre><code>$ yarn add open-color </code></pre><br/>


**2. 컴포넌트 구성**
- PageTemplate : UI 전체적인 틀
- TodoInput : 일정추가 input 컴포넌트
- TodoItem : 각각의 일정 컴포넌트
- TodoList : 일정 데이터 배열을 TodoItem 컴포넌트로 구성된 배열로 변환하여 렌더링하는 컴포넌트
<br/>

**3. UI 화면 마크업 및 상태 관리 작업** <br/>

**4. 컴포넌트 리렌더링 최적화**
: virtual DOM에서의 불필요한 리렌더링을 방지하는 작업 <br/>
  상위 컴포넌트의 상태값 변화에 따라 해당 상태값을 props를 내려받는 하위 컴포넌트에서 불필요한 리렌더링 작업이 일어남 <br/>
  특히 리스트를 렌더링 할 경우에는 리렌더링을 최적화 하여 성능을 향상시키는 작업이 필요하다.<br/>
- 리액트 라이프사이클 메소드중 shouldComponentUpdate()로 방지
shouldComponentUpdate() : props또는 state를 변경하였을 때, 리렌더링의 여부를 지정하는 메소드. 기본 return값은 true

---

**@참고** : 리액트를 다루는 기술 w.김민준

**@프로젝트 url** : https://siminkyung.github.io/todo-list/
