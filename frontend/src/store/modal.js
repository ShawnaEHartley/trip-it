export const closeModal = () => {
  return {type: "modalOff"}
};

const ModalReducer = (state = {on: false, component: null}, action) => {
  switch (action.type) {
    case "modalOn":
      return {on: true, component: action.component};
    case "modalOff":
      return {on: false, component: null};

    default:
      return state;
  }
};

export default ModalReducer;