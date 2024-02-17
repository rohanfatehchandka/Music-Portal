import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Transition from "@/utils/Transition";
// import Image from "next/image";
// import FeaturesBg from "../images/features-bg.png";
// import FeaturesElement from "../images/features-element.png";
import { useToast } from "@chakra-ui/react";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";
// import Link from "next/link";
// import { PaperClipIcon } from "@heroicons/react/20/solid";
// import { Bar } from "react-chartjs-2";
// import Chart from "@/components/Chart";
// import { data } from "autoprefixer";
const myLoader = ({ src }) => {
  return `${src}`;
};

const Query = () => {
  const toast = useToast();
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response1, setResponse1] = useState();
  const [response2, setResponse2] = useState();
  // const [response3, setResponse3] = useState();
  const [loading, setLoading] = useState(false);

  const [response, SetResponse] = useState(null);
  const [chartData, setChartData] = useState(null);

  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const shareHandler = () => {
    const socialMediaLinks = new ShareLink("twitter");
    socialMediaLinks.get({ url: "https://google.com" });
    socialMediaLinks.open();
    console.log(socialMediaLinks);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("The entered data is ", userInput);

    // userInput is null
    if (!userInput) {
      console.log("Inside if");
      toast({
        title: "Invalid Input",
        position: "bottom-right",
        description: "Please fill the input field",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    const v = userInput.slice(0, 3500);
    console.log("userInput length: ", userInput.length);
    console.log("v length: ", v.length);
    setLoading(true);
    console.log("About to send a post request");
    try {
      const res = await fetch("http://127.0.0.1:5000/factcheck", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: v,
      });
      const data = await res.json();
      console.log("After the request");
      console.log("The data is ", data);
      console.log("Printing the object");
      console.log(data.result);
      console.log(data.result);
      // console.log(data.result[2]);

      setResponse1(data.result);
      setResponse2(data.result);
      // setResponse3(data.result[2]);
    } catch (err) {
      console.error(err.message);
    }
    console.log("Reponse returned");
    setLoading(false);
    setUserInput("");
  };

  // useEffect(() => {
  //   console.log(chartData);
  // }, [chartData]);

  const genReport = async (e) => {
    e.preventDefault();
    // console.log("The entered data is ", userInput);

    // userInput is null
    if (!userInput) {
      console.log("Inside if");
      toast({
        title: "Invalid Input",
        position: "bottom-right",
        description: "Please fill the input field",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }

    setLoading(true);
    console.log("About to send a post request");
    try {
      const res = await fetch("http://127.0.0.1:8000/report", {
        method: "POST",
        headers: {
          "Content-type": "text/plain",
        },
        body: userInput,
      });
      const data = await res.json();
      console.log(data);
      SetResponse(data);

      // console.log("After the request");
      // console.log("The data is ", data);
      // console.log("Printing the object");
      // console.log(data.result[0]);
      // console.log(data.result[1]);
      // console.log(data.result[2]);

      // setResponse1(data);
      // setResponse2(data);
      // setResponse3(data.result[2]);
    } catch (err) {
      console.error(err.message);
    }
    console.log("Reponse returned");
    setLoading(false);
    setUserInput("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome /> */}
        <section className="mt-36">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              {/* CTA box */}
              <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden w-full">
                {/* Background illustration */}
                <div
                  className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <svg
                    width="428"
                    height="328"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="35.542%"
                        cy="34.553%"
                        fx="35.542%"
                        fy="34.553%"
                        r="96.031%"
                        id="ni-a"
                      >
                        <stop stopColor="#DFDFDF" offset="0%" />
                        <stop stopColor="#4C4C4C" offset="44.317%" />
                        <stop stopColor="#333" offset="100%" />
                      </radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g fill="#FFF">
                        <ellipse
                          fillOpacity=".04"
                          cx="185"
                          cy="15.576"
                          rx="16"
                          ry="15.576"
                        />
                        <ellipse
                          fillOpacity=".24"
                          cx="100"
                          cy="68.402"
                          rx="24"
                          ry="23.364"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="29"
                          cy="251.231"
                          rx="29"
                          ry="28.231"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="29"
                          cy="251.231"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="342"
                          cy="31.303"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".48"
                          cx="62"
                          cy="126.811"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="78"
                          cy="7.072"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="185"
                          cy="15.576"
                          rx="6"
                          ry="5.841"
                        />
                      </g>
                      <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">Enter Email Contents</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Your Email contents will be analysed in detail and if
                      there is fraud such as Financial scam, unwanted promotions
                      and other kind of scams based on links sent in the content
                      it will be verified here.
                    </p>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div className="flex flex-col gap-4 justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <textarea
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500 focus:outline-none active:outline-none"
                          placeholder="Query..."
                          aria-label="Query..."
                          rows={10}
                          cols={25}
                        />

                        {!loading ? (
                          <div className="flex gap-3">
                            <button
                              onClick={submitHandler}
                              className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                            >
                              Submit
                            </button>
                            <button
                              onClick={genReport}
                              className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                            >
                              Report
                            </button>
                          </div>
                        ) : (
                          <button
                            disabled
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                        )}
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-gray-400 mt-3">Start Now!</p>
                    </form>
                    {/* Empty input toast */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}

        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          {/* <div
            className="absolute inset-0  pointer-events-none mb-16"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}
          {(response || response1) && (
            <h1 className="text-center h2 mb-4">Email Forensic Report</h1>
          )}
          <div className="w-full">
            <div className="pt-12 md:pt-10">
              {/* Section header */}

              {response !== null && (
                <div className="px-10 pb-12 md:pb-16 flex flex-col w-full">
                  <div className="">
                    <div>
                      <h1 className="text-2xl font-bold mb-3">Summary:</h1>
                      <div className="flex flex-col items-start justify-center">
                        {Object.keys(response.summary).map((key) => (
                          <div className="flex items-center gap-2" key={key}>
                            <h1 className="text-xl font-bold">{key}:</h1>
                            <p className="font-normal text-lg">
                              {response.summary[key]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="mt-8">
                      {response && (
                        <Chart
                          graph={response.graph}
                          total_delay={response.total_delay}
                        />
                      )}
                    </div> */}

                    <hr></hr>
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full overflow-scroll mt-12 border-2 border-gray-200 mb-10 p-5">
                        <thead className="bg-[#333333] text-white font-bold">
                          <tr>
                            <th className="px-4 py-2">Hop</th>
                            <th className="px-4 py-2">From</th>
                            <th className="px-4 py-2">By</th>
                            <th className="px-4 py-2">With</th>
                            <th className="px-4 py-2">Time (UTC)</th>
                            <th className="px-4 py-2">Delay</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {Object.keys(response.data).map((key) => (
                            <tr className="border-2" key={key}>
                              <td className="text-center border-x-2 text-base px-4 py-3">
                                {key}
                              </td>
                              <td className="text-center border-x-2 text-base px-4 py-3">
                                {response.data[key].Direction[0]} <br />
                                {response.data[key].country_name}
                              </td>
                              <td className="text-center border-x-2 text-base px-4 py-3">
                                {response.data[key].Direction[1]}
                              </td>
                              <td className="text-center border-x-2 text-base px-4 py-3">
                                {response.data[key].Direction[2]}
                              </td>
                              <td className="text-center border-x-2 text-base px-4 py-3">
                                {response.data[key].Time}
                              </td>
                              <td className="text-center text-base px-4 py-3">
                                {response.data[key].Delay}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h1 className="mt-5 font-bold text-xl mb-3">
                      Security headers:
                    </h1>
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full overflow-x-auto border-2 border-gray-200 mb-10">
                        <tbody className="">
                          {Object.keys(response.security_headers_dict).map(
                            (key) => (
                              <tr className="border-2" key={key}>
                                <td className="p-4 border-x-2 text-base font-bold">
                                  {key}
                                </td>
                                <td className="text-base font-normal px-7 py-6">
                                  {response.security_headers_dict[key]}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>

                    <h1 className="mt-5 font-bold text-xl mb-3">X-headers:</h1>
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full border-2 border-gray-200 mb-10">
                        <tbody className="">
                          {Object.keys(response.x_headers).map((key) => (
                            <tr className="border-2" key={key}>
                              <td className="p-4 border-x-2 text-base font-bold">
                                {key}
                              </td>
                              <td className="text-base font-normal px-7 py-6">
                                {response.x_headers[key]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h1 className="mt-5 font-bold text-xl mb-3">
                      Other headers:
                    </h1>
                    <div className="overflow-x-auto">
                      <table className="table-auto border-2 border-gray-200 mb-10">
                        <tbody className="">
                          {Object.keys(response.other_headers).map((key) => (
                            <tr className="border-2" key={key}>
                              <td className="p-4 border-x-2 text-base font-bold">
                                {key}
                              </td>
                              <td className="text-base font-normal px-7 py-6">
                                {response.other_headers[key]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Displaying the Response */}

              {/* Section content */}
            </div>
          </div>

          <div className="relative max-w-6xl -mt-11 mx-auto px-4 sm:px-6">
            {!response && response1 && (
              <div className="flex justify-center">
                <Box
                  className="mt-9 mb-9 w-[1000px] bg-gray-100"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      // width: 1000,
                      // height: 1000,
                    },
                  }}
                >
                  <Paper elevation={10} className="">
                    <div className="p-10 text-2xl ">{response1}</div>
                  </Paper>
                </Box>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Query;
