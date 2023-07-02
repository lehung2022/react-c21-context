import Home from "./components/home/Home";
import NewPost from "./components/posts/NewPost";
import PostPage from "./components/posts/PostPage";
import About from "./components/about/About";
import EditPost from "./components/edit/EditPost";
import Missing from "./components/missing/Missing";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Route, Routes, useNavigate } from 'react-router-dom';

import './index.css';
import { DataProvider } from "./context/DataContext";
function App() {


  return (
    <>
      <div className="App">
        <Header title="React JS Blog" />
        <DataProvider>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/post" element={<NewPost />}>

            </Route>
            <Route path="/edit/:id" element={<EditPost />}>

            </Route>
            <Route path="/post/:id" element={<PostPage />}>

            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </DataProvider>
        <Footer />
      </div>
    </>
  )
}

export default App;
