import React from "react";
import ClientComponents from "./clientComponents";

export default class Client extends React.Component {
  apple = () => {
    return {
      logo: (
        <svg
          width="80"
          height="96"
          viewBox="0 0 80 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
            fill="white"
          />
        </svg>
      ),
      position: "Ui/Ux Designer",
    };
  };

  google = () => {
    return {
      logo: (
        <svg
          width="80"
          height="96"
          viewBox="0 0 50 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4 46.9c-12.5 0-23-10.2-23-22.7s10.5-22.7 23-22.7c6.9 0 11.9 2.7 15.6 6.3l-4.4 4.4c-2.7-2.5-6.3-4.4-11.2-4.4C14.2 7.7 7.1 15 7.1 24.2c0 9.1 7.1 16.5 16.3 16.5 5.9 0 9.3-2.4 11.5-4.5 1.8-1.8 2.9-4.3 3.4-7.8H23.5v-6.2h20.7c.2 1.1.3 2.4.3 3.9 0 4.7-1.3 10.4-5.4 14.5-3.9 4.1-9 6.3-15.7 6.3zm52.7-14.6c0"
            fill="white"
          />
        </svg>
      ),
      position: "Backend Developer",
    };
  };

  render() {
    return (
      <div className="flex flex-col px-16 py-16 xl:px-0">
        <div className="mb-8 text-3xl font-bold">My Clients</div>
        <div className="grid-row grid gap-4">
          <ClientComponents
            logo={this.apple().logo}
            company="Apple, inc."
            position={this.apple().position}
          />

          <ClientComponents
            logo={this.google().logo}
            company="Google, inc."
            position={this.google().position}
          />
        </div>
      </div>
    );
  }
}
