import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={css.container}>
        <Oval
          visible={true}
          height="64"
          width="64"
          color="#181818"
          secondaryColor="#333"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}
