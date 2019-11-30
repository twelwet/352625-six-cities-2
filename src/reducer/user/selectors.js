import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

const getAuthFlag = (state) => {
  return state[NAME_SPACE].isAuthRequired;
};

export {getAuthFlag};

