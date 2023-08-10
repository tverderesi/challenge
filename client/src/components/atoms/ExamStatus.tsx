import { TExamStatus } from "../../interfaces/TExamStatus";
import statusDictionary from "../../assets/statusDictionary.json";

export const ExamStatus = ({ status }: { status: TExamStatus }) => {
  let textClass = "";
  switch (statusDictionary[status]["status"]) {
    case "success":
      textClass = "text-success";
      break;
    case "warning":
      textClass = "text-warning";
      break;
    case "error":
      textClass = "text-error";
      break;
    case "info":
      textClass = "text-info";
      break;
    case "neutral":
      textClass = "text-neutral-content";
      break;
    default:
      textClass = "text-neutral-content";
      break;
  }
  if (Object.keys(statusDictionary).indexOf(status.toString()) === -1) {
    return (
      <td className="font-semibold text-error">
        <span className="material-symbols-outlined symbols-heavy">error</span>
        <span>Erro</span>
      </td>
    );
  } else {
    return (
      <td>
        <span
          className={`font-semibold flex flex-row items-center gap-1 ${
            status === 2 ? "whitespace-nowrap" : ""
          } ${textClass}`}
        >
          <span
            className={`material-symbols-outlined ${statusDictionary[status][
              "symbolClasses"
            ].map((item) => `symbols-${item}`)}`}
          >
            {statusDictionary[status]["icon"]}
          </span>
          {statusDictionary[status]["name"]}
        </span>
      </td>
    );
  }
};
