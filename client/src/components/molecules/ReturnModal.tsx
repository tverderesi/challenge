import { Maybe } from "../../interfaces/TMaybe";

export function ReturnModal({
  loading,
  success,
  error,
  message,
}: {
  loading?: boolean;
  message?: string;
  success?: Maybe<String>;
  error?: Maybe<String>;
}) {
  return (
    <>
      {loading || success || error ? (
        <div
          className={`w-screen h-screen flex flex-col justify-center items-center fixed z-30 ${
            loading ? "backdrop-blur-xl" : null
          } transition-all duration-1000 top-0 left-0`}
        >
          {loading ? (
            <>
              {" "}
              <span className="loading loading-ring w-32"></span>
              <span className="text-3xl font-semibold mt-4">{message}</span>
            </>
          ) : null}
          {error ? (
            <div className="alert alert-error transition-all absolute left-[12.5%] bottom-10 w-[75vw]">
              {error}
            </div>
          ) : success ? (
            <div className="alert alert-success transition-all absolute left-[12.5%] bottom-10 w-[75vw]">
              {success}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
