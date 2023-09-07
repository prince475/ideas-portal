import React from 'react'
import jobPostImage from "./jobPostImage.png"

function IdeasCardList() {
  return (
   <>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
    <div className="w-[1160px] h-[72px] relative overflow-hidden bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
              <div className="flex justify-start items-center absolute left-[1014px] top-4 gap-4">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2.5 rounded-md bg-white">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M7.79496 17.5C8.38257 18.0186 9.15444 18.3333 9.99981 18.3333C10.8452 18.3333 11.6171 18.0186 12.2047 17.5M14.9998 6.66666C14.9998 5.34057 14.473 4.0688 13.5353 3.13112C12.5977 2.19344 11.3259 1.66666 9.99981 1.66666C8.67373 1.66666 7.40196 2.19344 6.46428 3.13112C5.5266 4.0688 4.99981 5.34057 4.99981 6.66666C4.99981 9.24181 4.3502 11.005 3.62453 12.1712C3.01242 13.1549 2.70636 13.6467 2.71758 13.784C2.73001 13.9359 2.7622 13.9938 2.88463 14.0846C2.99519 14.1667 3.49364 14.1667 4.49052 14.1667H15.5091C16.506 14.1667 17.0044 14.1667 17.115 14.0846C17.2374 13.9938 17.2696 13.9359 17.282 13.784C17.2933 13.6467 16.9872 13.1549 16.3751 12.1712C15.6494 11.005 14.9998 9.24181 14.9998 6.66666Z"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-10 w-10 relative rounded-[200px] bg-[#e5cfe7]">
                    <div className="self-stretch flex-grow w-10 h-10 relative opacity-[0.08] overflow-hidden rounded-[200px] border-[0.75px] border-[#101828]" />
                  </div>
                </div>
              </div>
          </div>
    <div className="flex-grow-0 flex-shrink-0 w-[1096px] h-[196px] rounded-2xl bg-cover bg-no-repeat bg-center border border-[#eaecf0]" 
       style={{ backgroundImage: `url(${jobPostImage})`, src: {jobPostImage} }} 
    />
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
      
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            IT Department
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
              <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
                Ticket
              </span>
              <span className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#101828]">
                {" "}
                automation
              </span>
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#17B26A" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1667L14.1668 5.83334M14.1668 5.83334H5.8335M14.1668 5.83334V14.1667"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
              Upvote
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            123
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            2 comments
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
              Underwriting Team
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
                Implement predictive analytics for more accurate risk assessment
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fffaeb] border border-[#fedf89]">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx={4} cy={4} r={3} fill="#F79009" />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#b54708]">
                  Pending
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
              View idea
            </p>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M5.8335 14.1667L14.1668 5.83334M14.1668 5.83334H5.8335M14.1668 5.83334V14.1667"
                stroke="#026AA2"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
          We need a way to simplify the process of receiving tickets
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#0086c9] border border-[#0086c9]"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">Upvote</p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">
              2 comments
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
              17-08-2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            Sales and Marketing
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Create personalized email campaigns based on customer profiles
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fffaeb] border border-[#fedf89]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#F79009" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#b54708]">
                Pending
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#0086c9] border border-[#0086c9]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            IT Department
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Ticket automation
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#17B26A" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            Actuarial Departmen
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Integrate machine learning to enhance actuarial modeling accuracy
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fef3f2] border border-[#fecdca]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#F04438" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#b42318]">
                Declned
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1092px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[929px] text-sm font-semibold text-left text-[#026aa2]">
            Customer Service Representatives
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Develop a chatbot to provide instant policy information to customers.
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fffaeb] border border-[#fedf89]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#F79009" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#dc6803]">
                Pending
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1044px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            Claims Processing Department
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Streamline claims processing with AI-assisted document verification
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#17B26A" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
            IT Department
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
              Ticket automation
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx={4} cy={4} r={3} fill="#17B26A" />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                Approved
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
            View idea
          </p>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667"
              stroke="#026AA2"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
        We need a way to simplify the process of receiving tickets
      </p>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.1665 17.5C7.93315 17.5 7.81647 17.5 7.72734 17.4546C7.64894 17.4146 7.5852 17.3509 7.54525 17.2725C7.49984 17.1834 7.49984 17.0667 7.49984 16.8333V8.33333H4.1665L9.99984 2.5L15.8332 8.33333H12.4998V16.8333C12.4998 17.0667 12.4998 17.1834 12.4544 17.2725C12.4145 17.3509 12.3507 17.4146 12.2723 17.4546C12.1832 17.5 12.0665 17.5 11.8332 17.5H8.1665Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">2 comments</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
            17-08-2023
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pt-5 border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0]">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M15.8332 9.99996H4.1665M4.1665 9.99996L9.99984 15.8333M4.1665 9.99996L9.99984 4.16663"
          stroke="#475467"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]">
        Previous
      </p>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg bg-[#0086c9]">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">1</p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            2
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            3
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            ...
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            8
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            9
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-lg">
        <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-lg">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
            10
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]">
        Next
      </p>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333"
          stroke="#475467"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</div>

   </>
  )
}

export default IdeasCardList