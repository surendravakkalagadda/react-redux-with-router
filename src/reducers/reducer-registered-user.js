export default function (state=null, action) {
  switch(action.type){
    case "REGISTER_USER":
    return action.payload;
    break;
  }
  return state;
}
