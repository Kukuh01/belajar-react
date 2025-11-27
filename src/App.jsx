import './App.css'
import RegisterPage from './pages/register';

const Welcome = (props) => {

  const {text, variant = "bg-black"} = props;

  return (
    <h1 className={`text-3xl w-2xl h-20 font-bold underline text-amber-500 ${variant}`}>
      {text}
    </h1>
    );
}

function App() {

  return (
    <>
      <div className='flex justify-center min-h-screen items-center'>
          {/* <LoginPage></LoginPage> */}
          <RegisterPage></RegisterPage>
      </div>
    </>
  )
}

export default App
