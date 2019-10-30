import React from 'react';
import Login from 'containers/login';
import Home from 'containers/home';
import ArticlesList from 'containers/articlesList';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <ArticlesList />
    </div>
  );
}

export default App;
