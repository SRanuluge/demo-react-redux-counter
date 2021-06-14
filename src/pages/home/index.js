import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut, countIncrease, countDecrease } from "../../actions";
import classes from "./home.module.css";

function Home() {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  const { logFlag } = useSelector((state) => state.logReducer);

  return (
    <div className={classes.wrapper}>
      {!logFlag ? (
        <div className={classes.header}>
          <p>Please Log In!</p>
          <button onClick={() => dispatch(logIn())}>Sign In</button>
        </div>
      ) : (
        <>
          <div className={classes.header}>
            <p>Successfully loged In!</p>
            <button onClick={() => dispatch(logOut())}>Sign Out</button>
          </div>
          <span>{count}</span>
          <div>
            <button onClick={() => dispatch(countIncrease())}>+</button>
            <button onClick={() => dispatch(countDecrease())}>-</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
