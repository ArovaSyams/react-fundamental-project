import { useAppContext } from "../context/Context";

export default function Setting() {
  const [state, dispatch] = useAppContext();
  
  return (
    <input
    onChange={(e) => dispatch({
      type: 'updateUser',
      payload: {
        ...state.user,
        name: e.target.value
      }
    })}
    type="text" value={state.user.name || ''} placeholder="change name" style={{ margin: '0px 0px 10px 0px' }}/>
  );
}