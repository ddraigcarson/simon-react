export const loggerMiddleware = ({getState}) => next => action => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    console.groupCollapsed(`%c${action.type}`, 'color: crimson');

    console.group('%cCURRENT STATE:', 'color: steelblue');
    console.log(getState());
    console.groupEnd();

    console.group('%cACTION', 'color: mediumseagreen');
    console.log(action);
    console.groupEnd();

    next(action);

    console.group('%cNEXT STATE:', 'color: mediumpurple');
    console.log(getState());
    console.groupEnd();

    console.groupEnd();
  } else {
    next(action);
  }
}
