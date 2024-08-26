import { ImageResponse } from "next/og";

// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030712",
          objectFit: "fill",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="600"
          height="600"
          style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"
        >
          <path
            style="opacity:1"
            fill="#030712"
            d="M-.5-.5h771C542.063 14.641 351.563 106.975 199 276.5 77.472 418.507 10.972 583.174-.5 770.5V-.5z"
          />
          <path
            style="opacity:1"
            fill="#f0f1f4"
            d="M770.5-.5h59c204.94 8.003 382.94 80.836 534 218.5 156.52 150.567 241.68 334.734 255.5 552.5 6.41 207.421-54.59 391.75-183 553-135.24 160.4-307.07 256.56-515.5 288.5-228.132 27.81-432.799-27.85-614-167C132.272 1302.54 31.438 1119.04 4 894.5a2476.8 2476.8 0 0 1-4.5-65v-59c11.473-187.326 77.972-351.993 199.5-494C351.563 106.975 542.063 14.641 770.5-.5z"
          />
          <path
            style="opacity:1"
            fill="#030712"
            d="M829.5-.5h2410v3402a805561.932 805561.932 0 0 0-1062 1062c27.58 24.08 55.92 47.25 85 69.5 1.55 1.29 3.22 1.96 5 2 323.87-324.03 647.87-647.87 972-971.5v162c-292.47 291.97-584.8 584.13-877 876.5a983.885 983.885 0 0 0 102 60c258.2-258.37 516.53-516.53 775-774.5v162c-222.47 221.97-444.8 444.13-667 666.5 36.33 17.11 73.33 32.44 111 46 1.67.67 3.33.67 5 0 183.53-183.7 367.2-367.2 551-550.5v162a262563.72 262563.72 0 0 0-429 428.5c43.47 12.53 87.47 22.53 132 30 98.87-99.03 197.87-197.87 297-296.5v162c-51.8 51.3-103.47 102.8-155 154.5 13.95 1.73 27.95 3.06 42 4 24.16 1.21 48.16 2.38 72 3.5h-1579c.17-540 0-1080-.5-1620A3717203.338 3717203.338 0 0 1-.5 4858.5v-4029a2476.8 2476.8 0 0 0 4.5 65c27.439 224.54 128.272 408.04 302.5 550.5 181.201 139.15 385.868 194.81 614 167 208.43-31.94 380.26-128.1 515.5-288.5 128.41-161.25 189.41-345.579 183-553-13.82-217.766-98.98-401.933-255.5-552.5C1212.44 80.336 1034.44 7.503 829.5-.5z"
          />
          <path
            style="opacity:1"
            fill="#f0f1f4"
            d="M1780.5 3239.5c54-.17 108 0 162 .5L1647 3535.5a987.425 987.425 0 0 1-19-143c51.03-50.87 101.87-101.87 152.5-153zM2104.5 3239.5c54-.17 108 0 162 .5L1716 3790.5a1182.634 1182.634 0 0 1-39-123c142.7-142.53 285.2-285.2 427.5-428zM2428.5 3239.5c54-.17 108 0 162 .5L1816 4014.5a2346.353 2346.353 0 0 1-53.5-108.5c222.2-222.03 444.2-444.2 666-666.5zM2752.5 3239.5c54-.17 108 0 162 .5L1943 4211.5c-23.34-31.01-45.5-62.84-66.5-95.5 292.2-292.03 584.2-584.2 876-876.5zM3076.5 3239.5c54-.17 108 0 162 .5L2093 4385.5c-26.4-27.07-52.07-54.73-77-83-.67-.67-.67-1.33 0-2 353.7-353.53 707.2-707.2 1060.5-1061zM1619.5 4859.5H-.5v-1c539.965-539.47 1079.8-1079.13 1619.5-1619 .5 540 .67 1080 .5 1620zM3239.5 3401.5v162c-324.13 323.63-648.13 647.47-972 971.5-1.78-.04-3.45-.71-5-2a1698.703 1698.703 0 0 1-85-69.5c353.69-354.35 707.69-708.35 1062-1062zM3239.5 3725.5v162c-258.47 257.97-516.8 516.13-775 774.5a983.885 983.885 0 0 1-102-60c292.2-292.37 584.53-584.53 877-876.5zM3239.5 4049.5v162c-183.8 183.3-367.47 366.8-551 550.5-1.67.67-3.33.67-5 0a1269.602 1269.602 0 0 1-111-46c222.2-222.37 444.53-444.53 667-666.5zM3239.5 4373.5v162c-99.13 98.63-198.13 197.47-297 296.5-44.53-7.47-88.53-17.47-132-30a262563.72 262563.72 0 0 1 429-428.5zM3239.5 4697.5v162h-41c-23.84-1.12-47.84-2.29-72-3.5-14.05-.94-28.05-2.27-42-4 51.53-51.7 103.2-103.2 155-154.5z"
          />
        </svg>
        <div tw="flex absolute flex-col">
          <h1 tw="text-8xl font-bold text-gray-50 relative">Qwertic</h1>
          <p tw="text-gray-50 text-xl -top-14 left-40">Full Stack Developer</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
