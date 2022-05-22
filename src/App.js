import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import {Dashboard , ProtectedRoute , Register , Landing , Error} from './pages/index'
import {AllJobs  , AddJob , Profile , SharedLayout , Stats} from './pages/dashboard/index.js'

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
        }>
          <Route path='stats' element={<Stats/>}  />
          <Route path='all-jobs' element={<AllJobs/>} />
          <Route path='add-job' element={<AddJob/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
