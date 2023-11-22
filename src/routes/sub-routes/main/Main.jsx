import {useValue} from '../../../context/AppProvider'

const Main = () => {
    const [state, dispatch ] = useValue()
    console.log(state);
  return (
    <div>Main</div>
  )
}

export default Main