
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React ,{useState}from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes }
    from "react-router-dom";
    
const App =()=> {
  const apikey= process.env.REACT_APP_NEWS_API
  const [progress,setProgress]= useState(0)
  
  
    return (
      <div>
       
      <Router>
      <NavBar/>
      <LoadingBar
     
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
        <Route exact  path="/" element={<News apikey={apikey} key="general" pageSize={6} country = "in" category='general' setProgress={setProgress}/>}></Route>
        <Route exact  path="/general" element={<News apikey={apikey} key="general" pageSize={6} country = "in" category='general' setProgress={setProgress}/>}></Route>
        <Route exact path="/science" element={<News apikey={apikey} pageSize={6} country = "in" category='science' setProgress={setProgress}/>}></Route>
        <Route exact  path="/entertainment" element={<News apikey={apikey} pageSize={6}key="entertainment" country = "in" category='entertainment' setProgress={setProgress}/>}></Route>
        <Route exact  path="/health" element={<News apikey={apikey} key="health" pageSize={6} country = "in" category='health' setProgress={setProgress}/>}></Route>
        <Route exact  path="/sports" element={<News apikey={apikey} key="sports" pageSize={6} country = "in" category='sports' setProgress={setProgress}/>}></Route>
        <Route exact  path="/technology" element={<News apikey={apikey} key="technology" pageSize={6} country = "in" category='technology' setProgress={setProgress}/>}></Route>
        <Route exact  path="/business" element={<News apikey={apikey} key="business" pageSize={6} country = "in" category='business' setProgress={setProgress}/>}></Route>

        </Routes>
      
        
     
      </Router>
      </div>
    )
  }

export default App


