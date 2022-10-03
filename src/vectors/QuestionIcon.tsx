import * as React from "react";
import { SVGProps } from "react";

const QuestionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.756 27.814C22.622 27.814 29 21.723 29 14.209 29 6.696 22.622.604 14.756.604 6.889.604.512 6.695.512 14.21s6.377 13.605 14.244 13.605Zm-.626-11.379v.062h1.295v-.062c.007-.426.054-.781.14-1.066.086-.285.225-.531.415-.737.191-.21.445-.41.761-.598a3.52 3.52 0 0 0 .81-.64c.226-.24.399-.513.517-.818a2.74 2.74 0 0 0 .184-1.026 2.67 2.67 0 0 0-.389-1.433 2.656 2.656 0 0 0-1.09-.989c-.467-.24-1.017-.36-1.65-.36-.583 0-1.114.11-1.592.33-.475.219-.858.537-1.15.952-.287.416-.445.916-.474 1.5h1.36c.028-.405.134-.733.318-.984.183-.251.412-.435.685-.552.273-.116.558-.175.853-.175.338 0 .645.067.922.201s.498.325.664.572c.165.248.248.54.248.876 0 .272-.05.519-.151.742a1.94 1.94 0 0 1-.4.593c-.168.168-.36.314-.571.438a4.688 4.688 0 0 0-.907.665c-.252.24-.446.554-.582.943-.137.388-.21.91-.216 1.566Zm.005 2.84c.19.182.42.273.685.273a.96.96 0 0 0 .837-.464.845.845 0 0 0 .134-.464.873.873 0 0 0-.285-.654.957.957 0 0 0-.686-.273.957.957 0 0 0-.685.273.873.873 0 0 0-.286.654c0 .255.095.473.286.655Z"
      fill="#F2F2F2"
    />
  </svg>
);

export default QuestionIcon;