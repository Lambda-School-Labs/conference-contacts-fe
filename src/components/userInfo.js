import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default function UserInfo(props) {
  const { data, qrcData, qrLink, qrPubLink, QRC } = props;
  // false means the QR code is set to the one for SWAAP users
  const [toggleQR, setToggleQR] = useState(true);
  return (
    <div className="desktop:hidden profile-card pb-4 bg-white mx-6 desktop:m-0 desktop:w-1/4 shadow-md mt-0 overflow-hidden">
      <div className="flex justify-between">
        <div className="flex pl-2 pt-4">
          <svg
            className=""
            width="25"
            height="30"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3469 6.07C15.4124 5.90162 15.4082 5.71415 15.3354 5.54884C15.2626 5.38353 15.1271 5.25391 14.9587 5.18851C14.7903 5.1231 14.6028 5.12726 14.4375 5.20008C14.2722 5.2729 14.1426 5.4084 14.0772 5.57678C13.7832 6.32204 13.6312 7.11569 13.6289 7.91683C13.6331 8.72593 13.7843 9.52754 14.075 10.2826C14.1387 10.4516 14.2668 10.5883 14.4313 10.6628C14.5958 10.7373 14.7831 10.7433 14.9521 10.6797C15.1211 10.616 15.2578 10.4878 15.3323 10.3233C15.4067 10.1589 15.4128 9.97153 15.3491 9.80256C14.8685 8.52677 14.868 7.30524 15.3469 6.07ZM12.905 10.7309C12.0139 8.8364 12.0133 7.00821 12.905 5.1411C12.9982 4.94522 13.0143 4.72144 12.9502 4.5142C12.886 4.30697 12.7463 4.13144 12.5587 4.02247C12.3711 3.9135 12.1494 3.87906 11.9376 3.92598C11.7258 3.97291 11.5394 4.09777 11.4155 4.27578C11.3884 4.31402 11.3647 4.35454 11.3448 4.39689C10.7885 5.56363 10.5107 6.74187 10.5107 7.9234C10.5107 9.10494 10.788 10.2876 11.3426 11.4664C11.363 11.5103 11.3874 11.5523 11.4155 11.5919C11.5397 11.7682 11.7253 11.8917 11.936 11.938C12.1466 11.9843 12.367 11.9502 12.5537 11.8422C12.7405 11.7343 12.8801 11.5604 12.9451 11.3547C13.0101 11.1491 12.9958 10.9266 12.905 10.7309ZM3.98868 13.3099C3.95709 13.2261 3.90929 13.1493 3.84802 13.0839C3.78674 13.0185 3.71319 12.9659 3.63157 12.9289C3.54994 12.892 3.46184 12.8715 3.37229 12.8686C3.28274 12.8657 3.1935 12.8804 3.10966 12.912C3.02581 12.9436 2.94902 12.9914 2.88365 13.0527C2.81828 13.114 2.76562 13.1875 2.72867 13.2691C2.69173 13.3508 2.67122 13.4389 2.66833 13.5284C2.66543 13.618 2.6802 13.7072 2.71179 13.7911C3.19241 15.0679 3.1935 16.2895 2.71453 17.5247C2.64913 17.6931 2.65329 17.8806 2.72611 18.0459C2.79892 18.2112 2.93442 18.3408 3.10281 18.4062C3.27119 18.4716 3.45865 18.4675 3.62396 18.3946C3.78928 18.3218 3.91889 18.1863 3.9843 18.0179C4.27801 17.2726 4.43004 16.479 4.43258 15.6779C4.42915 14.8682 4.27875 14.0659 3.98868 13.3099ZM6.8077 12.307C6.78084 12.2467 6.75289 12.187 6.72495 12.1267C6.67753 12.0226 6.60992 11.929 6.52605 11.8513C6.44219 11.7735 6.34372 11.7132 6.23636 11.6738C6.129 11.6344 6.01489 11.6166 5.90063 11.6216C5.78637 11.6267 5.67425 11.6543 5.57075 11.703C5.46726 11.7516 5.37445 11.8203 5.29771 11.9051C5.22097 11.9899 5.16183 12.0891 5.1237 12.197C5.08558 12.3048 5.06924 12.4191 5.07562 12.5333C5.08201 12.6475 5.11099 12.7593 5.1609 12.8622C6.05252 14.7567 6.05307 16.5854 5.1609 18.452C5.11203 18.5544 5.08382 18.6655 5.07788 18.7788C5.07194 18.8922 5.08838 19.0056 5.12627 19.1126C5.16415 19.2196 5.22274 19.3181 5.29869 19.4024C5.37463 19.4868 5.46645 19.5553 5.5689 19.6042C5.67134 19.653 5.78241 19.6813 5.89576 19.6872C6.0091 19.6931 6.12251 19.6767 6.2295 19.6388C6.3365 19.6009 6.43498 19.5423 6.51933 19.4664C6.60368 19.3904 6.67224 19.2986 6.72111 19.1962C6.75015 19.1353 6.77591 19.0745 6.8055 19.0137C7.30493 17.9067 7.55483 16.7924 7.5552 15.6708C7.55739 14.5512 7.30749 13.4277 6.8077 12.3087V12.307Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M11.0092 15.6609C11.0092 17.2321 10.6042 18.8032 9.79369 20.3634C9.66244 20.6043 9.442 20.784 9.1797 20.8641C8.9174 20.9442 8.63415 20.9183 8.39076 20.7919C8.14736 20.6655 7.96323 20.4487 7.87788 20.1881C7.79253 19.9274 7.81277 19.6437 7.93426 19.3978C9.11798 17.1192 9.22923 14.8986 8.268 12.6309C7.38788 10.8191 7.05469 9.50333 7.05469 7.9338C7.05469 6.36427 7.46022 4.79146 8.27074 3.23124C8.33415 3.10919 8.42097 3.00081 8.52625 2.91231C8.63154 2.82381 8.75323 2.75691 8.88437 2.71544C9.01551 2.67396 9.15353 2.65873 9.29056 2.67059C9.42759 2.68246 9.56094 2.7212 9.68299 2.78461C9.80505 2.84801 9.91342 2.93483 10.0019 3.04012C10.0904 3.1454 10.1573 3.26709 10.1988 3.39823C10.2403 3.52937 10.2555 3.66739 10.2436 3.80442C10.2318 3.94145 10.193 4.0748 10.1296 4.19685C8.9459 6.47552 8.8352 8.6961 9.79643 10.9638C10.6212 12.792 11.0092 14.0914 11.0092 15.6609Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="5.2575"
                y1="4.86701"
                x2="13.7806"
                y2="27.5577"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#933EFF" />
                <stop offset="1" stopColor="#0047FF" />
              </linearGradient>
            </defs>
          </svg>
          {/* displays how many connections a user has - by tristan */}
          {/* can change it back to "Swaaps!" later, going off of figma designs for now */}
          <div className="text-lg">
            {data.user.connections.length === 1 ? (
              <p>{data.user.connections.length} Swaap!</p>
            ) : data.user.connections.length === 0 ? (
              <p>0</p>
            ) : (
              <p>{data.user.connections.length}</p>
            )}
          </div>
        </div>
        {/* CURRENT IMAGE -> */}
        {/* <img
            className="rounded-full shadow-lg w-96 h-96 object-cover -mt-12 ml-2 -mr-12"
            src={data.user.picture}
            alt={`profile picuture of ${data.user.name}`}
          /> */}
        {/* EXPLORATION IMAGE -> */}
        <img
          className="rounded-full shadow-lg w-96 h-96 object-cover -mt-12  -mr-12 desktop:-mt-4  desktop:-mr-4 desktop:w-56 desktop:h-56 desktop:rounded-tr-md"
          src={data.user.picture}
          alt={`profile picuture of ${data.user.name}`}
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl pt-10 desktop:text-xl">{data.user.name}</h1>
      </div>
      {qrcData && (
        <div className="text-center mt-6">
          Swaap QR Code
          {/* <br /> <span className="text-xs">(for use between Swaap members)</span> */}
          <div className="flex justify-center mt-2 mb-6">
            <span className="qr-box p-4">
              <QRC
                includeMargin={false}
                level="Q"
                renderAs="svg"
                value={qrLink}
                fgColor="#6640FF"
              />
            </span>
          </div>
          <Popup
            trigger={
              <span className="cursor-pointer underline text-blue-400">
                click here for your public qr code
              </span>
            }
            modal
            position="top left"
          >
            {(close) => (
              <div className="modal text-center my-4 w-full object-contain rounded">
                Public QR code <br />{' '}
                <span className="text-xs">(share your info with non swaap users)</span>
                <div className="">
                  <div className="flex justify-center my-6">
                    <span className="qr-box p-4">
                      <QRC
                        includeMargin={false}
                        level="Q"
                        renderAs="svg"
                        value={qrPubLink}
                        fgColor="#6640FF"
                      />
                    </span>
                  </div>
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      close();
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      )}
    </div>
  );
}
